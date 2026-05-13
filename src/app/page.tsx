import Image from "next/image";

export default function Home() {
  return (
    <main className="grow">
      <section className="relative w-full overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-secondary-fixed-dim/20 blur-3xl pointer-events-none" />

        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/hero2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-20 md:py-24 lg:py-28">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary-fixed/50 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wide text-on-primary-fixed-variant">
                AI 신생아 작명 가이드
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-on-surface md:text-5xl md:leading-[1.15]">
              우리 아기에게 주는
              <br />
              소중한 첫 선물,
              <br />
              <span className="relative inline-block text-primary">
                AI가 제안하는
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 -z-10 h-3 w-full text-secondary-container/70"
                  fill="none"
                  viewBox="0 0 200 9"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7C50.25 2.06 138.83 -1.26 198.5 7.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>
              </span>
              <br />
              <span className="text-primary">빛나는 이름</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-on-surface-variant md:text-lg md:leading-8">
              수천만 개의 데이터와 성명학적 분석을 통해, 우리 아기에게 가장 잘
              어울리는 특별한 이름을 찾아보세요. 따뜻하고 전문적인 가이드가
              되어드립니다.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-on-primary shadow-[0_20px_40px_-10px_rgba(97,85,152,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-10px_rgba(97,85,152,0.45)]">
                무료로 이름 추천받기
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-fixed/60 px-8 py-4 text-base font-semibold text-on-primary-fixed-variant transition-colors hover:bg-primary-fixed">
                어떻게 작동하나요?
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </span>
                성명학 기반 분석
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </span>
                안전한 데이터 보호
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
