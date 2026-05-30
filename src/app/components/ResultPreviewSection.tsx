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
  { key: 'riskScore', label: '놀림 위험도', icon: '🛡️' },
  { key: 'pronunciationScore', label: '발음 안정성', icon: '🎙️' },
  { key: 'trendScore', label: '유행도', icon: '📈' },
  { key: 'socialScore', label: '사회적 인식', icon: '👥' },
] as const;

type CardKey = (typeof metrics)[number]['key'];

export default function ResultPreviewSection() {
  return (
    <>
      <style>{`
        .result-card {
          position: relative;
          background: #fff;
          border-radius: 28px;
          padding: 32px 28px;
          border: 1px solid rgba(84,65,219,0.1);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .result-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 56px rgba(84,65,219,0.14);
        }
        .result-card.featured {
          border-color: rgba(84,65,219,0.3);
          box-shadow: 0 20px 48px rgba(84,65,219,0.15);
          transform: scale(1.04);
          z-index: 10;
        }
        .result-card.featured:hover {
          transform: scale(1.04) translateY(-6px);
        }
        .metric-bar-track {
          height: 5px;
          background: rgba(84,65,219,0.07);
          border-radius: 99px;
          overflow: hidden;
        }
        .metric-bar-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 0.8s ease;
        }
        .name-glow {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          font-size: 120px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          user-select: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          letter-spacing: -8px;
        }
      `}</style>

      <section className="py-24 px-6" style={{ background: '#fbf8ff' }}>
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
              style={{ color: '#5441d8' }}
            >
              SAMPLE REPORT
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#191a2e' }}
            >
              당신이 받게 될{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #5441d8, #8b7cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                프리미엄 분석 리포트
              </span>
            </h2>
            <p className="text-sm" style={{ color: '#787586' }}>
              이름 하나당 4가지 항목을 정밀 분석한 결과를 받아보세요
            </p>
          </div>

          {/* 카드 */}
          <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch md:items-end">
            {nameCards.map((card) => (
              <div
                key={card.name}
                className={`result-card flex-1 max-w-sm mx-auto md:mx-0 ${card.featured ? 'featured' : ''}`}
              >
                {/* 배경 이름 워터마크 */}
                <div className="name-glow" style={{ color: card.accent }}>
                  {card.name}
                </div>

                {/* Recommended 배지 */}
                {card.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div
                      className="px-5 py-1.5 text-[11px] font-black tracking-wider rounded-b-2xl text-white"
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
                  className={`flex flex-col items-center text-center mb-7 ${card.featured ? 'mt-5' : 'mt-1'}`}
                >
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: `${card.accent}14`,
                      color: card.accent,
                      border: `1px solid ${card.accent}25`,
                    }}
                  >
                    {card.badge}
                  </span>

                  <div className="relative mb-1">
                    <h3
                      className="text-5xl font-black tracking-tight"
                      style={{ color: '#191a2e' }}
                    >
                      {card.name}
                    </h3>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: '#b0aec0' }}
                  >
                    {card.hanja}
                  </p>

                  {/* 종합 점수 원형 */}
                  <div className="mt-5 relative w-16 h-16">
                    <svg
                      viewBox="0 0 56 56"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        fill="none"
                        stroke="rgba(84,65,219,0.07)"
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="text-sm font-black"
                        style={{ color: card.accent }}
                      >
                        {card.riskScore}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[10px] font-semibold mt-1"
                    style={{ color: '#b0aec0' }}
                  >
                    종합 점수
                  </p>
                </div>

                {/* 구분선 */}
                <div
                  className="mb-5"
                  style={{ height: '1px', background: 'rgba(84,65,219,0.07)' }}
                />

                {/* 4가지 메트릭 */}
                <div className="space-y-4">
                  {metrics.map(({ key, label, icon }) => {
                    const score = card[key as CardKey] as number;
                    return (
                      <div key={key}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">{icon}</span>
                            <span
                              className="text-xs font-semibold"
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
                  className="mt-6 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl"
                  style={{
                    background: `${card.accent}0d`,
                    border: `1px solid ${card.accent}20`,
                  }}
                >
                  <span className="text-sm">✅</span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: card.accent }}
                  >
                    안전한 이름으로 확인됨
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 안내 */}
          <p className="text-center text-xs mt-10" style={{ color: '#b0aec0' }}>
            * 위 리포트는 실제 분석 결과의 샘플입니다. 신청 시 더 상세한
            리포트를 제공합니다.
          </p>
        </div>
      </section>
    </>
  );
}
