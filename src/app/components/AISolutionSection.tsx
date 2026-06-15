'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: 'psychology',
    title: '놀림 가능성',
    desc: '유사 발음 및 비속어 차단.',
    score: 98,
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    tag: 'TEASING',
  },
  {
    icon: 'record_voice_over',
    title: '발음 안정성',
    desc: '편안한 발음 구조 설계.',
    score: 94,
    accent: '#2da87a',
    accentLight: 'rgba(45,168,122,0.08)',
    tag: 'PHONETIC',
  },
  {
    icon: 'trending_up',
    title: '유행도 분석',
    desc: '적절한 트렌드 점수 산출.',
    score: 87,
    accent: '#f59e0b',
    accentLight: 'rgba(245,158,11,0.08)',
    tag: 'TREND',
  },
  {
    icon: 'groups',
    title: '사회적 인식',
    desc: '성격적 이미지 데이터화.',
    score: 91,
    accent: '#e0468a',
    accentLight: 'rgba(224,70,138,0.08)',
    tag: 'PERCEPT',
  },
];

export default function AISolutionSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-section-bg relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center section-pt pb-6 md:py-0"
    >
      <div
        className={`max-w-310 mx-auto w-full ${isInView ? 'animate-chart' : ''}`}
      >
        {/* 헤드라인 섹션 */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-16 gap-3 md:gap-8 text-center md:text-left">
          <div className="space-y-1 md:space-y-4">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: '#5441d8' }}
            >
              AI ANALYSIS ENGINE
            </p>
            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-on-background">
              AI가 미리{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                걸러드립니다
              </span>
            </h2>
          </div>
          <div className="md:text-right max-w-sm hidden sm:block">
            <p
              className="text-[15px] leading-relaxed font-medium"
              style={{ color: '#474555' }}
            >
              수만 건의 또래 대화 데이터와 발음 심리학을 기반으로
              <br />
              부모님조차 생각지 못한 리스크를 정교하게 분석합니다.
            </p>
          </div>
        </div>

        {/* 카드 컨테이너 (모바일 2x2 그리드) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
          {features.map((f) => {
            const radius = 24;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference * (1 - f.score / 100);

            return (
              <div
                key={f.title}
                className="ai-card group"
                style={
                  {
                    borderColor: `${f.accent}15`,
                    '--circumference': `${circumference}px`,
                    '--offset': `${offset}px`,
                  } as any
                }
              >
                {/* 배경 장식 */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 md:w-28 md:h-28 rounded-bl-full z-0 opacity-30 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(circle at top right, ${f.accentLight}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* 상단: 아이콘 + 태그 */}
                  <div className="flex items-start justify-between mb-3 md:mb-6">
                    <div
                      className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-[18px] flex items-center justify-center transition-all duration-300 group-hover:rotate-6"
                      style={{ background: f.accentLight }}
                    >
                      <span
                        className="material-symbols-outlined text-lg md:text-2xl"
                        style={{ color: f.accent }}
                      >
                        {f.icon}
                      </span>
                    </div>
                    <span
                      className="text-[8px] md:text-[9px] font-black tracking-tighter md:tracking-widest px-1.5 py-0.5 rounded-md md:rounded-lg"
                      style={{ background: f.accentLight, color: f.accent }}
                    >
                      {f.tag}
                    </span>
                  </div>

                  {/* 제목 + 설명 */}
                  <div className="mb-4 md:mb-8">
                    <h4
                      className="font-bold mb-1 tracking-tight"
                      style={{ color: '#191a2e' }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-sm leading-tight md:leading-relaxed opacity-70 line-clamp-2 md:line-clamp-none"
                      style={{ color: '#474555' }}
                    >
                      {f.desc}
                    </p>
                  </div>

                  {/* 점수 영역 */}
                  <div
                    className="mt-auto flex flex-col items-center pt-3 md:pt-6 space-y-2 md:space-y-4"
                    style={{ borderTop: `1px solid ${f.accent}12` }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* SVG 링 */}
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 60 60"
                        className="md:w-23 md:h-23"
                      >
                        <circle
                          className="score-track"
                          cx="30"
                          cy="30"
                          r={radius}
                        />
                        <circle
                          className="score-ring score-fill"
                          cx="30"
                          cy="30"
                          r={radius}
                          stroke={f.accent}
                          strokeDasharray={circumference}
                          style={{ strokeDashoffset: circumference }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
                        <span
                          className="text-base md:text-2xl font-black leading-none"
                          style={{ color: f.accent }}
                        >
                          {f.score}
                        </span>
                        <span
                          className="text-[7px] md:text-[9px] font-bold opacity-40 uppercase tracking-tighter"
                          style={{ color: f.accent }}
                        >
                          Score
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 하단 면책 메모 */}
        <p
          className="text-center text-[9px] md:text-xs mt-6 md:mt-12 opacity-40 font-medium"
          style={{ color: '#787586' }}
        >
          * 데이터 기반 참고 지표이며, 최종 결정은 부모님의 판단을 존중합니다.
        </p>
      </div>
    </section>
  );
}
