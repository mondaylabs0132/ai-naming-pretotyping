import CTASection from './components/CTASection';
import DetailSection from './components/DetailSection';
import DilemmaSection from './components/DilemmaSection';
import Footer from './components/Footer';
import FreeNameSection from './components/FreeNameSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModernNameSection from './components/ModernNameSection';
import PriceCompareSection from './components/PriceCompareSection';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal>
          <FreeNameSection />
        </ScrollReveal>
        <ScrollReveal>
          <PriceCompareSection />
        </ScrollReveal>
        <ScrollReveal>
          <DilemmaSection />
        </ScrollReveal>
        <ScrollReveal>
          <ModernNameSection />
        </ScrollReveal>
        <ScrollReveal>
          <DetailSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}
