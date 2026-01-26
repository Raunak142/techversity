import {
  Hero,
  Overview,
  DegreeAwarded,
  WhyChoose,
  Faculty,
} from "@/components/programs/dba";

export default function DBAPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Overview />
      <DegreeAwarded />
      <WhyChoose />
      <Faculty />
    </main>
  );
}
