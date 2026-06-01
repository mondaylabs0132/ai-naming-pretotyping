'use client';

const cards = [
  {
    icon: 'record_voice_over',
    number: '01',
    accent: '#fcd344',
    accentLight: 'rgba(252,211,68,0.12)',
    title: '발음 리스크',
    desc: '어린 아이들의 직관적인 발음 변형은 생각보다 잔인할 수 있습니다.',
    tag: 'PRONUNCIATION',
  },
  {
    icon: 'translate',
    number: '02',
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    title: '의미 왜곡',
    desc: '한자 뜻은 좋아도, 한글 소리가 주는 이미지는 다를 수 있습니다.',
    tag: 'MEANING',
  },
  {
    icon: 'history',
    number: '03',
    accent: '#ff6b6b',
    accentLight: 'rgba(255,107,107,0.08)',
    title: '장기 영향',
    desc: '학창 시절의 정체성을 결정짓는 이름, 리스크 관리가 필수입니다.',
    tag: 'LONG-TERM',
  },
];

export default function EmpathySection() {
  return (
    <section
      className="overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center py-8 md:py-0"
      style={{
        background: 'linear-gradient(180deg, #f5f2ff 0%, #fbf8ff 100%)',
      }}
    >
      <div className="max-w-300 mx-auto w-full">
        {/* 헤드라인 섹션 */}
        <div className="mb-6 md:mb-14">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-1.5 md:mb-3 text-center md:text-left"
            style={{ color: '#5441d8' }}
          >
            WHY IT MATTERS
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 text-center md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-on-background">
              왜 <span style={{ color: '#5441d8' }}>아이리음</span>이
              <br className="md:hidden" /> 필요할까요?
            </h2>
          </div>
          <div
            className="mt-4 md:mt-6 h-px hidden md:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(84,65,219,0.3) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* 카드 컨테이너 (모바일 수직 정렬) */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-6 w-full">
          {cards.map((card, i) => (
            <div key={card.title} className={`empathy-card card-${i}`}>
              {/* 배경 숫자 */}
              <span className="empathy-number">{card.number}</span>

              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                {/* 아이콘 영역 */}
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 md:mb-6"
                  style={{ background: card.accentLight }}
                >
                  <span
                    className="material-symbols-outlined text-xl md:text-2xl"
                    style={{ color: card.accent }}
                  >
                    {card.icon}
                  </span>
                </div>

                <div className="grow">
                  {/* 상단 태그 (데스크탑에서만 크게) */}
                  <div className="hidden md:flex justify-between items-center mb-6 w-full">
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full"
                      style={{
                        background: card.accentLight,
                        color: card.accent,
                        border: `1px solid ${card.accent}22`,
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* 텍스트 콘텐츠 */}
                  <h3 className="text-base md:text-[19px] font-bold mb-1 md:mb-3 leading-snug text-on-background">
                    {card.title}
                  </h3>
                  <p
                    className="text-[11px] md:text-sm leading-relaxed opacity-70 line-clamp-2 md:line-clamp-none"
                    style={{ color: '#474555' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* 하단 액센트 바 (데스크탑 전용) */}
              <div className="hidden md:flex mt-6 items-center gap-2">
                <div
                  className="h-0.5 w-8 rounded-full"
                  style={{ background: card.accent }}
                />
                <div
                  className="h-0.5 w-3 rounded-full opacity-40"
                  style={{ background: card.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
