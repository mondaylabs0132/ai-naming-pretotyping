const features = [
  {
    emoji: '🧠',
    title: '놀림 가능성 분석',
    desc: '유사 발음 및 비속어 연상 가능성을 사전 차단합니다.',
    score: 98,
    accent: '#5441d8',
    accentLight: 'rgba(84,65,219,0.08)',
    tag: 'TEASING RISK',
  },
  {
    emoji: '🎙️',
    title: '발음 안정성 분석',
    desc: '혀의 위치와 성대 피로도를 고려한 편안한 발음 설계.',
    score: 94,
    accent: '#2da87a',
    accentLight: 'rgba(45,168,122,0.08)',
    tag: 'PHONETICS',
  },
  {
    emoji: '📈',
    title: '유행도 분석',
    desc: '너무 흔하거나 너무 튀지 않는 적절한 트렌드 점수 산출.',
    score: 87,
    accent: '#f59e0b',
    accentLight: 'rgba(245,158,11,0.08)',
    tag: 'TREND',
  },
  {
    emoji: '👥',
    title: '사회적 인식 분석',
    desc: '특정 세대나 성별에서 느껴지는 성격적 이미지를 데이터화.',
    score: 91,
    accent: '#e0468a',
    accentLight: 'rgba(224,70,138,0.08)',
    tag: 'PERCEPTION',
  },
];

export default function AISolutionSection() {
  return (
    <>
      <style>{`
        .ai-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(84,65,219,0.08);
          border-radius: 24px;
          padding: 28px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ai-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px -8px rgba(84,65,219,0.13);
        }
        .score-ring {
          transform: rotate(-90deg);
          transform-origin: center;
        }
        .score-track { fill: none; stroke: rgba(0,0,0,0.06); stroke-width: 3; }
        .score-fill  { fill: none; stroke-width: 3; stroke-linecap: round; transition: stroke-dashoffset 1s ease; }

        .ai-section-bg {
          background: #fbf8ff;
        }
      `}</style>

      <section className="ai-section-bg relative overflow-hidden px-6 mx-auto w-full h-screen flex flex-col items-center justify-center">
        <div className="max-w-[1200px] mx-auto">
          {/* 헤더 */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <p
                className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                style={{ color: '#5441d8' }}
              >
                AI ANALYSIS ENGINE
              </p>
              <h2
                className="text-3xl md:text-[40px] font-bold leading-tight"
                style={{ color: '#191a2e' }}
              >
                AI가 미리
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #5441d8, #8b7cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  걸러드립니다
                </span>
              </h2>
            </div>
            <div className="md:text-right max-w-xs">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#787586' }}
              >
                수만 건의 또래 대화 데이터와
                <br />
                발음 심리학을 기반으로 정교하게 분석합니다.
              </p>
              {/* 신뢰 배지 */}
              <div
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(84,65,219,0.06)',
                  border: '1px solid rgba(84,65,219,0.12)',
                }}
              >
                <span className="text-sm">⚡</span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: '#5441d8' }}
                >
                  4가지 항목 동시 분석
                </span>
              </div>
            </div>
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => {
              const circumference = 2 * Math.PI * 20; // r=20
              const offset = circumference * (1 - f.score / 100);

              return (
                <div
                  key={f.title}
                  className="ai-card"
                  style={{ borderColor: `${f.accent}18` }}
                >
                  {/* 배경 장식 */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -z-0 opacity-40"
                    style={{
                      background: `radial-gradient(circle at top right, ${f.accentLight}, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* 상단: 이모지 + 태그 */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                        style={{ background: f.accentLight }}
                      >
                        {f.emoji}
                      </div>
                      <span
                        className="text-[10px] font-black tracking-widest px-2 py-1 rounded-md"
                        style={{ background: f.accentLight, color: f.accent }}
                      >
                        {f.tag}
                      </span>
                    </div>

                    {/* 제목 + 설명 */}
                    <h4
                      className="text-[15px] font-bold mb-1.5"
                      style={{ color: '#191a2e' }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed mb-5"
                      style={{ color: '#787586' }}
                    >
                      {f.desc}
                    </p>

                    {/* 점수 영역 */}
                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: `1px solid ${f.accent}18` }}
                    >
                      <div>
                        <p
                          className="text-[11px] font-semibold mb-0.5"
                          style={{ color: '#787586' }}
                        >
                          정확도
                        </p>
                        <p
                          className="text-xl font-black"
                          style={{ color: f.accent }}
                        >
                          {f.score}
                          <span className="text-sm font-bold opacity-60">
                            점
                          </span>
                        </p>
                      </div>

                      {/* SVG 링 */}
                      <svg width="48" height="48" viewBox="0 0 48 48">
                        <circle
                          className="score-track"
                          cx="24"
                          cy="24"
                          r="20"
                        />
                        <circle
                          className="score-ring score-fill"
                          cx="24"
                          cy="24"
                          r="20"
                          stroke={f.accent}
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                        />
                        <text
                          x="24"
                          y="28"
                          textAnchor="middle"
                          fontSize="10"
                          fontWeight="800"
                          fill={f.accent}
                        >
                          {f.score}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 하단 면책 메모 */}
          <p className="text-center text-xs mt-8" style={{ color: '#b0aec0' }}>
            * 점수는 수집된 데이터 기반의 참고 지표이며, 최종 결정은 부모님의
            판단을 존중합니다.
          </p>
        </div>
      </section>
    </>
  );
}
