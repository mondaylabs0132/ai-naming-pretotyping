import { createClient } from '@supabase/supabase-js';

/**
 * publishable 키 + RLS 조합으로 동작합니다.
 * 세션이 없는 요청은 Postgres `anon` 롤로 매핑되며,
 * email_signups 테이블에는 insert 정책만 열려 있습니다.
 * (정책 정의: docs/supabase-rls.sql)
 *
 * RLS를 우회하는 secret / service_role 키를 여기에 넣지 마세요.
 */
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLISHABLE_KEY!,
);
