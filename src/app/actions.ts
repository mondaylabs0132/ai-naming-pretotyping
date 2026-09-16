'use server';

import { supabase } from '@/lib/supabase';
import { CONSENT_VERSION } from '@/lib/consent';

type State = { error?: string; success?: boolean };

/**
 * 브라우저의 type="email" / required는 클라이언트 검증일 뿐이고,
 * Server Action은 직접 POST할 수 있다. 여기서 다시 검증한다.
 * 같은 규칙이 DB CHECK 제약에도 걸려 있다 (docs/supabase-rls.sql).
 */
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
const EMAIL_MAX = 254; // RFC 5321 경로 최대 길이

export async function signupEmail(prevState: State, formData: FormData): Promise<State> {
  // 허니팟: 사람에게는 보이지 않는 필드가 채워져 있으면 봇으로 본다.
  // 탐지 사실을 알리지 않기 위해 성공 응답만 주고 저장하지 않는다.
  if ((formData.get('company') as string | null)?.trim()) {
    return { success: true };
  }

  const raw = (formData.get('email') as string)?.trim() ?? '';

  if (!raw) {
    return { error: '이메일을 입력해 주세요.' };
  }

  if (raw.length > EMAIL_MAX || !EMAIL_RE.test(raw)) {
    return { error: '이메일 형식을 확인해 주세요.' };
  }

  // unique index가 lower(email) 기준이므로 저장값도 소문자로 통일한다.
  const email = raw.toLowerCase();

  // 어떤 문구에 언제 동의했는지 함께 남긴다 (정보통신망법 제50조 동의 근거).
  // unsubscribe_token · consented_at은 DB 기본값으로 채워진다.
  const { error } = await supabase
    .from('pre_registrations')
    .insert({ email, consent_version: CONSENT_VERSION });

  if (error) {
    console.error('[signupEmail]', error);
    if (error.code === '23505') {
      return { error: '이미 신청하셨어요!' };
    }
    if (error.code === '23514') {
      // DB CHECK 제약 위반 — 앱 검증과 제약이 어긋난 경우
      console.error('[signupEmail] 형식 검증 불일치: docs/supabase-rls.sql');
      return { error: '이메일 형식을 확인해 주세요.' };
    }
    if (error.code === '42501') {
      // 42501은 두 가지 원인이 있고 메시지로 구분된다.
      //   'permission denied for table ...'          → GRANT 누락 (테이블 권한)
      //   'new row violates row-level security ...'  → RLS 정책 누락
      // 둘 다 docs/supabase-rls.sql로 해결한다.
      const cause = error.message.includes('permission denied')
        ? 'anon 롤에 GRANT INSERT 누락'
        : 'RLS insert 정책 누락';
      console.error(`[signupEmail] ${cause} — docs/supabase-rls.sql 참고`);
    }
    return { error: '잠시 후 다시 시도해 주세요.' };
  }

  return { success: true };
}
