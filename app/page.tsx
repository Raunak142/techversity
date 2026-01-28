import Hero from "@/components/home/Hero";
import OurPrograms from "@/components/home/OurPrograms";
import TrustPartnersSection from "@/components/home/TrustPartnersSection";
import Testimonials from "@/components/home/Testimonials";
import FinalCTASection from "@/components/home/FinalCTASection";

import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyTechversitySection from "@/components/home/WhyTechversitySection";
import UniversityPartners from "@/components/home/UniversityPartners";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Global Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "url('/images/pagebgImage.png')", // subtle pattern
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <Hero />
        <TrustPartnersSection />
        <OurPrograms />
        <HowItWorksSection />
        <WhyTechversitySection />
        <UniversityPartners />
        <FAQSection />
        <Testimonials />
        <FinalCTASection />
      </div>
    </main>
  );
}
