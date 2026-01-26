import {
  Hero,
  Values,
  Partnering,
  Empowering,
  CtaBanner,
  GlobalPartners,
} from "@/components/about-us";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Values />
      <Empowering />
      <Partnering />
      <GlobalPartners />
      <CtaBanner />
    </main>
  );
}
