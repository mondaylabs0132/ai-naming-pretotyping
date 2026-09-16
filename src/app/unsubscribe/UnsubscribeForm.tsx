'use client';

import { useActionState } from 'react';
import { unsubscribe, type UnsubscribeResult } from './actions';

/**
 * "수신거부 확인" 버튼 한 번을 거쳐야 실제 처리된다.
 * 결과에 따라 같은 자리에서 완료·안내 문구로 바뀐다.
 */
export function UnsubscribeForm({ token }: { token: string }) {
  const [result, formAction, isPending] = useActionState<
    UnsubscribeResult | null,
    FormData
  >(unsubscribe, null);

  if (result?.status === 'unsubscribed') {
    return (
      <Notice
        icon="check_circle"
        title="수신거부가 완료되었습니다"
        body="이메일 주소를 파기했으며, 더 이상 첫지음 출시·혜택 안내 메일을 보내지 않습니다."
      />
    );
  }

  if (result?.status === 'already_unsubscribed') {
    return (
      <Notice
        icon="info"
        title="이미 수신거부 처리된 주소입니다"
        body="이전에 요청하신 수신거부가 유효하며, 추가로 하실 일은 없습니다."
      />
    );
  }

  if (result?.status === 'invalid') {
    return (
      <Notice
        icon="link_off"
        title="유효하지 않은 링크입니다"
        body="링크가 잘렸거나 만료되었을 수 있습니다. 메일에 있는 링크를 다시 눌러 주세요."
      />
    );
  }

  return (
    <form action={formAction} className="mt-6">
      <input type="hidden" name="token" value={token} />
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white bg-[#5441d8] hover:bg-[#4534c4] hover:shadow-lg hover:shadow-[#5441d8]/25 cursor-pointer transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#5441d8] disabled:hover:shadow-none"
      >
        {isPending ? '처리 중...' : '수신거부 확인'}
      </button>
      {result?.status === 'error' && (
        <p className="mt-3 text-sm text-red-600">
          잠시 후 다시 시도해 주세요. 계속 실패하면 아래 이메일로 요청하실 수
          있습니다.
        </p>
      )}
    </form>
  );
}

export function Notice({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="mt-6 rounded-2xl border p-5"
      style={{ borderColor: 'rgba(84,65,219,0.15)', backgroundColor: '#fff' }}
    >
      <div className="flex items-start gap-3">
        <span
          className="material-symbols-outlined text-2xl"
          style={{ color: '#5441d8' }}
        >
          {icon}
        </span>
        <div>
          <p className="font-black text-on-background">{title}</p>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: '#474555' }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
