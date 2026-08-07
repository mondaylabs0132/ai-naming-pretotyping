'use client';

const features = [
  {
    icon: 'family_history',
    title: '돌림자',
    desc: '집안의 돌림자가 있다면 맞춰드립니다.',
    ex: '이준○',
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    tag: 'LINEAGE',
  },
  {
    icon: 'do_not_disturb_on',
    title: '피하고 싶은 글자',
    desc: '쓰고 싶지 않은 글자가 있다면 빼고 짓습니다.',
    ex: '제외 슬 · 淑',
    accent: '#e0468a',
    accentLight: 'rgba(224,70,138,0.08)',
    tag: 'EXCLUDE',
  },
  {
    icon: 'translate',
    title: '영어 발음',
    desc: '영어 표기와 발음을 함께 보여드립니다.',
    ex: 'Do-yun',
    accent: '#2da87a',
    accentLight: 'rgba(45,168,122,0.08)',
    tag: 'ENGLISH',
  },
  {
    icon: 'calendar_month',
    title: '태어나기 전에도',
    desc: '아직 태어나지 않았다면 예정 월로 시작합니다.',
    ex: '2026년 11월',
    accent: '#f59e0b',
    accentLight: 'rgba(245,158,11,0.08)',
    tag: 'PRENATAL',
  },
];

export default function DetailSection() {
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
              THE DETAILS
            </p>
            <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-on-background">
              디테일까지{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                챙깁니다
              </span>
            </h2>
          </div>
          <div className="md:text-right max-w-sm hidden sm:block">
            <p
              className="text-[15px] leading-relaxed font-medium"
              style={{ color: '#474555' }}
            >
              작명소에서 상담하며 말했을 조건들,
              <br />
              입력창에 그대로 있습니다.
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

                  {/* 입력 예시 */}
                  <div
                    className="mt-auto flex items-center justify-center pt-3 md:pt-6"
                    style={{ borderTop: `1px dashed ${f.accent}30` }}
                  >
                    <span
                      className="text-[10px] md:text-xs font-bold tracking-tight px-2 py-1 md:px-2.5 rounded-lg whitespace-nowrap"
                      style={{ background: f.accentLight, color: f.accent }}
                    >
                      {f.ex}
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
          * 입력 항목 예시이며, 최종 결정은 부모님의 판단을 존중합니다.
        </p>
      </div>
    </section>
  );
}
