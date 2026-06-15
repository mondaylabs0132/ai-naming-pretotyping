'use client';

import { useLayoutEffect, useState } from 'react';
import HeroSection from './HeroSection';
import HeroSectionB from './HeroSectionB';
import ParentalSection from './ParentalSection';
import ParentalSectionB from './ParentalSectionB';
import ScrollReveal from './ScrollReveal';

const STORAGE_KEY = 'ab_hero_parental';

export default function ABHeroParental() {
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as 'A' | 'B' | null;
    const resolved = stored === 'A' || stored === 'B' ? stored : (Math.random() < 0.5 ? 'A' : 'B');
    if (!stored) localStorage.setItem(STORAGE_KEY, resolved);
    setVariant(resolved);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer?.push({
      event: 'ab_variant_assigned',
      ab_variant: resolved,
    });
  }, []);

  if (variant === 'B') {
    return (
      <>
        <ScrollReveal>
          <HeroSectionB />
        </ScrollReveal>
        <ScrollReveal>
          <ParentalSectionB />
        </ScrollReveal>
      </>
    );
  }

  return (
    <>
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ParentalSection />
      </ScrollReveal>
    </>
  );
}
