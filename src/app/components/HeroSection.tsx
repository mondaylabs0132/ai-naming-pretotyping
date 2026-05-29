'use client';

import { useEffect, useMemo, useState, useActionState, useRef } from 'react';
import Image from 'next/image';
import { signupEmail } from '../actions';

const HERO_MESSAGES = [
  { title: ['아이에게 가장 먼저 주는', '평생의 선물'] },
  { title: ['놀림 걱정 없이,', '오래 사랑받을 이름'] },
  { title: ['좋은 이름은', '아이의 첫 인상이 됩니다'] },
];

const SIGNUP_TARGET = 247;

const EMAIL_DOMAINS = [
  'gmail.com',
  'naver.com',
  'kakao.com',
  'daum.net',
  'hanmail.net',
  'nate.com',
  'icloud.com',
  'outlook.com',
];

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const [bumping, setBumping] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [heroMessage, setHeroMessage] = useState(HERO_MESSAGES[0]);
  const [state, formAction, pending] = useActionState(signupEmail, {});
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!email.includes('@')) return [];
    const typed = email.split('@')[1] ?? '';
    return typed === ''
      ? EMAIL_DOMAINS
      : EMAIL_DOMAINS.filter((d) => d.startsWith(typed) && d !== typed);
  }, [email]);

  useEffect(() => {
    // Reset scroll to top on mount/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    setHeroMessage(
      HERO_MESSAGES[Math.floor(Math.random() * HERO_MESSAGES.length)],
    );
  }, []);

  useEffect(() => {
    const duration = 1500;
    const start = Date.now();

    const countUp = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * SIGNUP_TARGET));
      if (progress >= 1) clearInterval(countUp);
    }, 16);

    let liveTimeout: ReturnType<typeof setTimeout>;
    const scheduleLive = () => {
      liveTimeout = setTimeout(
        () => {
          setCount((prev) => prev + 1);
          setBumping(true);
          setTimeout(() => setBumping(false), 450);
          scheduleLive();
        },
        5000 + Math.random() * 8000,
      );
    };
    const liveStart = setTimeout(scheduleLive, 1700);

    return () => {
      clearInterval(countUp);
      clearTimeout(liveStart);
      clearTimeout(liveTimeout);
    };
  }, []);

  // Handle re-scrolling when suggestions appear or layout changes
  useEffect(() => {
    if (showSuggestions && document.activeElement === inputRef.current) {
      inputRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showSuggestions, suggestions.length]);

  // Scroll to success message when submitted
  useEffect(() => {
    if (state.success) {
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [state.success]);

  return (
    <section className="relative z-30 flex min-h-svh w-full items-end md:min-h-screen md:items-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/3 h-150 w-150 rounded-full bg-primary-fixed/60 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-fixed/50 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full animate-float-y">
          <Image
            src="/hero2.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-[68%_52%] scale-[1.02] mobile-xs:scale-[1.0] sm:scale-[1.05] md:scale-100 md:object-right"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-40 mobile-xs:pb-32 md:px-10 md:py-44 md:max-w-screen-md xl:px-20 xl:max-w-7xl">
        <div className="max-w-[320px] md:max-w-lg">
          <div className="animate-fade-in-up delay-0 mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed/60 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

            <span className="text-xs mobile-xs:text-[10px] font-semibold tracking-wide text-on-primary-fixed-variant">
              <span className={bumping ? 'count-bump' : ''}>
                {count.toLocaleString()}
              </span>
              명이 신청했어요
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 max-w-[12ch] text-[2.4rem] mobile-xs:text-[2.1rem] font-bold leading-[1.05] tracking-tight text-on-surface sm:text-5xl md:max-w-none md:text-6xl">
            <span className="block text-balance whitespace-nowrap">
              {heroMessage.title[0]}
            </span>

            <span className="relative mt-1 inline-block whitespace-nowrap">
              {heroMessage.title[1]}

              <svg
                aria-hidden="true"
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C80 3 220 -1 298 10"
                  stroke="#fcdd80"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-5 text-base mobile-xs:text-sm leading-relaxed text-on-surface-variant md:text-lg">
            며칠째 고민 중이신가요?
          </p>

          <p className="animate-fade-in-up delay-200 text-base mobile-xs:text-sm leading-7 text-on-surface-variant md:text-lg md:leading-relaxed">
            AI가 바로 분석해서
            <br className="md:hidden" />
            좋은 이름만 추천해드려요.
          </p>

          <div
            ref={containerRef}
            className="animate-fade-in-up delay-300 mt-8 flex flex-wrap items-center gap-4"
          >
            {state.success ? (
              <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary-fixed/40 px-6 py-4 text-sm mobile-xs:text-xs font-medium text-on-primary-fixed-variant">
                서비스 오픈 때 이메일로 알려드릴게요!
              </div>
            ) : (
              <div className="relative min-w-0 w-full max-w-md flex-1">
                <form
                  action={formAction}
                  className="flex items-center rounded-full border border-outline-variant bg-surface shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                >
                  <input
                    ref={inputRef}
                    id="email-input"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => {
                      setShowSuggestions(true);
                      e.target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 150)
                    }
                    placeholder="이메일을 입력해 주세요"
                    className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm mobile-xs:text-xs text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                  />

                  <button
                    type="submit"
                    disabled={pending}
                    className="m-1 shrink-0 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm mobile-xs:text-xs font-semibold text-on-primary shadow-[0_8px_24px_-6px_rgba(97,85,152,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(97,85,152,0.55)] disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
                  >
                    {pending ? '신청 중...' : '신청할게요 →'}
                  </button>
                </form>

                {state.error && (
                  <p className="mt-2 px-4 text-xs mobile-xs:text-[10px] text-red-500">
                    {state.error}
                  </p>
                )}

                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
                    {suggestions.map((domain) => (
                      <li key={domain}>
                        <button
                          type="button"
                          onMouseDown={() => {
                            setEmail(`${email.split('@')[0]}@${domain}`);
                            setShowSuggestions(false);
                          }}
                          className="w-full px-5 py-3 text-left text-sm mobile-xs:text-xs transition-colors hover:bg-surface-container"
                        >
                          <span className="text-on-surface-variant">
                            {email.split('@')[0]}@
                          </span>

                          <span className="font-medium text-on-surface">
                            {domain}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-linear-to-b from-transparent via-background/60 to-background backdrop-blur-[2px]" />
    </section>
  );
}
