const cards = [
  {
    icon: 'record_voice_over',
    number: '01',
    accent: '#fcd344',
    accentLight: 'rgba(252,211,68,0.12)',
    title: '발음이 조금만 어색해도\n별명이 생깁니다',
    desc: '어린 아이들의 직관적인 발음 변형은 생각보다 잔인할 수 있습니다.',
    tag: '발음 리스크',
  },
  {
    icon: 'translate',
    number: '02',
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    title: '의도치 않게 웃긴 의미로\n변형되기도 합니다',
    desc: '한자 뜻은 좋아도, 한글 소리가 주는 이미지는 다를 수 있습니다.',
    tag: '의미 왜곡',
  },
  {
    icon: 'history',
    number: '03',
    accent: '#ff6b6b',
    accentLight: 'rgba(255,107,107,0.08)',
    title: '한번 붙은 별명은\n쉽게 사라지지 않습니다',
    desc: '학창 시절의 정체성을 결정짓는 이름, 리스크 관리가 필수입니다.',
    tag: '장기 영향',
  },
];

export default function EmpathySection() {
  return (
    <>
      <style>{`
        .empathy-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(84,65,219,0.08);
          border-radius: 24px;
          padding: 32px 24px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          flex-shrink: 0;
          width: 280px;
        }
        @media (min-width: 768px) {
          .empathy-card {
            padding: 36px 32px;
            width: auto;
            flex-shrink: 1;
          }
        }
        .empathy-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .empathy-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -8px rgba(84,65,219,0.12);
        }
        .empathy-card:hover::before {
          opacity: 1;
        }
        .card-0::before { background: linear-gradient(90deg, #fcd344, #ffb347); }
        .card-1::before { background: linear-gradient(90deg, #5441d8, #8b7cf8); }
        .card-2::before { background: linear-gradient(90deg, #ff6b6b, #ff9a9a); }

        .empathy-number {
          font-size: 64px;
          font-weight: 900;
          line-height: 1;
          position: absolute;
          top: 16px;
          right: 20px;
          opacity: 0.06;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -3px;
          user-select: none;
        }
        @media (min-width: 768px) {
          .empathy-number {
            font-size: 72px;
            top: 20px;
            right: 24px;
          }
        }
        
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section
        className="overflow-hidden px-6 mx-auto w-full min-h-svh flex flex-col items-center justify-center py-16 md:py-0"
        style={{
          background: 'linear-gradient(180deg, #f5f2ff 0%, #fbf8ff 100%)',
        }}
      >
        <div className="max-w-300 mx-auto w-full">
          {/* 헤드라인 섹션 */}
          <div className="mb-10 md:mb-14">
            <p
              className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-3 text-center md:text-left"
              style={{ color: '#5441d8' }}
            >
              WHY IT MATTERS
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left">
              <h2
                className="text-2xl md:text-4xl font-bold leading-tight"
                style={{ color: '#191a2e' }}
              >
                왜 <span style={{ color: '#5441d8' }}>아이리음</span>이
                <br className="md:hidden" /> 필요할까요?
              </h2>
            </div>
            <div
              className="mt-6 h-px hidden md:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(84,65,219,0.3) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* 카드 컨테이너 (모바일 스와이프 대응) */}
          <div className="scroll-container flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-8 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`empathy-card card-${i} snap-center`}
              >
                {/* 배경 숫자 */}
                <span className="empathy-number">{card.number}</span>

                {/* 상단 아이콘 영역 */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: card.accentLight }}
                  >
                    <span
                      className="material-symbols-outlined text-2xl"
                      style={{ color: card.accent }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  {/* 태그 */}
                  <span
                    className="text-[10px] md:text-[11px] font-bold px-3 py-1 rounded-full"
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
                <h3
                  className="text-[18px] md:text-[19px] font-bold mb-3 leading-snug"
                  style={{ color: '#191a2e', whiteSpace: 'pre-line' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#474555' }}
                >
                  {card.desc}
                </p>

                {/* 하단 액센트 바 */}
                <div className="mt-6 flex items-center gap-2">
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

          {/* 모바일 스와이프 인디케이터 (모바일에서만 표시) */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-2">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`w-1.5 h-1.5 rounded-full ${dot === 0 ? 'bg-primary w-4' : 'bg-outline-variant'}`}
                style={{ transition: 'all 0.3s ease' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
