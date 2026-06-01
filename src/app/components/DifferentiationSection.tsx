const rows = [
  {
    label: '핵심 가치',
    icon: 'diamond',
    legacy: '한자 획수, 사주',
    astra: '또래 환경 리스크',
  },
  {
    label: '추천 근거',
    icon: 'bar_chart',
    legacy: '전문가 주관',
    astra: '언어 모델 데이터',
  },
  {
    label: '검증 단계',
    icon: 'search',
    legacy: '전통적 길흉',
    astra: '놀림/비하 분석',
  },
];

export default function DifferentiationSection() {
  return (
    <>
      <style>{`
        .diff-row {
          display: grid;
          grid-template-columns: 28% 34% 38%;
          width: 100%;
          gap: 0;
        }
        .diff-cell {
          padding: 14px 10px;
          border-bottom: 1px solid rgba(84,65,219,0.07);
          display: flex;
          align-items: center;
          min-width: 0;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .diff-cell {
            padding: 24px 28px;
          }
        }
        .diff-row:last-child .diff-cell {
          border-bottom: none;
        }
        .astra-col {
          background: rgba(84,65,219,0.03);
          border-left: 1px solid rgba(84,65,219,0.08);
        }
        .legacy-col {
          border-left: 1px solid rgba(84,65,219,0.05);
        }
        .check-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(84,65,219,0.08);
          border: 1px solid rgba(84,65,219,0.18);
          border-radius: 999px;
          padding: 2px 8px 2px 4px;
          font-size: 10px;
          font-weight: 700;
          color: #5441d8;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .check-badge {
            gap: 6px;
            padding: 3px 10px 3px 6px;
            font-size: 11px;
          }
        }
        .x-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #787586;
          font-size: 10px;
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .x-badge {
            gap: 5px;
            font-size: 11px;
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden px-4 mx-auto w-full h-svh flex flex-col items-center justify-center py-6 md:py-0"
        style={{
          background:
            'linear-gradient(180deg, #fbf8ff 0%, #f0edff 60%, #fbf8ff 100%)',
        }}
      >
        <div className="max-w-250 mx-auto w-full">
          {/* 헤드라인 섹션 */}
          <div className="text-center mb-6 md:mb-12">
            <p
              className="text-[9px] md:text-xs font-bold tracking-[0.18em] uppercase mb-2 md:mb-3"
              style={{ color: '#5441d8' }}
            >
              WHY ASTRA
            </p>
            <h2
              className="text-xl md:text-4xl font-bold tracking-tight"
              style={{ color: '#191a2e' }}
            >
              무엇이 다른가요?
            </h2>
          </div>

          {/* 비교 카드 */}
          <div
            className="overflow-hidden rounded-[20px] md:rounded-[28px]"
            style={{
              background: '#fff',
              boxShadow: '0 20px 48px rgba(84,65,219,0.08)',
              border: '1px solid rgba(84,65,219,0.1)',
            }}
          >
            {/* 공통 헤드 행 */}
            <div
              className="diff-row"
              style={{ background: 'rgba(84,65,219,0.02)' }}
            >
              <div className="diff-cell">
                <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase opacity-40">
                  비교 항목
                </span>
              </div>
              <div className="diff-cell legacy-col">
                <span className="text-[10px] md:text-sm font-bold opacity-40">
                  기존 작명
                </span>
              </div>
              <div className="diff-cell astra-col">
                <span
                  className="text-[10px] md:text-sm font-black"
                  style={{ color: '#5441d8' }}
                >
                  Astra AI
                </span>
              </div>
            </div>

            {/* 데이터 행 */}
            {rows.map((row) => (
              <div key={row.label} className="diff-row">
                {/* 레이블 */}
                <div className="diff-cell flex items-center gap-2 md:gap-3">
                  <span
                    className="material-symbols-outlined text-base md:text-xl shrink-0"
                    style={{ color: '#5441d8' }}
                  >
                    {row.icon}
                  </span>
                  <span
                    className="text-[11px] md:text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ color: '#191a2e' }}
                  >
                    {row.label}
                  </span>
                </div>

                {/* 기존 서비스 */}
                <div className="diff-cell legacy-col">
                  <span className="x-badge">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full flex items-center justify-center text-[7px] md:text-[9px] font-bold border border-outline-variant opacity-30 shrink-0">
                      ✕
                    </span>
                    <span className="truncate">{row.legacy}</span>
                  </span>
                </div>

                {/* Astra */}
                <div className="diff-cell astra-col">
                  <span className="check-badge">
                    <span
                      className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center text-[8px] md:text-[10px] shrink-0"
                      style={{ background: '#5441d8', color: '#fff' }}
                    >
                      ✓
                    </span>
                    <span className="truncate">{row.astra}</span>
                  </span>
                </div>
              </div>
            ))}

            {/* 하단 요약 배너 */}
            <div
              className="px-4 py-3 md:px-7 md:py-5 flex items-center justify-between gap-3"
              style={{
                background:
                  'linear-gradient(135deg, rgba(84,65,219,0.06) 0%, rgba(198,192,255,0.12) 100%)',
                borderTop: '1px solid rgba(84,65,219,0.1)',
              }}
            >
              <p
                className="text-[10px] md:text-sm font-medium leading-relaxed grow"
                style={{ color: '#474555' }}
              >
                💡 실제 <strong>또래 환경</strong> 기준 분석.
              </p>
              <button
                className="text-[9px] md:text-xs font-black px-3 py-1.5 md:px-5 md:py-2.5 rounded-full whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(84,65,219,0.2)',
                }}
              >
                비교 완료
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
