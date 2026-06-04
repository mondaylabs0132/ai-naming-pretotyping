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
    if (stored === 'A' || stored === 'B') {
      setVariant(stored);
    } else {
      const assigned = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(STORAGE_KEY, assigned);
      setVariant(assigned);
    }
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
