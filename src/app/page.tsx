'use client';

import { useEffect, useMemo, useState, useActionState } from 'react';
import Image from 'next/image';
import { Sparkles, BookOpen, SlidersHorizontal } from 'lucide-react';
import { signupEmail } from './actions';

const HERO_MESSAGES = [
  {
    title: ['아이에게 가장 먼저 주는', '평생의 선물'],
  },
  {
    title: ['놀림 걱정 없이,', '오래 사랑받을 이름'],
  },
  {
    title: ['좋은 이름은', '아이의 첫 인상이 됩니다'],
  },
];

const planned = [
  {
    Icon: Sparkles,
    title: 'AI가 이름의 어감과 인상을 분석해드려요',
    desc: '발음의 부드러움, 또래 인식, 이름의 분위기까지 여러 기준으로 정밀하게 분석해드려요.',
    chip: '이름 분위기 분석',
    cardClass:
      'bg-gradient-to-br from-[#ede9fe] via-[#f5f3ff] to-surface border border-[#ddd6fe]',
    iconBg: 'bg-[#ede9fe]',
    iconColor: 'text-[#7c3aed]',
    glowClass: 'bg-[#8b5cf6]/25',
  },
  {
    Icon: BookOpen,
    title: '한자 뜻·획수·음양 조화를 함께 확인',
    desc: '단순 추천이 아니라 이름마다 의미, 획수, 조화까지 한눈에 비교할 수 있어요.',
    chip: '한자 의미 풀이',
    cardClass:
      'bg-gradient-to-br from-[#fef3c7] via-[#fffbeb] to-surface border border-[#fde68a]',
    iconBg: 'bg-[#fef3c7]',
    iconColor: 'text-[#d97706]',
    glowClass: 'bg-[#f59e0b]/25',
  },
  {
    Icon: SlidersHorizontal,
    title: '성씨와 조합해 자연스러운 이름만 추천',
    desc: 'AI가 성과 이름의 연결감, 발음 흐름, 부르기 쉬운 조합을 분석해 추천해드려요.',
    chip: '발음 조화 추천',
    cardClass:
      'bg-gradient-to-br from-[#fce7f3] via-[#fdf2f8] to-surface border border-[#fbcfe8]',
    iconBg: 'bg-[#fce7f3]',
    iconColor: 'text-[#db2777]',
    glowClass: 'bg-[#ec4899]/25',
  },
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

export default function Home() {
  const [count, setCount] = useState(0);
  const [bumping, setBumping] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [heroMessage, setHeroMessage] = useState(HERO_MESSAGES[0]);

  const [state, formAction, pending] = useActionState(signupEmail, {});

  const suggestions = useMemo(() => {
    if (!email.includes('@')) return [];

    const typed = email.split('@')[1] ?? '';

    return typed === ''
      ? EMAIL_DOMAINS
      : EMAIL_DOMAINS.filter((d) => d.startsWith(typed) && d !== typed);
  }, [email]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * HERO_MESSAGES.length);

    setHeroMessage(HERO_MESSAGES[randomIndex]);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document
      .querySelectorAll('.scroll-animate')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="grow overflow-hidden space-y-16">
      <section className="relative min-h-190 w-full overflow-hidden md:min-h-screen">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/3 h-150 w-150 rounded-full bg-primary-fixed/60 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-fixed/50 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="relative h-full w-full animate-float-y">
            <Image
              src="/hero2.png"
              alt=""
              fill
              priority
              unoptimized
              className="object-cover object-[72%_58%] scale-[1.15] md:scale-100 md:object-right"
            />
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-5 pt-24 pb-40 md:px-20 md:py-44">
          <div className="max-w-[320px] md:max-w-lg">
            <div className="animate-fade-in-up delay-0 mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed/60 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

              <span className="text-xs font-semibold tracking-wide text-on-primary-fixed-variant">
                <span className={bumping ? 'count-bump' : ''}>
                  {count.toLocaleString()}
                </span>
                명이 신청했어요
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100 max-w-[12ch] text-[2.4rem] font-bold leading-[1.05] tracking-tight text-on-surface sm:text-5xl md:max-w-none md:text-6xl">
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

            <p className="animate-fade-in-up delay-200 mt-5 text-base leading-relaxed text-on-surface-variant md:text-lg">
              며칠째 고민 중이신가요?
            </p>

            <p className="animate-fade-in-up delay-200 text-base leading-relaxed text-on-surface-variant md:text-lg">
              복잡한 거 없이, 좋은 이름 후보를 바로 받아가실 수 있어요.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap items-center gap-4">
              {state.success ? (
                <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary-fixed/40 px-6 py-4 text-sm font-medium text-on-primary-fixed-variant">
                  서비스 오픈 때 이메일로 알려드릴게요!
                </div>
              ) : (
                <div className="relative min-w-0 w-full max-w-md flex-1">
                  <form
                    action={formAction}
                    className="flex items-center rounded-full border border-outline-variant bg-surface shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                  >
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() =>
                        setTimeout(() => setShowSuggestions(false), 150)
                      }
                      placeholder="이메일을 입력해 주세요"
                      className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none"
                    />

                    <button
                      type="submit"
                      disabled={pending}
                      className="m-1 shrink-0 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary shadow-[0_8px_24px_-6px_rgba(97,85,152,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(97,85,152,0.55)] disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
                    >
                      {pending ? '신청 중...' : '신청할게요 →'}
                    </button>
                  </form>

                  {state.error && (
                    <p className="mt-2 px-4 text-xs text-red-500">
                      {state.error}
                    </p>
                  )}

                  {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute left-0 top-full z-100 mt-2 w-full overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
                      {suggestions.map((domain) => (
                        <li key={domain}>
                          <button
                            type="button"
                            onMouseDown={() => {
                              setEmail(`${email.split('@')[0]}@${domain}`);
                              setShowSuggestions(false);
                            }}
                            className="w-full px-5 py-3 text-left text-sm transition-colors hover:bg-surface-container"
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

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-20">
        <div className="scroll-animate mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary/50">
            준비 중인 기능
          </p>
          <h2 className="text-3xl font-bold text-on-surface md:text-5xl">
            이름 고민,
            <br />
            <span className="text-primary">이렇게 해결해드려요</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {planned.map((f, i) => (
            <div
              key={f.title}
              className="scroll-animate group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.22)] md:p-6"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div className="relative shrink-0">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${f.glowClass}`}
                  />

                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 shadow-sm ${f.iconBg}`}
                  >
                    <f.Icon size={20} className={f.iconColor} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-on-surface-variant shadow-sm backdrop-blur-sm">
                    {f.chip}
                  </div>

                  <h3 className="text-base font-bold leading-snug text-on-surface md:text-lg">
                    {f.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
