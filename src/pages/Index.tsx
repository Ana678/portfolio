import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlassVase from "@/components/decorative/GlassVase";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        <Header />
        <main className="pl-16 md:pl-24">
          <HeroSection />
          <AboutSection />
          <BentoGrid />
          <PortfolioSection />
          <ContactSection />
          <GlassVase />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
