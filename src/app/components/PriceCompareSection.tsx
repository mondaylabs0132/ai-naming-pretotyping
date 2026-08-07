'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 비용 대비 '받는 이름 수'만 비교한다.
 * 사주 근거·보관 기간은 경쟁사도 제공하므로 차별점으로 쓰지 않는다.
 */
const options = [
  {
    label: '작명소',
    icon: 'storefront',
    cost: '30만 원',
    count: '상담에 따라',
    ours: false,
  },
  {
    label: '이름 추천 앱',
    icon: 'smartphone',
    cost: '2만 원',
    count: '3개',
    ours: false,
  },
  {
    label: '첫지음',
    icon: 'auto_awesome',
    cost: '19,900원',
    count: '20개',
    ours: true,
  },
];

export default function PriceCompareSection() {
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);
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

  // 첫지음 후보 개수 카운트업
  useEffect(() => {
    if (!inView) return;

    let raf: number;
    const startTime = Date.now();
    const duration = 900;
    const delay = 750;

    const timeout = setTimeout(() => {
      function tick() {
        const elapsed = Date.now() - startTime - delay;
        const t = Math.min(elapsed / duration, 1);
        setCount(Math.round((1 - Math.pow(1 - t, 3)) * 20));
        if (t < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center section-pt pb-6 md:py-0"
      style={{ background: '#fbf8ff' }}
    >
      <div className="max-w-4xl mx-auto w-full">
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
            COST &amp; COUNT
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-on-background">
            작명소는 30만 원,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              앱은 3개에 2만 원
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base leading-relaxed"
            style={{ color: '#474555' }}
          >
            첫지음은 <strong>19,900원에 20개</strong>입니다.
          </p>
        </div>

        {/* 3열 카드 */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 items-stretch">
          {options.map((o, idx) => (
            <div
              key={o.label}
              className="relative rounded-2xl md:rounded-3xl px-2 py-4 md:px-6 md:py-7 overflow-hidden flex flex-col items-center text-center transition-all duration-700 ease-out"
              style={{
                background: '#fff',
                border: o.ours
                  ? '2px solid rgba(84,65,219,0.25)'
                  : '1px solid rgba(0,0,0,0.06)',
                boxShadow: o.ours
                  ? '0 16px 40px rgba(84,65,219,0.14)'
                  : 'none',
                opacity: inView ? 1 : 0,
                transform: inView
                  ? `translateY(0) scale(${o.ours ? 1.03 : 1})`
                  : 'translateY(22px) scale(1)',
                transitionDelay: `${150 + idx * 130}ms`,
              }}
            >
              {/* 라벨 */}
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 mb-3 md:mb-5">
                <span
                  className="material-symbols-outlined text-base md:text-xl"
                  style={{ color: o.ours ? '#5441d8' : '#c8c4d7' }}
                >
                  {o.icon}
                </span>
                <p
                  className="text-[11px] md:text-sm font-black tracking-tight leading-tight whitespace-nowrap"
                  style={{ color: o.ours ? '#5441d8' : '#787586' }}
                >
                  {o.label}
                </p>
              </div>

              {/* 받는 이름 수 */}
              <p
                className="text-[9px] md:text-xs font-medium mb-0.5"
                style={{ color: '#a5a2b3' }}
              >
                받는 이름
              </p>
              <p
                className="text-xl md:text-4xl font-black leading-none tracking-tight whitespace-nowrap"
                style={{
                  color: o.ours ? '#5441d8' : '#c8c4d7',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {o.ours ? `${count}개` : o.count}
              </p>

              {/* 비용 */}
              <div
                className="w-full mt-3 md:mt-5 pt-3 md:pt-4"
                style={{
                  borderTop: o.ours
                    ? '1px dashed rgba(84,65,219,0.2)'
                    : '1px dashed rgba(0,0,0,0.07)',
                }}
              >
                <p
                  className="text-[9px] md:text-xs font-medium mb-0.5"
                  style={{ color: '#a5a2b3' }}
                >
                  비용
                </p>
                <p
                  className="text-xs md:text-lg font-black tracking-tight whitespace-nowrap"
                  style={{ color: o.ours ? '#5441d8' : '#787586' }}
                >
                  {o.cost}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 다음 섹션으로 연결 */}
        <p
          className="text-center text-sm md:text-lg font-black tracking-tight mt-6 md:mt-9 transition-all duration-700 ease-out"
          style={{
            color: '#5441d8',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: '900ms',
          }}
        >
          그런데 이름이 많기만 하면 될까요?
        </p>

        <p
          className="text-center text-[9px] md:text-xs mt-2 md:mt-3 font-medium transition-all duration-700"
          style={{
            color: '#787586',
            opacity: inView ? 0.4 : 0,
            transitionDelay: '1000ms',
          }}
        >
          * 작명소 비용은 업체별로 다르며, 첫지음 가격은 정식 출시 예정 기준입니다.
        </p>
      </div>
    </section>
  );
}
