'use client';

import Image from 'next/image';

export default function HeroSectionB() {
  const scrollToEmail = () => {
    const input = document.getElementById('email-input');
    const section = input?.closest('section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        (input as HTMLInputElement)?.focus();
      }, 800);
    }
  };

  return (
    <section className="relative overflow-hidden px-6 mx-auto w-full h-screen flex flex-col items-center justify-center section-pt">
      {/* 배경 장식 */}
      <div className="pointer-events-none select-none">
        <div
          className="absolute -top-32 -right-32 w-75 md:w-130 h-75 md:h-130 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #c6c0ff 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-50 md:w-90 h-50 md:h-90 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #fcd344 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#5441d8 1px, transparent 1px), linear-gradient(90deg, #5441d8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="w-full max-w-300 mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* 좌측 텍스트 */}
          <div className="z-10 text-center md:text-left flex flex-col items-center md:items-start">
            {/* 상단 뱃지 */}
            <div className="hero-fade-1 inline-flex items-center mb-6">
              <span
                className="badge-pulse flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold leading-none"
                style={{
                  background: 'rgba(84,65,219,0.07)',
                  border: '1px solid rgba(84,65,219,0.18)',
                  color: '#5441d8',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5441d8] animate-pulse shrink-0" />
                <span className="translate-y-[0.5px]">
                  세상에 하나뿐인 이름 선물
                </span>
              </span>
            </div>

            {/* 헤드라인 */}
            <h1 className="hero-fade-2 text-4xl md:text-6xl font-bold leading-[1.15] mb-6 tracking-tight">
              <span className="text-on-background">아이에게 주는</span>
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
                첫 번째 선물,
              </span>
              <br />
              <span className="text-on-background">이름</span>
            </h1>

            {/* 서브카피 */}
            <p
              className="hero-fade-3 text-md md:text-lg leading-relaxed mb-8 max-w-105"
              style={{ color: '#474555' }}
            >
              이름은 아이가 평생 간직할 첫 번째 선물입니다.
              <br className="block" />
              아름답고 안전한 이름을 AI와 함께 찾아보세요.
            </p>

            {/* 인포 박스 */}
            <div
              className="hero-fade-3 flex items-start gap-3 p-4 rounded-2xl mb-8 w-full max-w-sm md:max-w-none text-left"
              style={{
                background:
                  'linear-gradient(135deg, rgba(228,223,255,0.5) 0%, rgba(228,223,255,0.2) 100%)',
                border: '1px solid rgba(198,192,255,0.6)',
              }}
            >
              <span className="text-lg mt-px">🎁</span>
              <p
                className="text-sm font-medium leading-relaxed"
                style={{ color: '#3e25c3' }}
              >
                의미·발음·안전성을 모두 고려해
                <br />
                <strong>평생 자랑스러운 이름</strong>을 선물하세요.
              </p>
            </div>

            {/* CTA 버튼 */}
            <div className="hero-fade-4 flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
              <button
                onClick={scrollToEmail}
                className="hero-cta relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-md font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] w-full sm:w-auto"
                style={{
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
                  이미 <strong className="text-primary">0</strong> 부모님이 신청
                </span>
              </div>
            </div>
          </div>

          {/* 우측 이미지 */}
          <div className="relative items-center justify-center mt-8 md:mt-0 hidden md:block lg:flex">
            <div
              className="absolute w-70 md:w-105 h-70 md:h-105 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(198,192,255,0.35) 0%, transparent 65%)',
              }}
            />

            <div className="hero-float relative z-10 w-full max-w-[320px] md:max-w-115">
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
                src="/imageA01.png"
                alt="Emotional Illustration of baby naming"
                width={600}
                height={500}
                loading="eager"
                className="w-full h-auto relative z-10"
                style={{
                  borderRadius: '28px',
                  boxShadow:
                    '0 32px 64px rgba(84,65,219,0.12), 0 8px 24px rgba(84,65,219,0.08)',
                }}
              />

              {/* 플로팅 뱃지 - 선물 */}
              <div
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-6 z-20 flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(84,65,219,0.15)',
                  border: '1px solid rgba(198,192,255,0.5)',
                }}
              >
                <div
                  className="w-7 md:w-8 h-7 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center text-sm md:text-base"
                  style={{ background: 'rgba(84,65,219,0.1)' }}
                >
                  💝
                </div>
                <div>
                  <p
                    className="text-[10px] md:text-[11px] font-bold"
                    style={{ color: '#5441d8' }}
                  >
                    이름 추천 완료
                  </p>
                  <p
                    className="text-[9px] md:text-[10px]"
                    style={{ color: '#787586' }}
                  >
                    안전 · 아름다운 이름
                  </p>
                </div>
              </div>

              {/* 플로팅 뱃지 - 점수 */}
              <div
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20 flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 py-1.5 md:py-2 rounded-xl md:rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(84,65,219,0.15)',
                  border: '1px solid rgba(198,192,255,0.5)',
                }}
              >
                <span className="text-sm md:text-base">⭐</span>
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold text-on-background">
                    행복 지수
                  </p>
                  <p className="text-[9px] md:text-[10px] font-bold text-primary">
                    98 / 100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
