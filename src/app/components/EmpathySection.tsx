const cards = [
  {
    emoji: '🗣️',
    number: '01',
    accent: '#fcd344',
    accentLight: 'rgba(252,211,68,0.12)',
    title: '발음이 조금만 어색해도\n별명이 생깁니다',
    desc: '어린 아이들의 직관적인 발음 변형은 생각보다 잔인할 수 있습니다.',
    tag: '발음 리스크',
  },
  {
    emoji: '😅',
    number: '02',
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    title: '의도치 않게 웃긴 의미로\n변형되기도 합니다',
    desc: '한자 뜻은 좋아도, 한글 소리가 주는 이미지는 다를 수 있습니다.',
    tag: '의미 왜곡',
  },
  {
    emoji: '📌',
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
          padding: 36px 32px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
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
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          position: absolute;
          top: 20px;
          right: 24px;
          opacity: 0.06;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -4px;
          user-select: none;
        }
      `}</style>

      <section
        className="py-20 px-6"
        style={{
          background: 'linear-gradient(180deg, #f5f2ff 0%, #fbf8ff 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* 헤더 */}
          <div className="mb-14">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: '#5441d8' }}
            >
              WHY IT MATTERS
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ color: '#191a2e' }}
              >
                왜 <span style={{ color: '#5441d8' }}>아이리음</span>이
                <br className="md:hidden" /> 필요할까요?
              </h2>
              <p
                className="text-sm max-w-xs"
                style={{ color: '#787586', lineHeight: '1.7' }}
              >
                이름 짓기의 숨겨진 리스크,
                <br />
                부모님들이 미처 몰랐던 3가지
              </p>
            </div>
            <div
              className="mt-6 h-px"
              style={{
                background:
                  'linear-gradient(90deg, rgba(84,65,219,0.3) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div key={card.title} className={`empathy-card card-${i}`}>
                {/* 배경 숫자 */}
                <span className="empathy-number">{card.number}</span>

                {/* 상단 영역 */}
                <div className="flex items-start justify-between mb-6">
                  {/* 이모지 아이콘 */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: card.accentLight }}
                  >
                    {card.emoji}
                  </div>
                  {/* 태그 */}
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{
                      background: card.accentLight,
                      color: card.accent,
                      border: `1px solid ${card.accent}22`,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* 텍스트 */}
                <h3
                  className="text-[19px] font-bold mb-3 leading-snug"
                  style={{ color: '#191a2e', whiteSpace: 'pre-line' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#787586' }}
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
        </div>
      </section>
    </>
  );
}
