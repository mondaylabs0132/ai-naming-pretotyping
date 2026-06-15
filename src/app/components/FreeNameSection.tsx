'use client';

import { useEffect, useRef, useState } from 'react';

export default function FreeNameSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center section-pt pb-6 md:py-0"
      style={{ background: '#fbf8ff' }}
    >
      <div className="max-w-310 mx-auto w-full">
        {/* 헤드라인 */}
        <div
          className="text-center mb-8 md:mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '0ms',
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: '#5441d8' }}
          >
            FREE TIER
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-on-background">
            무료 결과라면서,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              이름을 가려버립니다
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base leading-relaxed"
            style={{ color: '#474555' }}
          >
            첫지음은 무료 결과도 숨기지 않습니다.
            <br />
            실제 이름과 한자 풀이를 그대로 확인할 수 있습니다.
          </p>
        </div>

        {/* 비교 카드 */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
          {/* 경쟁사 — 좌측 슬라이드인 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100 overflow-hidden transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transitionDelay: '150ms',
            }}
          >
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <span className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                타 서비스
              </span>
            </div>
            <p className="text-xs font-bold mb-4 md:mb-6 mt-6 md:mt-0 text-gray-400">
              무료 결과 1개
            </p>

            {/* 가려진 이름 카드 */}
            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 mb-3 md:mb-5 relative overflow-hidden">
              <div className="text-center">
                <p className="text-[10px] md:text-xs text-gray-400 mb-2">
                  추천 이름
                </p>
                <p className="text-2xl md:text-4xl font-black tracking-widest text-gray-200 select-none">
                  김 ✦ ✦
                </p>
                <p className="text-sm text-gray-200 mt-1 select-none">漢 ✦ ✦</p>
              </div>
              {/* 잠금 오버레이 — pulse */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-white/70 rounded-xl md:rounded-2xl backdrop-blur-[1px]"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  transitionDelay: '600ms',
                }}
              >
                <span
                  className="material-symbols-outlined text-2xl md:text-4xl"
                  style={{
                    color: '#c8c4d7',
                    animation: inView
                      ? 'pulse-lock 2.4s ease-in-out 800ms infinite'
                      : 'none',
                  }}
                >
                  lock
                </span>
                <span className="text-[10px] md:text-xs font-bold text-gray-400">
                  결제 후 확인 가능
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: '#ba1a1a' }}
              >
                close
              </span>
              <p className="text-[11px] md:text-sm font-medium text-gray-400">
                사실상 유료 결제 유도
              </p>
            </div>
          </div>

          {/* 우리 서비스 — 우측 슬라이드인 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-hidden transition-all duration-700 ease-out"
            style={{
              border: '2px solid rgba(84,65,219,0.25)',
              boxShadow: '0 16px 40px rgba(84,65,219,0.12)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transitionDelay: '300ms',
            }}
          >
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <span
                className="text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style={{
                  background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                }}
              >
                Astra
              </span>
            </div>
            <p
              className="text-xs font-bold mb-4 md:mb-6 mt-6 md:mt-0"
              style={{ color: '#5441d8' }}
            >
              무료 결과 1개
            </p>

            {/* 선명한 이름 카드 — pop in */}
            <div
              className="rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-5 transition-all duration-500 ease-out"
              style={{
                background: 'rgba(84,65,219,0.04)',
                border: '1px solid rgba(84,65,219,0.1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.88)',
                transitionDelay: '520ms',
              }}
            >
              <div className="text-center">
                <p
                  className="text-[10px] md:text-xs font-medium mb-2"
                  style={{ color: '#787586' }}
                >
                  추천 이름
                </p>
                <p
                  className="text-2xl md:text-4xl font-black tracking-tight"
                  style={{ color: '#191a2e' }}
                >
                  이도윤
                </p>
                <p
                  className="text-sm mt-1 font-medium"
                  style={{ color: '#787586', opacity: 0.5 }}
                >
                  道允
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: '#2da87a' }}
              >
                check_circle
              </span>
              <p
                className="text-[11px] md:text-sm font-bold"
                style={{ color: '#2da87a' }}
              >
                완전 무료, 전부 공개
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-center text-[10px] md:text-xs mt-6 md:mt-10 opacity-40 font-medium transition-all duration-700"
          style={{
            color: '#787586',
            opacity: inView ? 0.4 : 0,
            transitionDelay: '500ms',
          }}
        >
          * 정식 서비스 출시 시 무료 1개 제공 예정입니다.
        </p>
      </div>

      <style>{`
        @keyframes pulse-lock {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
