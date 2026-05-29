'use server';

import { supabase } from '@/lib/supabase';

type State = { error?: string; success?: boolean };

export async function signupEmail(prevState: State, formData: FormData): Promise<State> {
  const email = (formData.get('email') as string)?.trim();

  if (!email) {
    return { error: '이메일을 입력해 주세요.' };
  }

  const { error } = await supabase.from('email_signups').insert({ email });

  if (error) {
    console.error('[signupEmail]', error);
    if (error.code === '23505') {
      return { error: '이미 신청하셨어요!' };
    }
    return { error: '잠시 후 다시 시도해 주세요.' };
  }

  return { success: true };
}
