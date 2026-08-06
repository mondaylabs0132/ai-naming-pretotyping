'use client';

import { useEffect, useRef, useState } from 'react';

const options = [
  {
    label: '작명소',
    icon: 'storefront',
    has: '근거는 있는데',
    hasIcon: 'check_circle',
    lacks: [
      { icon: 'payments', text: '30만 원' },
      { icon: 'schedule', text: '2~3일 대기' },
      { icon: 'sentiment_neutral', text: '결과가 촌스러움' },
    ],
  },
  {
    label: '이름 추천 앱',
    icon: 'smartphone',
    has: '감성은 있는데',
    hasIcon: 'check_circle',
    lacks: [
      { icon: 'help', text: '사주 근거 없음' },
      { icon: 'shuffle', text: '그냥 예쁜 조합' },
      { icon: 'chat_bubble', text: '뜻을 설명 못 함' },
    ],
  },
];

export default function DilemmaSection() {
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
      {/* 배경 장식 */}
      <div className="pointer-events-none select-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #c6c0ff 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-310 mx-auto w-full relative z-10">
        {/* 헤드라인 */}
        <div
          className="text-center mb-6 md:mb-12 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: '#5441d8' }}
          >
            THE DILEMMA
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-on-background">
            지금까지는 둘 중 하나를
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              포기해야 했습니다
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base leading-relaxed"
            style={{ color: '#474555' }}
          >
            뜻을 챙기면 촌스러워질까 걱정,
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            세련되게 지으면 뜻이 없을까 걱정.
          </p>
        </div>

        {/* 두 갈래 */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto items-stretch">
          {options.map((o, idx) => (
            <div
              key={o.label}
              className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-7 border border-gray-100 overflow-hidden flex flex-col transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? 'translateY(0)'
                  : `translateY(${20 + idx * 8}px)`,
                transitionDelay: `${150 + idx * 150}ms`,
              }}
            >
              {/* 상단: 아이콘 + 이름 */}
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                <span
                  className="w-8 h-8 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(84,65,219,0.06)' }}
                >
                  <span
                    className="material-symbols-outlined text-lg md:text-2xl"
                    style={{ color: '#787586' }}
                  >
                    {o.icon}
                  </span>
                </span>
                <p
                  className="text-sm md:text-lg font-black tracking-tight leading-tight"
                  style={{ color: '#474555' }}
                >
                  {o.label}
                </p>
              </div>

              {/* 있는 것 */}
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg md:rounded-xl mb-3 md:mb-5"
                style={{
                  background: 'rgba(45,168,122,0.07)',
                  border: '1px solid rgba(45,168,122,0.15)',
                }}
              >
                <span
                  className="material-symbols-outlined text-sm md:text-base"
                  style={{ color: '#2da87a' }}
                >
                  {o.hasIcon}
                </span>
                <p
                  className="text-[10px] md:text-[13px] font-bold leading-tight"
                  style={{ color: '#2da87a' }}
                >
                  {o.has}
                </p>
              </div>

              {/* 없는 것 */}
              <div className="space-y-1.5 md:space-y-2.5 flex-1">
                {o.lacks.map((l, i) => (
                  <div
                    key={l.text}
                    className="flex items-center gap-1.5 md:gap-2 transition-all duration-400 ease-out"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView
                        ? 'translateX(0)'
                        : 'translateX(-10px)',
                      transitionDelay: `${400 + idx * 150 + i * 90}ms`,
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-sm md:text-base shrink-0"
                      style={{ color: '#ba1a1a', opacity: 0.55 }}
                    >
                      {l.icon}
                    </span>
                    <p
                      className="text-[10px] md:text-[13px] font-medium leading-tight"
                      style={{ color: '#787586' }}
                    >
                      {l.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 다음 섹션으로 연결 */}
        <div
          className="flex flex-col items-center mt-6 md:mt-10 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: '850ms',
          }}
        >
          <span
            className="material-symbols-outlined dilemma-arrow"
            style={{ color: '#5441d8', opacity: 0.4 }}
          >
            keyboard_double_arrow_down
          </span>
          <p
            className="text-sm md:text-lg font-black tracking-tight mt-1"
            style={{ color: '#5441d8' }}
          >
            그래서 첫지음을 만들었습니다
          </p>
        </div>
      </div>
    </section>
  );
}
