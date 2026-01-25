import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurPrograms from "@/components/home/OurPrograms";
import Features from "@/components/home/Features";
import HiringPartner from "@/components/home/HiringPartner";

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
        <Features />
      </div>
    </main>
  );
}
