'use server';

import { supabase } from '@/lib/supabase';
import { isValidToken } from '@/lib/unsubscribe';

export type UnsubscribeResult =
  | { status: 'unsubscribed' }
  | { status: 'already_unsubscribed' }
  | { status: 'invalid' }
  | { status: 'error' };

/**
 * 방침 7조: 수신거부 시 발송을 중단하고 이메일 주소를 파기한다.
 * DB 함수가 email을 null로 지우고 unsubscribed_at만 남긴다.
 */
export async function unsubscribe(
  _prev: UnsubscribeResult | null,
  formData: FormData,
): Promise<UnsubscribeResult> {
  const token = formData.get('token');
  if (!isValidToken(token)) return { status: 'invalid' };

  const { data, error } = await supabase.rpc('unsubscribe_pre_registration', {
    p_token: token,
  });

  if (error) {
    console.error('[unsubscribe]', error);
    return { status: 'error' };
  }

  if (data === 'unsubscribed') return { status: 'unsubscribed' };
  if (data === 'already_unsubscribed') return { status: 'already_unsubscribed' };
  if (data === 'invalid') return { status: 'invalid' };
  return { status: 'error' };
}
