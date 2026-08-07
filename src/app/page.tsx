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
        </ScrollReveal>
        {/* Footer는 별도 스냅 지점. ScrollReveal로 감싸면 justify-center가
            내용 위쪽을 래퍼 밖으로 밀어내 헤더에 가려진다. */}
        <Footer />
      </main>
    </div>
  );
}
