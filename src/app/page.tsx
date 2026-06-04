import ABHeroParental from './components/ABHeroParental';
import AISolutionSection from './components/AISolutionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import ResultPreviewSection from './components/ResultPreviewSection';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <Header />
      <main>
        <ABHeroParental />
        <ScrollReveal>
          <AISolutionSection />
        </ScrollReveal>
        <ScrollReveal>
          <ResultPreviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
          <Footer />
        </ScrollReveal>
      </main>
    </div>
  );
}
