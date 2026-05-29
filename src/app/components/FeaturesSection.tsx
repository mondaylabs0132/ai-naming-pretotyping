import { Sparkles, BookOpen, SlidersHorizontal } from 'lucide-react';
import { useEffect } from 'react';

const planned = [
  {
    Icon: Sparkles,
    title: 'AI가 이름의 어감과 인상을 분석해드려요',
    desc: '발음의 부드러움, 또래 인식, 이름의 분위기까지\n여러 기준으로 정밀하게 분석해드려요.',
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
    desc: '단순 추천이 아니라 이름마다 의미, 획수, 조화까지\n한눈에 비교할 수 있어요.',
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
    desc: 'AI가 성과 이름의 연결감, 발음 흐름, 부르기 쉬운\n조합을 분석해 추천해드려요.',
    chip: '발음 조화 추천',
    cardClass:
      'bg-gradient-to-br from-[#fce7f3] via-[#fdf2f8] to-surface border border-[#fbcfe8]',
    iconBg: 'bg-[#fce7f3]',
    iconColor: 'text-[#db2777]',
    glowClass: 'bg-[#ec4899]/25',
  },
];

export default function FeaturesSection() {
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
    <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:max-w-screen-md xl:px-20 xl:max-w-7xl">
      <div className="scroll-animate mb-16">
        <p className="mb-3 text-xs mobile-xs:text-[10px] font-bold uppercase tracking-[0.25em] text-primary/50">
          준비 중인 기능
        </p>

        <h2 className="text-3xl mobile-xs:text-2xl font-bold text-on-surface md:text-5xl">
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
                <div className="mb-2 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-[11px] mobile-xs:text-[10px] font-semibold text-on-surface-variant shadow-sm backdrop-blur-sm">
                  {f.chip}
                </div>

                <h3 className="whitespace-nowrap text-[15px] mobile-xs:text-[14px] font-bold leading-snug text-on-surface md:text-lg">
                  {f.title}
                </h3>

                <p className="mt-2 text-xs mobile-xs:text-[11px] leading-relaxed text-on-surface-variant">
                  {f.desc.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
