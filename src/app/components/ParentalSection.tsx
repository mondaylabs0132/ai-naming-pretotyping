import Image from 'next/image';

const quotes = [
  { text: '이름 때문에 학교에서 놀림받았어요', age: '초등 3학년' },
  { text: '친구들이 제 이름으로 별명 만들었어요', age: '중학교 1학년' },
  {
    text: '이름 바꾸고 싶다고 했을 때 너무 마음이 아팠어요',
    age: '30대 부모님',
  },
];

export default function ParentalSection() {
  return (
    <>
      <style>{`
        .quote-scroll {
          display: flex;
          gap: 16px;
          animation: scroll-x 18s linear infinite;
          width: max-content;
        }
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .quote-scroll:hover { animation-play-state: paused; }

        .pullquote-line::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #5441d8, #c6c0ff);
          border-radius: 99px;
        }
      `}</style>

      <section className="relative overflow-hidden px-6 mx-auto w-full h-screen flex flex-col items-center justify-center">
        {/* 배경 */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, #fbf8ff 0%, #f0edff 50%, #fbf8ff 100%)',
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#5441d8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="max-w-[1100px] mx-auto">
          {/* 상단 레이블 */}
          <div className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full"
              style={{
                color: '#5441d8',
                background: 'rgba(84,65,219,0.07)',
                border: '1px solid rgba(84,65,219,0.15)',
              }}
            >
              실제 부모님들의 이야기
            </span>
          </div>

          {/* 메인 레이아웃: 텍스트 + 이미지 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* 좌측 텍스트 */}
            <div>
              {/* 풀쿼트 */}
              <div className="pullquote-line relative pl-6 mb-10">
                <p
                  className="text-4xl md:text-[42px] font-bold leading-[1.2] tracking-tight mb-1"
                  style={{ color: '#191a2e' }}
                >
                  &quot;이름 하나
                  <br />
                  잘못 지어서...&quot;
                </p>
              </div>

              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: '#474555', fontStyle: 'italic' }}
              >
                &quot;부모님, 제 이름 왜 이렇게 지어주셨어요?&quot;
                <br />
                <br />
                <span
                  style={{
                    fontStyle: 'normal',
                    color: '#787586',
                    fontSize: '16px',
                  }}
                >
                  아이 입에서 이 말을 듣는 순간, 부모의 마음은 얼마나
                  무너질까요. 이름은 평생 불릴 첫 번째 선물입니다.
                </span>
              </p>

              {/* 스탯 2개 */}
              <div className="flex items-center gap-8">
                {[
                  {
                    num: '73%',
                    label: '이름 때문에 놀림받은 경험 있음',
                    color: '#5441d8',
                  },
                  {
                    num: '2명 중 1명',
                    label: '이름을 바꾸고 싶었던 경험 있음',
                    color: '#ff6b6b',
                  },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-2xl font-black mb-1"
                      style={{ color: s.color }}
                    >
                      {s.num}
                    </p>
                    <p
                      className="text-xs leading-snug"
                      style={{ color: '#787586', maxWidth: '120px' }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측 이미지 */}
            <div className="relative">
              {/* 장식 프레임 */}
              <div
                className="absolute -inset-3 rounded-[32px] -z-10 opacity-40"
                style={{
                  background: 'linear-gradient(135deg, #c6c0ff, #fcd344 80%)',
                }}
              />

              <div
                className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden"
                style={{ boxShadow: '0 32px 64px rgba(84,65,219,0.15)' }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKW5k6wvtp3dxkYBRyeYNvrTodQaIee3d5iP0_iB6qGI5cSPxjllz10gi5kWtlWsfaXz2sGHAQ6OYoG9yyxDtdrOuiGCJzMBaB2ifdlh06YEyQKSV9oGoA7cQuxkTLomp_AQBHqc6wo1oB1HUXP6AS4EaWbY-wjsdo7yo4boH2Fyy_oQCUGt0qBvqxC5llKsXQB6wVFM5e1nq21J3Yz96pJLj1YWz-UrTXS9i8LgvAB-UWJxM1aBCtRZcofo0nCr4nLVdv8DBoMv0"
                  alt="A cinematic soft-focus shot of a young child looking out of a sun-drenched window"
                  fill
                  className="object-cover"
                />
                {/* 부드러운 보라 오버레이 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(160deg, rgba(84,65,219,0.08) 0%, rgba(198,192,255,0.15) 100%)',
                  }}
                />

                {/* 이미지 위 플로팅 카드 */}
                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(198,192,255,0.4)',
                  }}
                >
                  <span className="text-2xl">💛</span>
                  <p
                    className="text-xs font-medium leading-snug"
                    style={{ color: '#474555' }}
                  >
                    <strong style={{ color: '#191a2e' }}>
                      이름은 평생의 첫 번째 선물.
                    </strong>
                    <br />
                    후회 없는 선택을 도와드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 스크롤 인용구 */}
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10"
              style={{
                background: 'linear-gradient(90deg, #fbf8ff, transparent)',
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10"
              style={{
                background: 'linear-gradient(-90deg, #fbf8ff, transparent)',
              }}
            />

            <div className="quote-scroll">
              {[...quotes, ...quotes].map((q, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(84,65,219,0.1)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-sm" style={{ color: '#5441d8' }}></span>
                  <p
                    className="text-sm font-medium whitespace-nowrap"
                    style={{ color: '#474555' }}
                  >
                    {q.text}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: 'rgba(84,65,219,0.07)',
                      color: '#5441d8',
                    }}
                  >
                    {q.age}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
