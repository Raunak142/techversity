import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurPrograms from "@/components/home/OurPrograms";
import HiringPartner from "@/components/home/HiringPartner";
import WeServe from "@/components/home/WeServe";
import OurStrengths from "@/components/home/OurStrengths";
import Testimonials from "@/components/home/Testimonials";
import StudyAbroad from "@/components/home/StudyAbroad";
import StudentSupportSection from "@/components/home/StudentSupportSection";
import FAQContact from "@/components/home/FAQContact";
import CTASection from "@/components/home/CTASection";

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
        <About />
        <WhyChooseUs />
        <OurPrograms />
        <HiringPartner />
        <WeServe />
        <OurStrengths />
        <Testimonials />
        <FAQContact />
        <StudyAbroad />
        <StudentSupportSection />
        <CTASection />
      </div>
    </main>
  );
}
