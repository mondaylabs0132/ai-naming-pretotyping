import Link from 'next/link';

const footerSections = [
  {
    title: 'Legal',
    links: [
      { label: '개인정보처리방침', href: '#' },
      { label: '이용약관', href: '#' },
    ],
  },
];

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Blog',
    href: '#',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    label: 'KakaoTalk',
    href: '#',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background: #13112a;
          position: relative;
          overflow: hidden;
        }
        .footer-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(198,192,255,0.15) 30%, rgba(198,192,255,0.15) 70%, transparent 100%);
        }
        .footer-link {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s;
          display: inline-block;
        }
        .footer-link:hover { color: rgba(255,255,255,0.9); }
        .social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          transition: background 0.2s, color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .social-btn:hover {
          background: rgba(84,65,219,0.3);
          border-color: rgba(84,65,219,0.5);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <footer className="footer-root h-svh">
        {/* 배경 orb */}
        <div
          className="footer-orb"
          style={{
            width: 400,
            height: 400,
            background:
              'radial-gradient(circle, rgba(84,65,219,0.12) 0%, transparent 65%)',
            top: -100,
            left: -80,
          }}
        />
        <div
          className="footer-orb"
          style={{
            width: 300,
            height: 300,
            background:
              'radial-gradient(circle, rgba(252,211,68,0.06) 0%, transparent 65%)',
            bottom: -60,
            right: -40,
          }}
        />

        <div className="relative max-w-300 mx-auto px-6 pt-16 pb-10">
          {/* 메인 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            {/* 브랜드 */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left gap-5">
              {/* <Link href="/" className="group inline-flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black text-white"
                  style={{
                    background: 'linear-gradient(135deg, #5441d8, #8b7cf8)',
                  }}
                >
                  A
                </div>
                <span
                  className="text-xl font-black tracking-tight"
                  style={{
                    background:
                      'linear-gradient(135deg, #fff 0%, rgba(198,192,255,0.9) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  첫지음
                </span>
              </Link> */}

              <p
                className="text-sm leading-relaxed max-w-65"
                style={{ color: 'rgba(255,255,255,0.42)' }}
              >
                아이의 평생을 함께할 소중한 이름,
                <br />
                AI와 데이터 기반의 정교한 분석으로
                <br />
                놀림 걱정 없는 안전한 이름을 선물하세요.
              </p>

              {/* 소셜 */}
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="social-btn"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>

              {/* 상태 뱃지 */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(84,65,219,0.18)',
                  border: '1px solid rgba(84,65,219,0.3)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#fcd344' }}
                />
                <span
                  className="text-xs font-semibold"
                  style={{ color: 'rgba(198,192,255,0.85)' }}
                >
                  정식 출시 준비 중
                </span>
              </div>
            </div>

            {/* 링크 섹션 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-5">
                  <h4
                    className="text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{ color: 'rgba(198,192,255,0.5)' }}
                  >
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 하단 구분선 */}
          <div className="footer-divider mb-7" />

          {/* 하단 카피라이트 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1">
              {[
                '상호명: 먼데이랩스',
                '대표자: 홍길동',
                '사업자번호: 000-00-00000',
              ].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p
              className="text-[11px] font-bold tracking-tight"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              © 2026 첫지음. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
