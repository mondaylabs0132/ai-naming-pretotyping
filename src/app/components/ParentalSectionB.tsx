import Image from 'next/image';

const quotes = [
  {
    text: '이름 하나에 이렇게 많은 사랑을 담을 수 있을지 몰랐어요',
    tag: '예비 엄마',
  },
  { text: '태어나기 전부터 이름을 불러줬어요', tag: '0세 아빠' },
  { text: '평생 자랑스러운 이름을 주고 싶었어요', tag: '두 아이 엄마' },
];

export default function ParentalSectionB() {
  return (
    <section className="relative overflow-hidden w-full h-svh flex flex-col justify-end section-pt">
      {/* 풀블리드 이미지 */}
      <Image
        src="/imageB01.jpeg"
        alt="Warm moment of a parent holding a newborn"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      {/* 그라디언트 오버레이 */}
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
          부모님들의 마음
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
            &quot;이름을 짓는 순간,
            <br />
            부모가 되었습니다.&quot;
          </p>
        </div>

        {/* 서브 카피 */}
        <p
          className="text-sm md:text-lg font-medium italic leading-relaxed mb-6 md:mb-8 self-start"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          &quot;이 이름으로 오래오래 불러줄게.&quot;
          <span
            className="not-italic text-xs md:text-base font-normal block mt-1.5"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            처음 이름을 부르는 그 순간의 떨림을, 오래 간직할 수 있도록.
          </span>
        </p>

        {/* 스크롤 인용구 */}
        <div className="relative overflow-hidden w-full">
          <div
            className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10"
            style={{
              background:
                'linear-gradient(90deg, rgba(12,11,30,0.9), transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10"
            style={{
              background:
                'linear-gradient(-90deg, rgba(12,11,30,0.9), transparent)',
            }}
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
                  {q.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
