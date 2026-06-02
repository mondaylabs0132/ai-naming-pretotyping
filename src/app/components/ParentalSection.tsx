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
    <section className="relative overflow-hidden w-full h-svh flex flex-col justify-end">
      {/* 풀블리드 이미지 */}
      <Image
        src="/image02.png"
        alt="Emotional shot of a young child"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      {/* 그라디언트 오버레이: 상단 투명 → 하단 진하게 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(12,11,30,0.93) 0%, rgba(12,11,30,0.6) 45%, rgba(12,11,30,0.1) 100%)',
        }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-8 md:pb-14 flex flex-col items-center">
        {/* 배지 */}
        <span
          className="text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-5 md:mb-7"
          style={{
            color: 'rgba(198,192,255,0.9)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          실제 부모님들의 이야기
        </span>

        {/* 헤드라인 */}
        <div
          className="relative pl-5 mb-4 md:mb-6 self-start"
          style={{ borderLeft: '3px solid rgba(198,192,255,0.6)' }}
        >
          <p
            className="text-2xl md:text-4xl font-bold leading-snug tracking-tight"
            style={{ color: '#fff' }}
          >
            &quot;이름 하나 잘못 지어서...&quot;
          </p>
        </div>

        {/* 서브 카피 */}
        <p
          className="text-sm md:text-lg font-medium italic leading-relaxed mb-6 md:mb-8 self-start"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          &quot;부모님, 제 이름 왜 이렇게 지어주셨어요?&quot;
          <span
            className="not-italic text-xs md:text-base font-normal block mt-1.5"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            아이 입에서 이 말을 듣는 순간, 부모의 마음은 얼마나 무너질까요.
          </span>
        </p>

        {/* 스탯 */}
        <div className="flex items-center gap-8 md:gap-14 mb-7 md:mb-10 self-start">
          {[
            { num: '73%', label: '놀림받은 경험 있음', color: '#a89cf7' },
            { num: '2명 중 1명', label: '이름 바꾸고 싶었음', color: '#ff8f8f' },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-2xl md:text-4xl font-black mb-0.5"
                style={{ color: s.color }}
              >
                {s.num}
              </p>
              <p
                className="text-xs font-medium leading-tight"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* 스크롤 인용구 */}
        <div className="relative overflow-hidden w-full">
          <div
            className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10"
            style={{ background: 'linear-gradient(90deg, rgba(12,11,30,0.9), transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10"
            style={{ background: 'linear-gradient(-90deg, rgba(12,11,30,0.9), transparent)' }}
          />

          <div className="quote-scroll py-1">
            {[...quotes, ...quotes].map((q, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <p
                  className="text-[11px] md:text-sm font-medium whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {q.text}
                </p>
                <span
                  className="text-[8px] md:text-xs px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap"
                  style={{
                    background: 'rgba(198,192,255,0.2)',
                    color: '#c6c0ff',
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
