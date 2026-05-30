import AISolutionSection from './components/AISolutionSection';
import CTASection from './components/CTASection';
import DifferentiationSection from './components/DifferentiationSection';
import EmpathySection from './components/EmpathySection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ParentalSection from './components/ParentalSection';
import ResultPreviewSection from './components/ResultPreviewSection';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <EmpathySection />
        </ScrollReveal>
        <ScrollReveal>
          <ParentalSection />
        </ScrollReveal>
        <ScrollReveal>
          <AISolutionSection />
        </ScrollReveal>
        <ScrollReveal>
          <DifferentiationSection />
        </ScrollReveal>
        <ScrollReveal>
          <ResultPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
