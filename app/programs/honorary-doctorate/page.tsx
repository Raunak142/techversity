import {
  Hero,
  SubHero,
  About,
  Accreditations,
  ProgramDetails,
  Nomination,
} from "@/components/programs/honorary-doctorate";

export default function HonoraryDoctoratePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <SubHero />
      <About />
      <ProgramDetails />
      <Accreditations />
      <Nomination />
    </main>
  );
}
