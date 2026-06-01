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
    <section className="relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center py-6 md:py-0">
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

      <div className="max-w-275 mx-auto w-full flex flex-col items-center">
        {/* 상단 레이블 */}
        <div className="text-center mb-6 md:mb-16">
          <span
            className="items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center mb-6 md:mb-20 w-full">
          {/* 우측 이미지 (모바일 최상단) */}
          <div className="relative order-1 lg:order-2 max-w-70 sm:max-w-md mx-auto lg:max-w-none w-full">
            {/* 장식 프레임 */}
            <div
              className="absolute -inset-1.5 md:-inset-3 rounded-3xl md:rounded-4xl -z-10 opacity-40"
              style={{
                background: 'linear-gradient(135deg, #c6c0ff, #fcd344 80%)',
              }}
            />

            <div
              className="relative w-full aspect-video md:aspect-video lg:aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 40px rgba(84,65,219,0.1)' }}
            >
              <Image
                src="/image02.png"
                alt="Emotional shot of a young child"
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
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

              {/* 이미지 위 플로팅 카드 (모바일에서는 더 작게) */}
              <div
                className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-5 md:left-5 md:right-5 flex items-center gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(198,192,255,0.4)',
                }}
              >
                <span className="text-lg md:text-2xl">💛</span>
                <p
                  className="text-xs md:text-xs font-medium leading-tight"
                  style={{ color: '#474555' }}
                >
                  <strong className="text-on-background block mb-0.5">
                    이름은 평생의 첫 번째 선물.
                  </strong>
                  후회 없는 선택을 도와드립니다.
                </p>
              </div>
            </div>
          </div>

          {/* 좌측 텍스트 */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* 풀쿼트 */}
            <div className="pullquote-line relative pl-4 md:pl-6 mb-4 md:mb-10 inline-block lg:block text-left">
              <p
                className="text-2xl md:text-3xl font-bold leading-[1.2] tracking-tight"
                style={{ color: '#191a2e' }}
              >
                &quot;이름 하나 잘못 지어서...&quot;
              </p>
            </div>

            <p
              className="text-sm md:text-lg leading-relaxed mb-4 md:mb-10 font-medium italic"
              style={{ color: '#474555' }}
            >
              &quot;부모님, 제 이름 왜 이렇게 지어주셨어요?&quot;
              <br />
              <span
                className="not-italic text-[13px] md:text-base font-normal block mt-1.5"
                style={{ color: '#787586' }}
              >
                아이 입에서 이 말을 듣는 순간, <br className="md:hidden" />{' '}
                부모의 마음은 얼마나 무너질까요.
              </span>
            </p>

            {/* 스탯 2개 */}
            <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-10">
              {[
                {
                  num: '73%',
                  label: '놀림받은 경험 있음',
                  color: '#5441d8',
                },
                {
                  num: '2명 중 1명',
                  label: '이름 바꾸고 싶었음',
                  color: '#ff6b6b',
                },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p
                    className="text-xl md:text-3xl font-black mb-0.5 md:mb-1"
                    style={{ color: s.color }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-xs leading-tight font-medium"
                    style={{ color: '#787586', maxWidth: '120px' }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 스크롤 인용구 */}
        <div className="relative overflow-hidden w-full">
          <div
            className="absolute left-0 top-0 bottom-0 w-8 md:w-24 z-10"
            style={{
              background: 'linear-gradient(90deg, #fbf8ff, transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 md:w-24 z-10"
            style={{
              background: 'linear-gradient(-90deg, #fbf8ff, transparent)',
            }}
          />

          <div className="quote-scroll py-1.5">
            {[...quotes, ...quotes].map((q, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-3 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(84,65,219,0.1)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <p
                  className="text-[11px] md:text-sm font-medium whitespace-nowrap"
                  style={{ color: '#474555' }}
                >
                  {q.text}
                </p>
                <span
                  className="text-[8px] md:text-xs px-1.5 py-0.5 rounded-full font-bold"
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
  );
}
