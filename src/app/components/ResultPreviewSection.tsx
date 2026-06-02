'use client';

import { useEffect, useRef } from 'react';

const nameCards = [
  {
    badge: 'Best Match',
    name: '서준',
    hanja: '徐俊',
    riskScore: 98,
    pronunciationScore: 96,
    trendScore: 88,
    socialScore: 91,
    featured: false,
    accent: '#7c6ef0',
  },
  {
    badge: 'Perfect Balance',
    name: '도윤',
    hanja: '道允',
    riskScore: 100,
    pronunciationScore: 99,
    trendScore: 93,
    socialScore: 97,
    featured: true,
    accent: '#5441d8',
  },
  {
    badge: 'Stable Pick',
    name: '하준',
    hanja: '夏俊',
    riskScore: 85,
    pronunciationScore: 90,
    trendScore: 82,
    socialScore: 87,
    featured: false,
    accent: '#8b7cf8',
  },
];

const metrics = [
  { key: 'riskScore', label: '놀림 위험도', icon: 'shield' },
  {
    key: 'pronunciationScore',
    label: '발음 안정성',
    icon: 'record_voice_over',
  },
  { key: 'trendScore', label: '유행도', icon: 'trending_up' },
  { key: 'socialScore', label: '사회적 인식', icon: 'groups' },
] as const;

type CardKey = (typeof metrics)[number]['key'];

export default function ResultPreviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      // 초기 상태에서 중앙 카드(index 1)가 보이도록 스크롤
      const centerCard = el.children[1] as HTMLElement;
      if (centerCard) {
        const scrollAmount =
          centerCard.offsetLeft -
          el.offsetWidth / 2 +
          centerCard.offsetWidth / 2;
        el.scrollTo({ left: scrollAmount, behavior: 'auto' });
      }
    }
  }, []);

  return (
    <section
      className="section-pt pb-16 md:pb-24 px-6 mx-auto w-full h-svh flex flex-col items-center justify-center"
      style={{ background: '#fbf8ff' }}
    >
      <div className="mx-auto w-full pt-6">
        {/* 헤드라인 섹션 */}
        <div className="text-center">
          <p
            className="text-sm font-bold tracking-[0.2em] uppercase mb-1.5 md:mb-3"
            style={{ color: '#5441d8' }}
          >
            SAMPLE REPORT
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-on-background">
            당신이 받게 될{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8, #8b7cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              분석 리포트
            </span>
          </h2>

          <p
            className="text-center text-xs md:text-xs mt-2 md:mt-6 opacity-30 font-medium"
            style={{ color: '#787586' }}
          >
            * 실제 서비스 시 더 상세한 심층 분석 리포트가 제공됩니다.
          </p>
        </div>

        {/* 카드 컨테이너 (모바일 중앙 정렬 스와이프) */}
        <div
          ref={scrollRef}
          className="scroll-container flex lg:grid lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory -mx-6 px-12 lg:mx-0 lg:px-0 pt-6 items-stretch"
        >
          {nameCards.map((card) => (
            <div
              key={card.name}
              className={`result-card snap-center ${card.featured ? 'featured' : ''}`}
            >
              <div className="name-glow" style={{ color: card.accent }}>
                {card.name}
              </div>

              {/* Recommended 배지 */}
              {card.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div
                    className="px-3 py-1 md:px-5 md:py-1.5 text-xs font-black tracking-wider rounded-b-xl md:rounded-b-2xl text-white whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                    }}
                  >
                    ⭐ RECOMMENDED
                  </div>
                </div>
              )}

              {/* 상단: 배지 + 이름 */}
              <div
                className={`flex flex-col items-center text-center mb-4 md:mb-7 ${card.featured ? 'mt-3 md:mt-5' : 'mt-1'}`}
              >
                <span
                  className="text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-2.5 md:mb-4"
                  style={{
                    background: `${card.accent}14`,
                    color: card.accent,
                    border: `1px solid ${card.accent}25`,
                  }}
                >
                  {card.badge}
                </span>

                <h3 className="text-2xl md:text-4xl font-black tracking-tight text-on-background">
                  {card.name}
                </h3>
                <p className="font-medium opacity-30 mt-0.5">{card.hanja}</p>

                {/* 종합 점수 원형 */}
                <div className="mt-3 md:mt-5 relative w-12 h-12 md:w-16 md:h-16">
                  <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="rgba(84,65,219,0.06)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke={card.accent}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 24}`}
                      strokeDashoffset={`${2 * Math.PI * 24 * (1 - card.riskScore / 100)}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
                    <span
                      className="text-sm font-black"
                      style={{ color: card.accent }}
                    >
                      {card.riskScore}
                    </span>
                  </div>
                </div>
              </div>

              {/* 구분선 */}
              <div
                className="mb-3 md:mb-5"
                style={{ height: '1px', background: 'rgba(84,65,219,0.07)' }}
              />

              {/* 4가지 메트릭 */}
              <div className="space-y-2 md:space-y-4">
                {metrics.map(({ key, label, icon }) => {
                  const score = card[key as CardKey] as number;
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <span
                            className="material-symbols-outlined text-[14px] md:text-base opacity-40"
                            style={{ color: card.accent }}
                          >
                            {icon}
                          </span>
                          <span
                            className="text-xs font-bold"
                            style={{ color: '#474555' }}
                          >
                            {label}
                          </span>
                        </div>
                        <span
                          className="text-xs font-black"
                          style={{ color: card.accent }}
                        >
                          {score}점
                        </span>
                      </div>
                      <div className="metric-bar-track">
                        <div
                          className="metric-bar-fill"
                          style={{
                            width: `${score}%`,
                            background: `linear-gradient(90deg, ${card.accent}99, ${card.accent})`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 하단 안전 레이블 */}
              <div
                className="mt-4 md:mt-6 flex items-center justify-center gap-1 py-1.5 md:py-2.5 rounded-xl md:rounded-2xl"
                style={{
                  background: `${card.accent}0d`,
                  border: `1px solid ${card.accent}15`,
                }}
              >
                <span
                  className="material-symbols-outlined text-xs md:text-base"
                  style={{ color: card.accent }}
                >
                  verified
                </span>
                <span
                  className="text-[9px] md:text-xs font-bold"
                  style={{ color: card.accent }}
                >
                  안전 분석 완료
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
