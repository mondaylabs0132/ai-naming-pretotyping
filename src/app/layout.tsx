import type { Metadata } from "next";
import Script from "next/script";
import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "@/lib/analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "첫지음 - 사주로 짓는 세련된 아기 이름",
  description:
    "작명소 30만 원 쓰기 전에, 1분 무료로. 사주와 한자 근거는 그대로 두고 결과는 요즘 감성으로. 이름마다 한 줄 뜻이 붙어 왜 이 이름인지 설명할 수 있습니다.",
  icons: {
    icon: "/main-icon.png",
  },
  verification: {
    other: {
      "facebook-domain-verification": "753b2w3hnylhwhm896yp027mcnybm5",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* App Router에서는 오탐인 룰 (pages/_document.js 전용) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          id="ga4-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}</Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* 트래킹 픽셀이라 next/image 최적화 대상이 아님 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
