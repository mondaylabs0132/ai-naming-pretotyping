-- email_signups → pre_registrations 이름 변경 + 동의 기록 · 수신거부 · 발송 이력
--
-- 적용: Supabase 대시보드 → SQL Editor에 전체를 붙여넣고 한 번 실행한다.
--       (한 트랜잭션으로 실행되므로 중간 실패 시 전부 롤백된다 — 재실행 안전)
--
-- 사전 확인:
--   - email_signups를 참조하는 FK · 뷰 · 트리거가 없음을 2026-09-16에 확인했다.
--   - 서비스 저장소가 email_signups를 직접 조회한다면 그쪽 코드도 함께 고쳐야 한다.
--
-- 이 파일 적용 전까지 앱 코드(actions.ts, unsubscribe/)는 새 이름을 찾지 못해 실패한다.

-- 1) 테이블 및 부속 객체 이름 변경 (데이터·정책·권한은 그대로 따라온다)
alter table public.email_signups rename to pre_registrations;
alter index public.email_signups_pkey rename to pre_registrations_pkey;
alter index public.email_signups_email_key rename to pre_registrations_email_key;
alter table public.pre_registrations
  rename constraint email_signups_email_format to pre_registrations_email_format;
alter policy "anon can insert email signups" on public.pre_registrations
  rename to "anon can insert pre registrations";

-- 2) 동의 기록 · 수신거부 · 발송 이력 컬럼
--    consent_version : 가입 폼 동의 문구 버전. 코드의 CONSENT_VERSION(src/lib/consent.ts)과 함께 올린다.
--    consented_at    : 동의 시각
--    unsubscribe_token: 메일 하단 수신거부 링크에 쓰는 열쇠. 사람마다 하나. "거부 여부"가 아니다.
--    unsubscribed_at : 수신거부 시각. 채워지면 발송 대상에서 제외한다.
--    sent_at         : 출시 알림 발송 시각. 서비스 저장소의 발송 스크립트가 채운다 (중복 발송 방지).
alter table public.pre_registrations
  add column consent_version   text,
  add column consented_at      timestamptz not null default now(),
  add column unsubscribe_token uuid        not null default gen_random_uuid(),
  add column unsubscribed_at   timestamptz,
  add column sent_at           timestamptz;

--    기존 행: 방침 시행일(2026-08-07) 기준 첫 문구로 소급 기록하고, 동의 시각은 가입 시각으로 맞춘다.
update public.pre_registrations
   set consent_version = '2026-08-07-v1',
       consented_at    = coalesce(created_at, now())
 where consent_version is null;

alter table public.pre_registrations
  alter column consent_version set not null;

create unique index pre_registrations_unsubscribe_token_key
  on public.pre_registrations (unsubscribe_token);

-- 3) 수신거부 시 이메일을 파기(null)해야 하므로 null 허용. CHECK/UNIQUE는 null을 통과시킨다.
alter table public.pre_registrations alter column email drop not null;

--    파기된 행은 이메일이 없고, 살아 있는 행은 반드시 이메일이 있어야 한다.
alter table public.pre_registrations
  add constraint pre_registrations_email_presence
  check ((email is null) = (unsubscribed_at is not null));

-- 4) 권한 정리. anon/authenticated에 TRUNCATE · REFERENCES · TRIGGER가 남아 있었다.
--    RLS는 TRUNCATE를 막지 못하므로 publishable 키만으로 테이블을 비울 수 있는 상태였다.
revoke truncate, references, trigger on table public.pre_registrations from anon, authenticated;

-- 5) 수신거부 함수. 테이블에 select/update 정책을 열지 않고 토큰 한 개로만 동작한다.
--    (정책을 열면 publishable 키로 이메일 전체를 읽을 수 있게 된다)
--    반환값: 'valid' | 'already_unsubscribed' | 'invalid'
create or replace function public.pre_registration_unsubscribe_status(p_token uuid)
returns text
language sql
security definer
set search_path = public, pg_temp
stable
as $$
  select coalesce(
    (select case when unsubscribed_at is null then 'valid' else 'already_unsubscribed' end
       from public.pre_registrations
      where unsubscribe_token = p_token),
    'invalid'
  );
$$;

--    반환값: 'unsubscribed' | 'already_unsubscribed' | 'invalid'
create or replace function public.unsubscribe_pre_registration(p_token uuid)
returns text
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_status text;
begin
  update public.pre_registrations
     set email = null,
         unsubscribed_at = now()
   where unsubscribe_token = p_token
     and unsubscribed_at is null;

  if found then
    return 'unsubscribed';
  end if;

  select case when unsubscribed_at is null then 'valid' else 'already_unsubscribed' end
    into v_status
    from public.pre_registrations
   where unsubscribe_token = p_token;

  return coalesce(v_status, 'invalid');
end;
$$;

revoke all on function public.pre_registration_unsubscribe_status(uuid) from public;
revoke all on function public.unsubscribe_pre_registration(uuid) from public;
grant execute on function public.pre_registration_unsubscribe_status(uuid) to anon;
grant execute on function public.unsubscribe_pre_registration(uuid) to anon;

comment on table public.pre_registrations is
  '첫지음 사전예약 목록. 수신거부 시 email을 null로 파기하고 unsubscribed_at만 남긴다.';
comment on column public.pre_registrations.consent_version is
  '가입 폼 동의 문구 버전. 문구를 바꿀 때 코드의 CONSENT_VERSION과 함께 올린다.';

-- 확인용 쿼리 --------------------------------------------------------------
--
-- 컬럼이 다 붙었는지:
--   select column_name, data_type, is_nullable, column_default
--   from information_schema.columns where table_name = 'pre_registrations' order by ordinal_position;
--
-- anon 권한이 INSERT 하나만 남았는지:
--   select grantee, privilege_type from information_schema.role_table_grants
--   where table_name = 'pre_registrations' and grantee in ('anon','authenticated');
--
-- 수신거부 통계:
--   select count(*) filter (where unsubscribed_at is null)     as active,
--          count(*) filter (where unsubscribed_at is not null) as unsubscribed
--   from public.pre_registrations;
--
-- 발송 대상 (서비스 저장소 발송 스크립트가 쓰는 조건):
--   select email, unsubscribe_token from public.pre_registrations
--   where unsubscribed_at is null and sent_at is null;
