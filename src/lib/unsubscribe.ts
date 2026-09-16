import { supabase } from '@/lib/supabase';

export type UnsubscribeStatus =
  | 'valid'
  | 'already_unsubscribed'
  | 'invalid'
  | 'error';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isValidToken(token: unknown): token is string {
  return typeof token === 'string' && UUID_RE.test(token);
}

/**
 * 링크를 연 것만으로 거부 처리하지 않는다. 메일 앱이 미리보기로 링크를
 * 자동 방문하는 경우가 있어, 페이지에서 상태만 보여주고 실제 처리는
 * 사용자가 버튼을 누른 뒤(unsubscribe/actions.ts)에 한다.
 *
 * anon 롤은 테이블 select 권한이 없다. 토큰 하나만 받는 security definer
 * 함수로 조회한다 (docs/supabase-migrations/2026-09-16-pre-registrations.sql).
 */
export async function getUnsubscribeStatus(
  token: string,
): Promise<UnsubscribeStatus> {
  if (!isValidToken(token)) return 'invalid';

  const { data, error } = await supabase.rpc(
    'pre_registration_unsubscribe_status',
    { p_token: token },
  );

  if (error) {
    console.error('[getUnsubscribeStatus]', error);
    return 'error';
  }
  if (data === 'valid' || data === 'already_unsubscribed' || data === 'invalid') {
    return data;
  }
  return 'error';
}
