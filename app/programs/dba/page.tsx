import {
  Hero,
  Overview,
  DegreeAwarded,
  WhyChoose,
  Faculty,
  DBAIntroSection,
  DBAAudienceSection,
  DBABenefitsSection,
  DBAProgramStructureSection,
  DBATimelineSection,
  DBADocumentsSection,
  DBAAdmissionProcessSection,
  DBAFAQSection,
  DBAInvestmentSection,
  DBAFinalCTASection,
} from "@/components/programs/dba";

export default function DBAPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <DBAIntroSection />
      <DBAAudienceSection />
      <DBABenefitsSection />
      <DBAProgramStructureSection />
      <DBATimelineSection />
      <DBADocumentsSection />
      <DBAAdmissionProcessSection />
      <DBAInvestmentSection />
      <DBAFAQSection />
      <DBAFinalCTASection />
      {/* <Overview />
      <DegreeAwarded />
      <WhyChoose />
      <Faculty /> */}
    </main>
  );
}
