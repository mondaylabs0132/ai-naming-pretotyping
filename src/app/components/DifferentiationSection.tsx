'use client';

import { useEffect, useRef } from 'react';

const rows = [
  {
    label: '핵심 가치',
    icon: 'diamond',
    legacy: '한자 획수, 사주',
    astra: '또래 환경 리스크',
  },
  {
    label: '추천 근거',
    icon: 'bar_chart',
    legacy: '전문가 주관',
    astra: '언어 모델 데이터',
  },
  {
    label: '검증 단계',
    icon: 'search',
    legacy: '전통적 길흉',
    astra: '놀림/비하 분석',
  },
];

function AnimatedCheck({ size, delay = 0 }: { size: number; delay?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="12" fill="#5441d8" />
      <path
        d="M6.5 12.5L10.5 16.5L17.5 8"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-draw"
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

export default function DifferentiationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('diff-section-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 mx-auto w-full h-svh flex flex-col items-center justify-center py-6 md:py-0"
      style={{
        background:
          'linear-gradient(180deg, #fbf8ff 0%, #f0edff 60%, #fbf8ff 100%)',
      }}
    >
      <div className="max-w-250 mx-auto w-full">
        {/* 헤드라인 */}
        <div className="text-center mb-6 md:mb-12">
          <p
            className="text-sm font-bold tracking-[0.18em] uppercase mb-2 md:mb-3"
            style={{ color: '#5441d8' }}
          >
            WHY ASTRA
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: '#191a2e' }}
          >
            무엇이 다른가요?
          </h2>
        </div>

        {/* ── 모바일: 항목별 카드 ── */}
        <div className="flex flex-col gap-3 md:hidden">
          <div className="grid grid-cols-2 gap-2 px-1">
            <div
              className="text-center text-xs font-bold py-2 rounded-xl opacity-40"
              style={{ background: 'rgba(0,0,0,0.04)', color: '#191a2e' }}
            >
              기존 작명
            </div>
            <div
              className="text-center text-xs font-black py-2 rounded-xl"
              style={{ background: 'rgba(84,65,219,0.1)', color: '#5441d8' }}
            >
              Astra AI
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#fff',
                boxShadow: '0 4px 16px rgba(84,65,219,0.07)',
                border: '1px solid rgba(84,65,219,0.1)',
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: '1px solid rgba(84,65,219,0.07)' }}
              >
                <span
                  className="material-symbols-outlined text-[18px] shrink-0"
                  style={{ color: '#5441d8' }}
                >
                  {row.icon}
                </span>
                <span
                  className="text-sm font-bold"
                  style={{ color: '#191a2e' }}
                >
                  {row.label}
                </span>
              </div>

              <div className="grid grid-cols-2">
                <div
                  className="flex flex-col items-center justify-center gap-1.5 px-3 py-4"
                  style={{ borderRight: '1px solid rgba(84,65,219,0.07)' }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(0,0,0,0.06)', color: '#9997a8' }}
                  >
                    ✕
                  </span>
                  <span
                    className="text-xs font-medium text-center leading-tight"
                    style={{ color: '#9997a8' }}
                  >
                    {row.legacy}
                  </span>
                </div>

                <div
                  className="flex flex-col items-center justify-center gap-1.5 px-3 py-4"
                  style={{ background: 'rgba(84,65,219,0.03)' }}
                >
                  <AnimatedCheck size={24} delay={i * 0.15} />
                  <span
                    className="text-xs font-bold text-center leading-tight"
                    style={{ color: '#5441d8' }}
                  >
                    {row.astra}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 데스크톱: 두 카드 나란히 ── */}
        <div className="hidden md:flex gap-5 items-stretch">
          {/* 기존 작명 카드 */}
          <div
            className="flex-1 rounded-3xl overflow-hidden flex flex-col bg-white"
            style={{
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <div className="px-8 pt-8 pb-6">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#787586' }}
              >
                기존 작명
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 pb-8 gap-0">
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex flex-col items-center text-center gap-2 py-6"
                  style={{
                    borderTop: i > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ color: '#9997a8' }}
                    >
                      {row.icon}
                    </span>
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: '#9997a8' }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{
                        background: 'rgba(0,0,0,0.1)',
                        color: '#787586',
                      }}
                    >
                      ✕
                    </span>
                    <span
                      className="text-base font-medium"
                      style={{ color: '#474555' }}
                    >
                      {row.legacy}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Astra AI 카드 */}
          <div
            className="flex-1 rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: '#fff',
              border: '1px solid rgba(84,65,219,0.18)',
              boxShadow: '0 24px 56px rgba(84,65,219,0.13)',
            }}
          >
            {/* 상단 강조 바 */}
            <div
              style={{
                height: 4,
                background: 'linear-gradient(90deg, #5441d8, #9f8fff)',
              }}
            />

            <div className="px-8 pt-7 pb-6 flex items-center justify-between">
              <span className="text-sm font-black" style={{ color: '#5441d8' }}>
                Astra AI
              </span>
              <span
                className="text-[10px] font-black px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(84,65,219,0.1)', color: '#5441d8' }}
              >
                추천
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 pb-8 gap-0">
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex flex-col items-center text-center gap-2 py-6"
                  style={{
                    borderTop:
                      i > 0 ? '1px solid rgba(84,65,219,0.08)' : 'none',
                  }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ color: '#9f8fff' }}
                    >
                      {row.icon}
                    </span>
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: '#9f8fff' }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <AnimatedCheck size={20} delay={i * 0.18} />
                    <span
                      className="text-base font-bold"
                      style={{ color: '#191a2e' }}
                    >
                      {row.astra}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
