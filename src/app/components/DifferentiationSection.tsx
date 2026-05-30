const rows = [
  {
    label: '핵심 가치',
    icon: '💎',
    legacy: '한자 획수, 사주 풀이',
    astra: '또래 환경 및 사회적 리스크',
  },
  {
    label: '추천 근거',
    icon: '📊',
    legacy: '전문가의 주관적 견해',
    astra: '대규모 언어 모델 기반 데이터',
  },
  {
    label: '검증 단계',
    icon: '🔍',
    legacy: '전통적 길흉 판단',
    astra: '놀림/비하 분석 포함',
  },
];

export default function DifferentiationSection() {
  return (
    <>
      <style>{`
        .diff-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
        }
        .diff-cell {
          padding: 24px 28px;
          border-bottom: 1px solid rgba(84,65,219,0.07);
          transition: background 0.2s ease;
        }
        .diff-row:last-child .diff-cell {
          border-bottom: none;
        }
        .diff-row:hover .diff-cell {
          background: rgba(84,65,219,0.015);
        }
        .diff-row:hover .diff-cell.astra-col {
          background: rgba(84,65,219,0.06);
        }
        .astra-col {
          background: rgba(84,65,219,0.03);
          border-left: 1px solid rgba(84,65,219,0.1);
        }
        .legacy-col {
          border-left: 1px solid rgba(84,65,219,0.06);
        }
        .check-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(84,65,219,0.08);
          border: 1px solid rgba(84,65,219,0.18);
          border-radius: 999px;
          padding: 3px 10px 3px 6px;
          font-size: 12px;
          font-weight: 700;
          color: #5441d8;
        }
        .x-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #b0aec0;
          font-size: 13px;
        }
      `}</style>

      <section
        className="py-24 px-6"
        style={{
          background:
            'linear-gradient(180deg, #fbf8ff 0%, #f0edff 60%, #fbf8ff 100%)',
        }}
      >
        <div className="max-w-[1000px] mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
              style={{ color: '#5441d8' }}
            >
              WHY ASTRA
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#191a2e' }}
            >
              기존 서비스와 무엇이 다른가요?
            </h2>
          </div>

          {/* 비교 카드 */}
          <div
            className="overflow-hidden rounded-[28px]"
            style={{
              boxShadow: '0 24px 64px rgba(84,65,219,0.1)',
              border: '1px solid rgba(84,65,219,0.1)',
            }}
          >
            {/* 헤더 행 */}
            <div className="diff-row" style={{ background: '#fff' }}>
              {/* 빈 레이블 셀 */}
              <div
                className="diff-cell"
                style={{ borderBottom: '1px solid rgba(84,65,219,0.07)' }}
              >
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#b0aec0' }}
                >
                  비교 항목
                </span>
              </div>

              {/* 기존 서비스 헤더 */}
              <div
                className="diff-cell legacy-col"
                style={{ borderBottom: '1px solid rgba(84,65,219,0.07)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{ background: 'rgba(0,0,0,0.05)' }}
                  >
                    🏛️
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#787586' }}
                  >
                    기존 작명 서비스
                  </span>
                </div>
              </div>

              {/* Astra 헤더 */}
              <div
                className="diff-cell astra-col"
                style={{ borderBottom: '1px solid rgba(84,65,219,0.1)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: 'linear-gradient(135deg, #5441d8, #8b7cf8)',
                    }}
                  >
                    ⭐
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: '#5441d8' }}
                  >
                    Astra AI 작명
                  </span>
                  <span
                    className="text-[10px] font-black px-2 py-0.5 rounded-full ml-1"
                    style={{
                      background: 'rgba(252,211,68,0.25)',
                      color: '#9a7800',
                    }}
                  >
                    NEW
                  </span>
                </div>
              </div>
            </div>

            {/* 데이터 행 */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className="diff-row"
                style={{ background: '#fff' }}
              >
                {/* 레이블 */}
                <div className="diff-cell flex items-center gap-3">
                  <span className="text-lg">{row.icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#474555' }}
                  >
                    {row.label}
                  </span>
                </div>

                {/* 기존 서비스 */}
                <div className="diff-cell legacy-col flex items-center">
                  <span className="x-badge">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{
                        background: 'rgba(0,0,0,0.06)',
                        color: '#b0aec0',
                      }}
                    >
                      ✕
                    </span>
                    {row.legacy}
                  </span>
                </div>

                {/* Astra */}
                <div className="diff-cell astra-col flex items-center">
                  <span className="check-badge">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                      style={{ background: '#5441d8', color: '#fff' }}
                    >
                      ✓
                    </span>
                    {row.astra}
                  </span>
                </div>
              </div>
            ))}

            {/* 하단 요약 배너 */}
            <div
              className="px-7 py-5 flex items-center justify-between gap-4 flex-wrap"
              style={{
                background:
                  'linear-gradient(135deg, rgba(84,65,219,0.06) 0%, rgba(198,192,255,0.12) 100%)',
                borderTop: '1px solid rgba(84,65,219,0.1)',
              }}
            >
              <p className="text-sm font-medium" style={{ color: '#474555' }}>
                💡 <strong style={{ color: '#5441d8' }}>Astra</strong>는 전통적
                기준이 아닌,
                <strong> 실제 또래 환경</strong>을 기준으로 이름을 분석합니다.
              </p>
              <button
                className="text-xs font-bold px-5 py-2.5 rounded-full whitespace-nowrap transition-all hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(84,65,219,0.3)',
                }}
              >
                지금 분석해보기 →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
