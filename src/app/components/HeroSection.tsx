import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(84,65,219,0.0); }
          50%       { box-shadow: 0 0 20px 2px rgba(84,65,219,0.13); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(52px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(52px) rotate(-360deg); }
        }
        .hero-fade-1 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.05s; }
        .hero-fade-2 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.18s; }
        .hero-fade-3 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.30s; }
        .hero-fade-4 { opacity: 0; animation: fadeUp 0.7s ease forwards; animation-delay: 0.42s; }
        .hero-float  { animation: float 5s ease-in-out infinite; }
        .badge-pulse { animation: badge-glow 3s ease-in-out infinite; }
        .orbit-dot   { animation: orbit 7s linear infinite; }
        .hero-btn::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(84,65,219,0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-36 md:pb-28 max-w-[1200px] mx-auto">
        {/* 배경 장식 */}
        <div className="pointer-events-none select-none">
          {/* 큰 그라디언트 orb */}
          <div
            className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, #c6c0ff 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, #fcd344 0%, transparent 70%)',
            }}
          />
          {/* 격자 패턴 */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(#5441d8 1px, transparent 1px), linear-gradient(90deg, #5441d8 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* 좌측 텍스트 */}
          <div className="z-10">
            {/* 상단 뱃지 */}
            <div className="hero-fade-1 inline-flex items-center gap-2 mb-7">
              <span
                className="badge-pulse flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'rgba(84,65,219,0.07)',
                  border: '1px solid rgba(84,65,219,0.18)',
                  color: '#5441d8',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5441d8] animate-pulse" />
                AI 기반 이름 안전 분석 서비스
              </span>
            </div>

            {/* 헤드라인 */}
            <h1 className="hero-fade-2 text-4xl md:text-[52px] font-bold leading-[1.15] mb-6 tracking-tight">
              <span style={{ color: '#191a2e' }}>아이 이름,</span>
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #5441d8 0%, #8b7cf8 60%, #c6c0ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                평생 놀림거리
              </span>
              <br />
              <span style={{ color: '#191a2e' }}>가 될 수도 있습니다.</span>
            </h1>

            {/* 서브카피 */}
            <p
              className="hero-fade-3 text-[17px] leading-relaxed mb-8 max-w-[420px]"
              style={{ color: '#474555' }}
            >
              요즘 아이들, 이름 하나로 별명 만들어 부릅니다.
              <br />
              우리 아이만큼은 그런 걱정 없이 자라게 하고 싶다면
            </p>

            {/* 인포 박스 */}
            <div
              className="hero-fade-3 flex items-start gap-3 p-4 rounded-2xl mb-9"
              style={{
                background:
                  'linear-gradient(135deg, rgba(228,223,255,0.5) 0%, rgba(228,223,255,0.2) 100%)',
                border: '1px solid rgba(198,192,255,0.6)',
              }}
            >
              <span className="text-lg mt-px">✨</span>
              <p
                className="text-sm font-medium leading-relaxed"
                style={{ color: '#3e25c3' }}
              >
                AI가 또래 환경에서 놀림 요소를 미리 분석해
                <br />
                <strong>안전한 이름만</strong> 추천합니다.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="hero-fade-4 flex items-center gap-4">
              <button
                className="hero-btn relative overflow-hidden flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]"
                style={{
                  background:
                    'linear-gradient(135deg, #5441d8 0%, #7c6ef0 100%)',
                  boxShadow:
                    '0 8px 32px rgba(84,65,219,0.35), 0 2px 8px rgba(84,65,219,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                사전 신청으로 혜택 받기
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-1"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className="flex items-center gap-2 text-xs"
                style={{ color: '#787586' }}
              >
                <div className="flex -space-x-1.5">
                  {['#c6c0ff', '#fcd344', '#a8f0d4'].map((c) => (
                    <div
                      key={c}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <span>
                  이미 <strong style={{ color: '#5441d8' }}>1,200+</strong>{' '}
                  부모님이 신청
                </span>
              </div>
            </div>
          </div>

          {/* 우측 이미지 */}
          <div className="relative flex items-center justify-center">
            {/* 배경 orb */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(198,192,255,0.35) 0%, transparent 65%)',
              }}
            />

            {/* 공전 장식 점 */}
            <div className="absolute w-[380px] h-[380px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="orbit-dot w-3 h-3 rounded-full"
                  style={{
                    background: '#fcd344',
                    boxShadow: '0 0 8px rgba(252,211,68,0.6)',
                  }}
                />
              </div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ animationDelay: '-3.5s' }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: '#c6c0ff',
                    animation: 'orbit 7s linear infinite',
                    animationDelay: '-3.5s',
                    boxShadow: '0 0 6px rgba(198,192,255,0.8)',
                  }}
                />
              </div>
            </div>

            {/* 메인 이미지 */}
            <div className="hero-float relative z-10 w-full max-w-[460px]">
              <div
                className="absolute inset-0 rounded-[28px] -z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(198,192,255,0.4) 0%, rgba(228,223,255,0.2) 100%)',
                  transform: 'translate(8px, 12px)',
                  filter: 'blur(20px)',
                }}
              />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvq4E4i9JI-v3nfhCIf4EkXHq4n0MAC8beYgw4-n3Th6iFJGo0g31XVpMXscgOzKCplNz7mA5VorvfmfyA1SL5-585ZN08i5KPnFhi7Dh54eXoexwK3puDX2yb031086durIbGD1fycHlCVTWGQgFvK-gbPvRA7maAdgMWFGlQyz2NXDL7l8d4i_I6Np7vTzAK_kZECVnlQa3uWfYH5wQHGodwUwxlOM2Tn1r4GrxH4RXpwQxMrsp0CYJ2GkhJ8-219p3GskKVwo"
                alt="Emotional Illustration of baby naming"
                width={600}
                height={500}
                className="w-full h-auto relative z-10"
                style={{
                  borderRadius: '28px',
                  boxShadow:
                    '0 32px 64px rgba(84,65,219,0.12), 0 8px 24px rgba(84,65,219,0.08)',
                }}
              />

              {/* 플로팅 뱃지 - 분석 완료 */}
              <div
                className="absolute -bottom-4 -left-6 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(84,65,219,0.15)',
                  border: '1px solid rgba(198,192,255,0.5)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-base"
                  style={{ background: 'rgba(84,65,219,0.1)' }}
                >
                  🛡️
                </div>
                <div>
                  <p
                    className="text-[11px] font-bold"
                    style={{ color: '#5441d8' }}
                  >
                    놀림 위험도
                  </p>
                  <p className="text-[10px]" style={{ color: '#787586' }}>
                    분석 완료 · 안전
                  </p>
                </div>
              </div>

              {/* 플로팅 뱃지 - 이름 점수 */}
              <div
                className="absolute -top-4 -right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(84,65,219,0.15)',
                  border: '1px solid rgba(198,192,255,0.5)',
                }}
              >
                <span className="text-base">⭐</span>
                <div>
                  <p
                    className="text-[11px] font-bold"
                    style={{ color: '#191a2e' }}
                  >
                    안전 점수
                  </p>
                  <p
                    className="text-[10px] font-bold"
                    style={{ color: '#5441d8' }}
                  >
                    98 / 100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
