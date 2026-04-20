import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ClientLogos from '@/components/sections/ClientLogos';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import OfficesSection from '@/components/sections/OfficesSection';

import PageTransition from '@/components/effects/PageTransition';

const Index = () => {
  return (
    <>
      
      <PageTransition>
        <main className="min-h-screen bg-background">
          <Navbar />
          <HeroSection />
          <ClientLogos />
          <ServicesSection />
          <StatsSection />
          <AboutPreview />
          <ProcessSection />
          <PortfolioPreview />
          <TestimonialsSection />
          <AwardsSection />
          <FAQSection />
          <OfficesSection />
          <CTASection />
          <Footer />
        </main>
      </PageTransition>
    </>
  );
};

export default Index;
