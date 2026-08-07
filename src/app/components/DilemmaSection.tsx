'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 서비스 간 비교가 아니라 '집안 안의 대립'이 주인공인 섹션.
 * 앱의 개수·적중률 문제는 FreeNameSection이 이미 소유하므로 여기서 반복하지 않는다.
 */
const thoughts = [
  {
    quote: '사주 보고\n뜻 좋은 걸로 지어야지',
    source: '할머니 · 할아버지',
    icon: 'elderly',
    align: 'left' as const,
  },
  {
    quote: '그래도 부르기 좋고\n촌스럽지 않았으면',
    source: '엄마 · 아빠',
    icon: 'favorite',
    align: 'right' as const,
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

      <div className="max-w-2xl mx-auto w-full relative z-10">
        {/* 헤드라인 */}
        <div
          className="text-center mb-8 md:mb-14 transition-all duration-700 ease-out"
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
            할머니 말도 맞고,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              내 마음도 있고
            </span>
          </h2>
        </div>

        {/* 생각 말풍선 — 좌우 엇갈리게 */}
        <div className="flex flex-col gap-5 md:gap-8">
          {thoughts.map((t, idx) => (
            <div
              key={t.source}
              className={`flex flex-col ${
                t.align === 'right'
                  ? 'items-end self-end'
                  : 'items-start self-start'
              } max-w-[85%] md:max-w-[75%] transition-all duration-700 ease-out`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? 'translateX(0)'
                  : `translateX(${t.align === 'right' ? 28 : -28}px)`,
                transitionDelay: `${250 + idx * 300}ms`,
              }}
            >
              {/* 말풍선 */}
              <div
                className="relative bg-white px-5 py-4 md:px-8 md:py-6"
                style={{
                  borderRadius:
                    t.align === 'right'
                      ? '24px 24px 6px 24px'
                      : '24px 24px 24px 6px',
                  border: '1px solid rgba(84,65,219,0.1)',
                  boxShadow: '0 12px 32px -8px rgba(84,65,219,0.1)',
                }}
              >
                <span
                  className="absolute top-2 left-3 md:top-3 md:left-4 text-2xl md:text-3xl font-black leading-none select-none"
                  style={{ color: '#5441d8', opacity: 0.1 }}
                >
                  “
                </span>
                <p
                  className={`relative text-lg md:text-2xl font-bold leading-snug tracking-tight whitespace-pre-line ${
                    t.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ color: '#191a2e' }}
                >
                  {t.quote}
                </p>
              </div>

              {/* 출처 캡션 */}
              <div
                className="flex items-center gap-1 mt-2 px-1 transition-all duration-500 ease-out"
                style={{
                  opacity: inView ? 0.65 : 0,
                  transitionDelay: `${600 + idx * 300}ms`,
                }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: '#787586' }}
                >
                  {t.icon}
                </span>
                <p
                  className="text-[11px] md:text-sm font-medium"
                  style={{ color: '#787586' }}
                >
                  {t.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 다음 섹션으로 연결 */}
        <div
          className="flex flex-col items-center mt-8 md:mt-12 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: '1200ms',
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
            첫지음에선 어떨까요?
          </p>
        </div>
      </div>
    </section>
  );
}
