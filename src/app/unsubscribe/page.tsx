import type { Metadata } from 'next';
import Link from 'next/link';
import { getUnsubscribeStatus, isValidToken } from '@/lib/unsubscribe';
import { Notice, UnsubscribeForm } from './UnsubscribeForm';

export const metadata: Metadata = {
  title: '메일 수신거부 | 첫지음',
  description: '첫지음 출시·혜택 안내 메일 수신을 거부합니다.',
  robots: { index: false, follow: false },
};

const CONTACT_EMAIL = 'mondaylabs0132@gmail.com';

/**
 * 발송 메일 하단의 수신거부 링크(/unsubscribe?token=<uuid>)가 여는 페이지.
 * 랜딩 어디에도 노출되지 않는다. 토큰 발급·발송은 서비스 저장소 쪽 스크립트가 한다.
 */
export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const raw = (await searchParams).token;
  const token = Array.isArray(raw) ? raw[0] : raw;

  const status = isValidToken(token)
    ? await getUnsubscribeStatus(token)
    : 'invalid';

  return (
    <div className="min-h-svh bg-surface">
      <header className="sticky top-0 z-10 glass-nav border-b border-[rgba(84,65,219,0.1)]">
        <div className="max-w-xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black tracking-tight"
            style={{ color: '#5441d8' }}
          >
            첫지음
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: '#787586' }}
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            홈으로
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-on-background">
          메일 수신거부
        </h1>

        {status === 'valid' && token && (
          <>
            <p
              className="mt-4 text-sm md:text-base leading-relaxed"
              style={{ color: '#474555' }}
            >
              첫지음 출시 알림 및 사전예약 혜택 안내 메일 수신을 거부하시겠습니까?
              확인을 누르면 발송을 즉시 중단하고, 개인정보처리방침 7조에 따라
              이메일 주소를 파기합니다. 사전예약 혜택도 함께 사라집니다.
            </p>
            <UnsubscribeForm token={token} />
          </>
        )}

        {status === 'already_unsubscribed' && (
          <Notice
            icon="info"
            title="이미 수신거부 처리된 주소입니다"
            body="이전에 요청하신 수신거부가 유효하며, 추가로 하실 일은 없습니다."
          />
        )}

        {status === 'invalid' && (
          <Notice
            icon="link_off"
            title="유효하지 않은 링크입니다"
            body="링크가 잘렸거나 만료되었을 수 있습니다. 메일에 있는 링크를 다시 눌러 주세요."
          />
        )}

        {status === 'error' && (
          <Notice
            icon="error"
            title="잠시 후 다시 시도해 주세요"
            body="일시적인 오류로 상태를 확인하지 못했습니다."
          />
        )}

        <p className="mt-10 text-xs leading-relaxed" style={{ color: '#787586' }}>
          링크로 처리가 어려우면{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('첫지음 메일 수신거부 요청')}`}
            className="font-semibold underline"
            style={{ color: '#5441d8' }}
          >
            {CONTACT_EMAIL}
          </a>
          으로 요청하셔도 됩니다.{' '}
          <Link href="/privacy" className="underline">
            개인정보처리방침
          </Link>
        </p>
      </main>
    </div>
  );
}
