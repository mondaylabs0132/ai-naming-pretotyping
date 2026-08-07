-- email_signups RLS 정책
--
-- 목적: 사전 등록 폼은 "이메일 1건 insert"만 필요하다.
-- RLS를 우회하는 service_role / secret 키 대신 publishable 키를 쓰고,
-- anon 롤에 insert 권한만 열어 키가 노출되더라도 조회·수정·삭제가 불가능하게 한다.
--
-- 적용: Supabase 대시보드 → SQL Editor에 붙여넣고 실행 (재실행 가능).
--
-- 주의: SQL Editor는 붙여넣은 전체를 한 트랜잭션으로 실행한다. 중간 한 문장이
-- 실패하면 앞 문장까지 전부 롤백된다. 3)에서 중복 때문에 실패하는 경우가 있어
-- 1~2)를 먼저 실행하고 3~4)를 따로 실행하는 것을 권한다.

-- 1) 테이블 단위 권한. RLS와는 별개의 레이어다.
--    RLS는 "어떤 행을" 다룰 수 있는지 정하고, GRANT는 "이 테이블을 건드릴 수
--    있는지"를 정한다. GRANT가 없으면 정책이 아무리 맞아도 42501
--    "permission denied for table"로 거부된다.
--    (service_role / secret 키는 두 레이어를 모두 우회하므로 이 문제가 안 보인다)
grant insert on table public.email_signups to anon;

--    id가 serial이면 시퀀스 권한도 필요하다. identity 컬럼이면 불필요.
--    insert 시 시퀀스 관련 42501이 나오면 아래를 실행한다.
--    grant usage, select on all sequences in schema public to anon;

-- 2) RLS 활성화. 이 시점부터 정책 없는 모든 접근은 거부된다.
alter table public.email_signups enable row level security;

-- 3) 익명 insert만 허용. select / update / delete 정책은 만들지 않으므로 전부 거부된다.
--    GRANT(1)와 정책(3)이 둘 다 있어야 insert가 통과한다.
drop policy if exists "anon can insert email signups" on public.email_signups;

create policy "anon can insert email signups"
  on public.email_signups
  for insert
  to anon
  with check (true);

-- 4) 중복 신청을 앱에서 "이미 신청하셨어요!"로 처리하려면 unique 제약이 필요하다.
--    (actions.ts가 Postgres unique_violation 코드 23505를 보고 분기한다)
--
--    ★ 기존 행에 중복이 있으면 이 문장은 실패한다. 먼저 확인할 것:
--
--      select lower(email) as email, count(*)
--      from public.email_signups
--      group by 1 having count(*) > 1;
--
--    0건이 아니면, 아래로 중복을 정리한 뒤 인덱스를 만든다.
--    (파괴적 작업이므로 의도적으로 주석 처리해 둔다. ctid 순 = 물리적으로
--     먼저 들어온 행 하나만 남긴다)
--
--      delete from public.email_signups
--      where ctid in (
--        select ctid from (
--          select ctid, row_number() over (
--            partition by lower(email) order by ctid
--          ) as rn
--          from public.email_signups
--        ) t where rn > 1
--      );
create unique index if not exists email_signups_email_key
  on public.email_signups (lower(email));

-- 5) 형식 제약. with check (true)는 "행 소유권"만 열어주는 것이고 값 검증은 하지 않는다.
--    Server Action은 브라우저를 거치지 않고 직접 POST할 수 있으므로, 앱 검증이
--    뚫리거나 코드가 바뀌어도 DB가 막도록 같은 규칙을 여기에도 둔다.
--    (actions.ts의 EMAIL_RE / EMAIL_MAX와 동일한 규칙 — 한쪽만 바꾸지 말 것)
alter table public.email_signups
  drop constraint if exists email_signups_email_format;

--    not valid: 앞으로 들어오는 행만 검사한다. 기존 행에 형식이 깨진 값이
--    하나라도 있으면 valid 제약은 추가 자체가 실패하므로, 안전하게 이쪽을 쓴다.
alter table public.email_signups
  add constraint email_signups_email_format
  check (
    email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$'
    and char_length(email) <= 254
  ) not valid;

-- 확인용 쿼리 --------------------------------------------------------------
--
-- anon에 테이블 권한이 있는지 (INSERT 한 줄만 나와야 정상):
--   select grantee, privilege_type from information_schema.role_table_grants
--   where table_name = 'email_signups' and grantee = 'anon';
--
-- RLS 켜졌는지:
--   select relname, relrowsecurity from pg_class where relname = 'email_signups';
--
-- 정책 목록 (insert 1개만 나와야 정상):
--   select policyname, cmd, roles from pg_policies where tablename = 'email_signups';
--
-- 형식 제약이 걸렸는지 (convalidated=false면 기존 행은 미검사 = 정상):
--   select conname, convalidated from pg_constraint
--   where conname = 'email_signups_email_format';
--
-- 형식이 깨진 기존 행 찾기 (0건이면 아래 validate로 전체 검사로 승격 가능):
--   select id, email from public.email_signups
--   where email !~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]{2,}$' or char_length(email) > 254;
--
-- 위가 0건일 때만:
--   alter table public.email_signups validate constraint email_signups_email_format;
--
-- 데이터 조회는 대시보드/secret 키로만 가능하다 (anon은 select 정책이 없어 거부됨).
