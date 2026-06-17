'use client';

const features = [
  {
    icon: 'psychology',
    title: '놀림 가능성',
    desc: '유사 발음 및 비속어 차단.',
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    tag: 'TEASING',
  },
  {
    icon: 'record_voice_over',
    title: '발음 안정성',
    desc: '편안한 발음 구조 설계.',
    accent: '#2da87a',
    accentLight: 'rgba(45,168,122,0.08)',
    tag: 'PHONETIC',
  },
  {
    icon: 'trending_up',
    title: '유행도 분석',
    desc: '최신 작명 트렌드를 반영.',
    accent: '#f59e0b',
    accentLight: 'rgba(245,158,11,0.08)',
    tag: 'TREND',
  },
  {
    icon: 'groups',
    title: '사회적 인식',
    desc: '성격적 이미지 데이터화.',
    accent: '#e0468a',
    accentLight: 'rgba(224,70,138,0.08)',
    tag: 'PERCEPT',
  },
];

export default function AISolutionSection() {
  return (
    <section className="ai-section-bg relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center section-pt pb-6 md:py-0">
      <div className="max-w-310 mx-auto w-full">
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
          {features.map((f) => (
              <div
                key={f.title}
                className="ai-card group"
                style={{ borderColor: `${f.accent}15` }}
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

                  {/* 검증 씰 배지 */}
                  <div
                    className="mt-auto flex items-center justify-center gap-2 pt-3 md:pt-6"
                    style={{ borderTop: `1px dashed ${f.accent}30` }}
                  >
                    <div
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, #5441d8 0%, #7c6ef0 100%)',
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontSize: '12px' }}
                      >
                        check
                      </span>
                    </div>
                    <span
                      className="text-[11px] md:text-sm font-bold tracking-tight"
                      style={{ color: '#5441d8' }}
                    >
                      AI 검증 완료
                    </span>
                  </div>
                </div>
              </div>
          ))}
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
