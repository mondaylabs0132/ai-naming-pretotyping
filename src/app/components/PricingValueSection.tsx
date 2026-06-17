'use client';

import { useEffect, useRef, useState } from 'react';

const ourNames = [
  '이도윤',
  '김서준',
  '박하준',
  '최지후',
  '정예준',
  '강시우',
  '조지호',
  '윤지우',
  '장도현',
  '임현우',
  '한준서',
  '오서진',
  '황민준',
  '안시후',
  '서주원',
  '전지원',
  '신예서',
  '권도훈',
  '유이준',
  '나건우',
];

export default function PricingValueSection() {
  const [inView, setInView] = useState(false);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
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

  // 숫자 카운트업
  useEffect(() => {
    if (!inView) return;

    let raf: number;
    const startTime = Date.now();
    const duration = 1000;
    const delay = 500;

    const timeout = setTimeout(() => {
      function tick() {
        const elapsed = Date.now() - startTime - delay;
        const t = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setLeftCount(Math.round(ease * 3));
        setRightCount(Math.round(ease * 20));
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
      <div className="max-w-310 mx-auto w-full">
        {/* 헤드라인 */}
        <div
          className="text-center mb-5 md:mb-14 transition-all duration-700 ease-out"
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
            PRICING COMPARISON
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-on-background">
            평생 부를 이름인데,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              3개만 보고 결정하시겠어요?
            </span>
          </h2>

          <p
            className="mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: '#474555' }}
          >
            첫지음은 <strong>20개의 이름 후보</strong>와 상세 풀이를 제공하여{' '}
            <br />더 신중한 선택을 도와드립니다.
          </p>
        </div>

        {/* 비교 카드 */}
        <div className="grid grid-cols-2 gap-2 md:gap-6 max-w-3xl mx-auto">
          {/* 경쟁사 — 좌측 슬라이드인 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-100 overflow-hidden flex flex-col transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transitionDelay: '150ms',
            }}
          >
            <p className="text-xs font-bold text-gray-400 mb-1">타 서비스</p>
            <p className="text-xl md:text-3xl font-black text-gray-700 mb-3 md:mb-8">
              ₩20,000
            </p>

            {/* 3개 이름 (칩 형태, 순차 등장) */}
            <div className="flex flex-wrap gap-1.5 flex-1 content-start">
              {['김○○', '이○○', '박○○'].map((name, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-gray-50 rounded-md md:rounded-lg px-2 py-1 md:px-3 md:py-1.5 transition-all duration-400 ease-out"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-12px)',
                    transitionDelay: `${350 + i * 100}ms`,
                  }}
                >
                  <span className="font-bold text-gray-300 tracking-widest text-xs md:text-sm">
                    {name}
                  </span>
                  <span
                    className="material-symbols-outlined text-[12px] md:text-sm"
                    style={{ color: '#c8c4d7' }}
                  >
                    lock
                  </span>
                </span>
              ))}
            </div>

            {/* 카운트업 숫자 */}
            <div
              className="flex items-end gap-1 mt-3 md:mt-8 pt-3 md:pt-5"
              style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
            >
              <span
                className="text-3xl md:text-6xl font-black text-gray-200 leading-none transition-all duration-300"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {leftCount}
              </span>
              <span className="text-sm md:text-xl font-bold text-gray-300 mb-0.5 md:mb-1">
                개
              </span>
            </div>
          </div>

          {/* 우리 서비스 — 우측 슬라이드인 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 overflow-hidden flex flex-col transition-all duration-700 ease-out"
            style={{
              border: '2px solid rgba(84,65,219,0.25)',
              boxShadow: '0 16px 40px rgba(84,65,219,0.12)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transitionDelay: '300ms',
            }}
          >
            {/* 배경 장식 */}
            <div
              className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 rounded-bl-full opacity-30"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(84,65,219,0.2), transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold" style={{ color: '#5441d8' }}>
                  첫지음
                </p>
              </div>
              <p
                className="text-xl md:text-3xl font-black mb-3 md:mb-8"
                style={{ color: '#5441d8' }}
              >
                ₩19,900
              </p>

              {/* 20개 이름 태그 — 모바일에서는 일부만 노출 + 하단 페이드 */}
              <div className="relative flex-1">
                <div className="flex flex-wrap gap-1 content-start max-h-20 overflow-hidden md:max-h-none md:overflow-visible">
                  {ourNames.map((name, i) => (
                    <span
                      key={i}
                      className="text-[9px] md:text-[11px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-md transition-all duration-300 ease-out"
                      style={{
                        background: 'rgba(84,65,219,0.07)',
                        color: '#5441d8',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'scale(1)' : 'scale(0.6)',
                        transitionDelay: `${450 + i * 50}ms`,
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-white to-transparent md:hidden" />
              </div>

              {/* 카운트업 숫자 */}
              <div
                className="flex items-end gap-1 mt-3 md:mt-8 pt-3 md:pt-5"
                style={{ borderTop: '1px solid rgba(84,65,219,0.1)' }}
              >
                <span
                  className="text-3xl md:text-6xl font-black leading-none transition-all duration-300"
                  style={{
                    color: '#5441d8',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {rightCount}
                </span>
                <span
                  className="text-sm md:text-xl font-bold mb-0.5 md:mb-1"
                  style={{ color: '#5441d8' }}
                >
                  개
                </span>
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-center text-[10px] md:text-xs mt-6 md:mt-10 font-medium transition-all duration-700"
          style={{
            color: '#787586',
            opacity: inView ? 0.4 : 0,
            transitionDelay: '600ms',
          }}
        >
          * 정식 서비스 출시 예정 가격 기준이며, 변동될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
