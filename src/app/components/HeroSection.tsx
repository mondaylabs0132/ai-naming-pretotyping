'use client';

/**
 * 첫 화면에서 "무엇을 받는지"를 3초 안에 보여준다.
 * 우측 결과 카드는 ModernNameSection의 '세련된' 태그 예시와 같은 데이터 계열.
 */
const SAMPLE = {
  tag: '세련된',
  name: '이아린',
  hanja: '雅潾',
  chars: '雅 우아할 아 · 潾 맑을 린',
  meaning: '우아하고 맑은',
  roman: 'A-rin',
};

export default function HeroSection() {
  const scrollToEmail = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer?.push({ event: 'cta_click', cta_location: 'hero' });

    const input = document.getElementById('email-input');
    const section = input?.closest('section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        (input as HTMLInputElement)?.focus();
      }, 800); // 스크롤 및 스냅 완료 후 포커스
    }
  };

  return (
    <section className="snap-start snap-always relative overflow-hidden px-6 mx-auto w-full min-h-svh flex flex-col items-center section-pt">
      {/* 배경 장식 */}
      <div className="pointer-events-none select-none">
        {/* 큰 그라디언트 orb */}
        <div
          className="absolute -top-32 -right-32 w-75 md:w-130 h-75 md:h-130 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #c6c0ff 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-50 md:w-90 h-50 md:h-90 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #fcd344 0%, transparent 70%)',
          }}
        />
        {/* 격자 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#5441d8 1px, transparent 1px), linear-gradient(90deg, #5441d8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="w-full max-w-300 m-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-16">
          {/* 좌측 텍스트 */}
          <div className="z-10 text-center md:text-left flex flex-col items-center md:items-start">
            {/* 상단 뱃지 — 제품 주장 대신 진입 장벽 제거 */}
            <div className="hero-fade-1 inline-flex items-center mb-4 md:mb-6">
              <span
                className="badge-pulse flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold leading-none"
                style={{
                  background: 'rgba(84,65,219,0.07)',
                  border: '1px solid rgba(84,65,219,0.18)',
                  color: '#5441d8',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5441d8] animate-pulse shrink-0" />
                <span className="translate-y-[0.5px]">가입 없이 1분 · 무료</span>
              </span>
            </div>

            {/* 헤드라인 */}
            <h1 className="hero-fade-2 text-4xl md:text-6xl font-bold leading-[1.15] mb-4 md:mb-6 tracking-tight">
              <span className="text-on-background">작명소 30만 원,</span>
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #5441d8 0%, #8b7cf8 60%, #c6c0ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                쓰기 전에 여기서
              </span>
            </h1>

            {/* 서브카피 */}
            <p
              className="hero-fade-3 text-md md:text-lg leading-relaxed mb-6 md:mb-8 max-w-105"
              style={{ color: '#474555' }}
            >
              성씨, 생년월일, 원하는 느낌 세 가지.
              <br className="block" />
              1분이면 사주 근거가 있는 이름을 받습니다.
            </p>

            {/* CTA 버튼 */}
            <div className="hero-fade-4 flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
              <button
                onClick={scrollToEmail}
                className="hero-cta relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-md font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] w-full sm:w-auto"
                style={{
                  boxShadow:
                    '0 8px 32px rgba(84,65,219,0.35), 0 2px 8px rgba(84,65,219,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                출시되면 가장 먼저 받아보기
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 group-hover:translate-x-1"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <p className="text-[11px] md:text-xs" style={{ color: '#787586' }}>
                정식 출시 시 무료 1개 제공 예정
              </p>
            </div>
          </div>

          {/* 우측 결과 카드 목업 */}
          <div className="relative flex items-center justify-center">
            {/* 배경 orb */}
            <div
              className="absolute w-70 md:w-105 h-70 md:h-105 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(198,192,255,0.35) 0%, transparent 65%)',
              }}
            />

            {/* 공전 장식 점 */}
            <div className="absolute w-65 md:w-95 h-65 md:h-95 hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="orbit-dot w-2 md:w-3 h-2 md:h-3 rounded-full"
                  style={{
                    background: '#fcd344',
                    boxShadow: '0 0 8px rgba(252,211,68,0.6)',
                  }}
                />
              </div>
            </div>

            <div className="hero-float relative z-10 w-full max-w-[300px] md:max-w-[380px]">
              <div
                className="relative bg-white px-6 py-5 md:px-8 md:py-9 text-center"
                style={{
                  borderRadius: '28px',
                  border: '1px solid rgba(84,65,219,0.08)',
                  boxShadow:
                    '0 32px 64px rgba(84,65,219,0.12), 0 8px 24px rgba(84,65,219,0.08)',
                }}
              >
                {/* 상단: 선택한 느낌 */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] md:text-xs font-bold mb-4 md:mb-6"
                  style={{
                    color: '#fff',
                    background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                  }}
                >
                  #{SAMPLE.tag}
                </span>

                {/* 이름 */}
                <p
                  className="text-4xl md:text-5xl font-black tracking-tight leading-none"
                  style={{ color: '#191a2e' }}
                >
                  {SAMPLE.name}
                </p>
                <p
                  className="text-lg md:text-xl mt-1.5 font-medium"
                  style={{ color: '#787586', opacity: 0.6 }}
                >
                  {SAMPLE.hanja}
                </p>

                {/* 한자 훈음 — "왜 이 이름인지"의 근거 */}
                <p
                  className="text-[11px] md:text-xs mt-4 md:mt-5"
                  style={{ color: '#787586' }}
                >
                  {SAMPLE.chars}
                </p>

                {/* 한 줄 뜻 */}
                <p
                  className="text-sm md:text-base font-bold mt-2 md:mt-2.5"
                  style={{ color: '#5441d8' }}
                >
                  “{SAMPLE.meaning}”
                </p>

                {/* 하단: 영어 표기 — 모바일에서는 숨긴다.
                    DetailSection이 영어 발음을 전담하므로 정보가 중복이고,
                    작은 화면에서 카드가 한 화면을 넘기는 주 원인이었다. */}
                <div
                  className="mt-4 md:mt-6 pt-3 md:pt-4 hidden md:flex items-center justify-center gap-1.5"
                  style={{ borderTop: '1px dashed rgba(84,65,219,0.15)' }}
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ color: '#787586' }}
                  >
                    translate
                  </span>
                  <p
                    className="text-[11px] md:text-xs font-bold"
                    style={{ color: '#787586' }}
                  >
                    {SAMPLE.roman}
                  </p>
                </div>
              </div>

              {/* 플로팅 뱃지 — 사주 근거 */}
              <div
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-6 z-20 hidden sm:flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(84,65,219,0.15)',
                  border: '1px solid rgba(198,192,255,0.5)',
                }}
              >
                <div
                  className="w-7 md:w-8 h-7 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(84,65,219,0.1)' }}
                >
                  <span
                    className="material-symbols-outlined text-base md:text-lg"
                    style={{ color: '#5441d8' }}
                  >
                    auto_awesome
                  </span>
                </div>
                <div className="text-left">
                  <p
                    className="text-[10px] md:text-[11px] font-bold"
                    style={{ color: '#5441d8' }}
                  >
                    사주 · 한자 풀이 포함
                  </p>
                  <p
                    className="text-[9px] md:text-[10px]"
                    style={{ color: '#787586' }}
                  >
                    이름마다 한 줄 의미
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className="absolute bottom-4 text-[9px] md:text-[10px] text-center px-6"
        style={{ color: '#787586', opacity: 0.45 }}
      >
        * 예시 이름이며, 실제 결과는 생년월일·사주에 따라 달라집니다.
      </p>
    </section>
  );
}
