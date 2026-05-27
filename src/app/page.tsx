'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Sparkles, BookOpen, SlidersHorizontal } from 'lucide-react';

const planned = [
  {
    Icon: Sparkles,
    title: '클릭 몇 번으로 이름 후보 완성',
    desc: '복잡한 과정 없어요. 조건만 입력하면 잘 지어진 이름 후보를 바로 받아볼 수 있어요.',
  },
  {
    Icon: BookOpen,
    title: '이름마다 뜻과 소리를 풀어드려요',
    desc: '추천된 이름마다 한자 뜻, 획수, 소리 느낌을 한눈에 볼 수 있어요.',
  },
  {
    Icon: SlidersHorizontal,
    title: '원하는 조건만 골라요',
    desc: '느낌, 돌림자, 성씨 조합 중 하나만 정해도 맞는 이름만 바로 보여드려요.',
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

  const suggestions = useMemo(() => {
    if (!email.includes('@')) return [];
    const typed = email.split('@')[1] ?? '';
    return typed === ''
      ? EMAIL_DOMAINS
      : EMAIL_DOMAINS.filter((d) => d.startsWith(typed) && d !== typed);
  }, [email]);

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
    <main className="grow overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/3 h-150 w-150 rounded-full bg-primary-fixed/60 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-fixed/50 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/hero2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-20 md:py-44">
          <div className="max-w-lg">
            {/* Badge */}
            <div className="animate-fade-in-up delay-0 mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-fixed/60 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
              <span className="text-xs font-semibold tracking-wide text-on-primary-fixed-variant">
                <span className={bumping ? 'count-bump' : ''}>
                  {count.toLocaleString()}
                </span>
                명이 신청했어요
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-5xl font-bold leading-[1.1] tracking-tight text-on-surface md:text-6xl">
              놀림 받지 않고
              <br />
              <span className="relative inline-block">
                사랑받을
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
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
              </span>{' '}
              이름
            </h1>

            {/* Sub */}
            <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-relaxed text-on-surface-variant">
              며칠째 고민 중이신가요?
            </p>
            <p className="animate-fade-in-up delay-200 text-lg leading-relaxed text-on-surface-variant">
              복잡한 거 없이, 좋은 이름 후보를 바로 받아가실 수 있어요.
            </p>

            {/* Email form + social proof */}
            <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap items-center gap-4">
              <div className="relative min-w-64 max-w-md flex-1">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center rounded-full border border-outline-variant bg-surface shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
                >
                  <input
                    id="email-input"
                    type="email"
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
                    className="m-1 shrink-0 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-[0_8px_24px_-6px_rgba(97,85,152,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(97,85,152,0.55)]"
                  >
                    신청할게요 →
                  </button>
                </form>

                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Planned features ─────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-20">
        <div className="scroll-animate mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
            곧 쓸 수 있어요
          </p>
          <h2 className="mt-3 text-2xl font-bold text-on-surface md:text-3xl">
            3가지 기능을 준비했어요
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {planned.map((f, i) => (
            <div
              key={f.title}
              className="scroll-animate group rounded-2xl border border-outline-variant/30 bg-surface-container-low p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary-fixed/50 p-3 text-primary transition-colors group-hover:bg-primary-fixed">
                <f.Icon size={22} />
              </div>
              <h3 className="mb-2 font-bold text-on-surface">{f.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
