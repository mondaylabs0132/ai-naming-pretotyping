-- email_signups RLS 정책
--
-- 목적: 사전 등록 폼은 "이메일 1건 insert"만 필요하다.
-- RLS를 우회하는 service_role / secret 키 대신 publishable 키를 쓰고,
-- anon 롤에 insert 권한만 열어 키가 노출되더라도 조회·수정·삭제가 불가능하게 한다.
--
-- 적용: Supabase 대시보드 → SQL Editor에 붙여넣고 실행 (재실행 가능).

-- 1) RLS 활성화. 이 시점부터 정책 없는 모든 접근은 거부된다.
alter table public.email_signups enable row level security;

-- 2) 익명 insert만 허용. select / update / delete 정책은 만들지 않으므로 전부 거부된다.
drop policy if exists "anon can insert email signups" on public.email_signups;

create policy "anon can insert email signups"
  on public.email_signups
  for insert
  to anon
  with check (true);

-- 3) 중복 신청을 앱에서 "이미 신청하셨어요!"로 처리하려면 unique 제약이 필요하다.
--    (actions.ts가 Postgres unique_violation 코드 23505를 보고 분기한다)
create unique index if not exists email_signups_email_key
  on public.email_signups (lower(email));

-- 확인용 쿼리 --------------------------------------------------------------
--
-- RLS 켜졌는지:
--   select relname, relrowsecurity from pg_class where relname = 'email_signups';
--
-- 정책 목록 (insert 1개만 나와야 정상):
--   select policyname, cmd, roles from pg_policies where tablename = 'email_signups';
--
-- 데이터 조회는 대시보드/secret 키로만 가능하다 (anon은 select 정책이 없어 거부됨).
