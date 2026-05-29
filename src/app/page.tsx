'use client';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

export default function Home() {
  return (
    <main className="grow overflow-hidden space-y-16">
      <HeroSection />

      <FeaturesSection />
    </main>
  );
}
