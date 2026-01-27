import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import OurPrograms from "@/components/home/OurPrograms";
import TrustPartnersSection from "@/components/home/TrustPartnersSection";
import WeServe from "@/components/home/WeServe";
import OurStrengths from "@/components/home/OurStrengths";
import Testimonials from "@/components/home/Testimonials";
import StudyAbroad from "@/components/home/StudyAbroad";
import StudentSupportSection from "@/components/home/StudentSupportSection";
import CTASection from "@/components/home/CTASection";

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
          backgroundRepeat: "repeat",
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
        <About />
        {/* <WeServe /> */}
        <OurStrengths />
        <Testimonials />
        <StudyAbroad />
        <StudentSupportSection />

        <CTASection />
      </div>
    </main>
  );
}
