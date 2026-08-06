import ABHeroParental from './components/ABHeroParental';
import AISolutionSection from './components/AISolutionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FreeNameSection from './components/FreeNameSection';
import Header from './components/Header';
import ModernNameSection from './components/ModernNameSection';
import DilemmaSection from './components/DilemmaSection';
import PricingValueSection from './components/PricingValueSection';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <Header />
      <main>
        <ABHeroParental />
        {/* TODO(톤 확인용): 리포지셔닝 확정 후 최종 순서로 재배치 */}
        <ScrollReveal>
          <DilemmaSection />
        </ScrollReveal>
        <ScrollReveal>
          <ModernNameSection />
        </ScrollReveal>
        <ScrollReveal>
          <AISolutionSection />
        </ScrollReveal>
        <ScrollReveal>
          <FreeNameSection />
        </ScrollReveal>
        <ScrollReveal>
          <PricingValueSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}
