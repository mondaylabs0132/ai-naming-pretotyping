import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Starlit Names — AI 신생아 작명 서비스 준비 중',
  description:
    'AI와 성명학을 결합한 작명 서비스를 준비하고 있어요. 오픈 알림을 받아보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
            <div className="flex items-center gap-2">
              <span className="text-xl text-primary">✦</span>
              <span className="text-base font-bold tracking-tight text-on-surface">
                Starlit Names
              </span>
            </div>
            <a
              href="#form"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              오픈 알림 받기
            </a>
          </div>
        </header>

        {children}

        <footer className="border-t border-outline-variant/20 py-8">
          <div className="mx-auto max-w-7xl px-6 md:px-20">
            <div className="flex flex-col items-start justify-between gap-4 text-sm text-on-surface-variant sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                <span className="font-semibold text-on-surface">
                  Starlit Names
                </span>
                <span className="text-on-surface-variant/60">— 사전 예약</span>
              </div>
              <p className="text-xs text-on-surface-variant/60">
                © 2024 Starlit Names. 수집된 개인 정보는 오픈 알림 외에 사용되지
                않습니다.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
