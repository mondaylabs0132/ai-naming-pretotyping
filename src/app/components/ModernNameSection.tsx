'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/** 감성 태그별 이름 후보 (출시 시 실제 사주 결과로 대체) */
const FEELS = [
  {
    tag: '부드러운',
    names: [
      { name: '서온', hanja: '徐溫', meaning: '따뜻함이 오래 머무는' },
      { name: '하린', hanja: '河潾', meaning: '맑게 흐르는 마음' },
      { name: '온유', hanja: '溫柔', meaning: '부드럽게 품어주는' },
    ],
  },
  {
    tag: '단아한',
    names: [
      { name: '수아', hanja: '秀雅', meaning: '빼어나고 우아한' },
      { name: '서윤', hanja: '舒潤', meaning: '넉넉하게 빛나는' },
      { name: '지현', hanja: '智賢', meaning: '지혜롭고 어진' },
    ],
  },
  {
    tag: '모던한',
    names: [
      { name: '시안', hanja: '詩安', meaning: '시처럼 편안한' },
      { name: '하율', hanja: '河律', meaning: '자기 리듬을 아는' },
      { name: '재이', hanja: '在怡', meaning: '늘 기쁨이 머무는' },
    ],
  },
  {
    tag: '씩씩한',
    names: [
      { name: '건우', hanja: '健祐', meaning: '굳세게 도와주는' },
      { name: '태오', hanja: '泰梧', meaning: '크게 자라나는' },
      { name: '강준', hanja: '康俊', meaning: '건강하고 뛰어난' },
    ],
  },
  {
    tag: '세련된',
    names: [
      { name: '예준', hanja: '睿俊', meaning: '슬기롭고 빼어난' },
      { name: '아린', hanja: '雅潾', meaning: '우아하고 맑은' },
      { name: '세아', hanja: '世雅', meaning: '세상을 곱게 보는' },
    ],
  },
  {
    tag: '깊이있는',
    names: [
      { name: '지호', hanja: '智昊', meaning: '하늘만큼 지혜로운' },
      { name: '도현', hanja: '道賢', meaning: '바른 길을 아는' },
      { name: '현서', hanja: '賢舒', meaning: '어질게 펼쳐가는' },
    ],
  },
] as const;

const MAX_SELECT = 3;
const SURNAME = '이';

export default function ModernNameSection() {
  const [inView, setInView] = useState(false);
  const [selected, setSelected] = useState<string[]>(['부드러운', '단아한']);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleTag = (tag: string) => {
    setSelected((prev) => {
      if (prev.includes(tag)) {
        // 마지막 1개는 남겨서 결과가 비지 않도록
        return prev.length === 1 ? prev : prev.filter((t) => t !== tag);
      }
      // 3개를 넘으면 가장 먼저 고른 태그를 밀어냄
      return [...prev, tag].slice(-MAX_SELECT);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer?.push({ event: 'tag_selected', feel_tag: tag });
  };

  /** 선택한 태그 풀을 번갈아 뽑아 3개 구성 */
  const results = useMemo(() => {
    const pools = selected
      .map((tag) => FEELS.find((f) => f.tag === tag)?.names ?? [])
      .filter((p) => p.length > 0);

    const picked: (typeof FEELS)[number]['names'][number][] = [];
    for (let round = 0; picked.length < 3 && round < 3; round++) {
      for (const pool of pools) {
        const candidate = pool[round];
        if (candidate && picked.length < 3) picked.push(candidate);
      }
    }
    return picked;
  }, [selected]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 mx-auto w-full h-svh flex flex-col items-center justify-center section-pt pb-6 md:py-0"
      style={{ background: '#fbf8ff' }}
    >
      <div className="max-w-310 mx-auto w-full">
        {/* 헤드라인 */}
        <div
          className="text-center mb-6 md:mb-10 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: '#5441d8' }}
          >
            MODERN &amp; MEANINGFUL
          </p>

          <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-on-background">
            사주로 짓는
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #5441d8 0%, #8b7cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              세련된 이름
            </span>
          </h2>

          <p
            className="mt-3 text-sm md:text-base leading-relaxed"
            style={{ color: '#474555' }}
          >
            좋은 뜻은 지키고, 세련됨은 더했습니다.
          </p>
        </div>

        {/* 비교 카드 */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-3xl mx-auto items-stretch">
          {/* 흔한 작명 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-7 border border-gray-100 overflow-hidden flex flex-col transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-32px)',
              transitionDelay: '150ms',
            }}
          >
            <span className="self-start text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 mb-3 md:mb-5">
              흔한 작명
            </span>
            <p className="text-[11px] md:text-sm font-bold text-gray-400 mb-3 md:mb-5">
              획수·오행만 맞춘 결과
            </p>

            <div className="space-y-1.5 md:space-y-2.5 flex-1">
              {['○순', '○자', '○덕'].map((n, i) => (
                <div
                  key={n}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg md:rounded-xl px-3 py-2 md:py-2.5 transition-all duration-400 ease-out"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-12px)',
                    transitionDelay: `${350 + i * 100}ms`,
                  }}
                >
                  <span className="font-black text-gray-300 tracking-widest text-sm md:text-lg">
                    {n}
                  </span>
                  <span
                    className="ml-auto material-symbols-outlined text-sm"
                    style={{ color: '#c8c4d7' }}
                  >
                    sentiment_neutral
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-1.5 mt-3 md:mt-5 pt-3 md:pt-4"
              style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: '#ba1a1a' }}
              >
                close
              </span>
              <p className="text-[10px] md:text-sm font-medium text-gray-400 leading-tight">
                요즘 감성은
                <br className="sm:hidden" /> 고려되지 않음
              </p>
            </div>
          </div>

          {/* 첫지음 */}
          <div
            className="relative bg-white rounded-2xl md:rounded-3xl p-4 md:p-7 overflow-hidden flex flex-col transition-all duration-700 ease-out"
            style={{
              border: '2px solid rgba(84,65,219,0.25)',
              boxShadow: '0 16px 40px rgba(84,65,219,0.12)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transitionDelay: '300ms',
            }}
          >
            {/* 배경 장식 */}
            <div
              className="absolute top-0 right-0 w-28 h-28 md:w-44 md:h-44 rounded-bl-full opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(84,65,219,0.2), transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <span
                className="self-start text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full text-white mb-3 md:mb-5"
                style={{
                  background: 'linear-gradient(135deg, #5441d8, #7c6ef0)',
                }}
              >
                첫지음
              </span>
              <p
                className="text-[11px] md:text-sm font-bold mb-3 md:mb-5"
                style={{ color: '#5441d8' }}
              >
                {selected.map((t) => `#${t}`).join(' ')}
              </p>

              <div className="space-y-1.5 md:space-y-2.5 flex-1">
                {results.map((r, i) => (
                  <div
                    key={`${r.name}-${selected.join()}`}
                    className="name-pop rounded-lg md:rounded-xl px-3 py-1.5 md:py-2.5"
                    style={{
                      background: 'rgba(84,65,219,0.05)',
                      border: '1px solid rgba(84,65,219,0.1)',
                      animationDelay: `${i * 70}ms`,
                    }}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="font-black tracking-tight text-sm md:text-lg"
                        style={{ color: '#191a2e' }}
                      >
                        {SURNAME}
                        {r.name}
                      </span>
                      <span
                        className="text-[10px] md:text-xs font-medium"
                        style={{ color: '#787586', opacity: 0.6 }}
                      >
                        {r.hanja}
                      </span>
                    </div>
                    <p
                      className="text-[9px] md:text-[11px] font-medium leading-tight mt-0.5 truncate"
                      style={{ color: '#5441d8', opacity: 0.75 }}
                    >
                      {r.meaning}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-1.5 mt-3 md:mt-5 pt-3 md:pt-4"
                style={{ borderTop: '1px solid rgba(84,65,219,0.1)' }}
              >
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: '#2da87a' }}
                >
                  check_circle
                </span>
                <p
                  className="text-[10px] md:text-sm font-bold leading-tight"
                  style={{ color: '#2da87a' }}
                >
                  사주 근거 그대로,
                  <br className="sm:hidden" /> 감성은 내가 선택
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 감성 태그 선택 */}
        <div
          className="max-w-3xl mx-auto mt-5 md:mt-9 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '450ms',
          }}
        >
          <p
            className="flex items-center justify-center gap-1.5 text-[11px] md:text-sm font-bold mb-2.5 md:mb-4"
            style={{ color: '#474555' }}
          >
            <span
              className="material-symbols-outlined text-base md:text-lg"
              style={{ color: '#5441d8' }}
            >
              touch_app
            </span>
            원하는 느낌을 직접 골라보세요{' '}
            <span className="font-medium opacity-50">(최대 {MAX_SELECT}개)</span>
          </p>

          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2.5">
            {FEELS.map((f) => {
              const active = selected.includes(f.tag);
              return (
                <button
                  key={f.tag}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleTag(f.tag)}
                  className={`feel-chip${active ? ' active' : ''}`}
                >
                  #{f.tag}
                </button>
              );
            })}
          </div>
        </div>

        <p
          className="text-center text-[10px] md:text-xs mt-4 md:mt-8 font-medium transition-all duration-700"
          style={{
            color: '#787586',
            opacity: inView ? 0.4 : 0,
            transitionDelay: '600ms',
          }}
        >
          * 예시 이름이며, 실제 결과는 생년월일·사주에 따라 달라집니다.
        </p>
      </div>
    </section>
  );
}
