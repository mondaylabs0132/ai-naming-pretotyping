import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Astra Naming - AI 아이 이름 분석',
  description:
    'AI가 또래 환경에서 놀림 요소를 미리 분석해 안전한 이름만 추천합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
