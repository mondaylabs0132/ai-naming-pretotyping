import Link from 'next/link';

const footerSections = [
  {
    title: 'Legal',
    // 이용약관은 법정 의무가 아니고, 현재 규율할 계약 관계(계정·결제·재화)가
    // 없어 링크를 두지 않는다. 결제를 붙이는 시점에 환불 정책과 함께 추가한다.
    links: [{ label: '개인정보처리방침', href: '/privacy' }],
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
      `}</style>

      {/* h-svh를 두지 않아 내용만큼만 차지한다. 짧은 마지막 스냅 지점은
          브라우저가 스크롤 최대치로 클램프하므로 하단에 딱 붙는다. */}
      <footer className="footer-root snap-start snap-always section-pt">
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

        <div className="relative max-w-300 mx-auto px-6 pt-10 md:pt-12 pb-10">
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
                사주와 한자 근거는 그대로 두고,
                <br />
                결과는 요즘 감성으로.
                <br />
                이름마다 왜 이 이름인지 설명이 붙습니다.
              </p>

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
                '대표자: 예병수',
                '사업자번호: 203-35-93380',
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
