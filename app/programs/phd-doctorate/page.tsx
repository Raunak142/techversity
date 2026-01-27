import {
  Hero,
  Overview,
  KeyFeatures,
  Process,
  ContactForm,
  PhDIntroSection,
  PhDAudienceSection,
  PhDBenefitsSection,
  PhDProgramStructureSection,
  PhDTimelineSection,
  PhDDocumentsSection,
  PhDAdmissionProcessSection,
  PhDResearchAreasSection,
  PhDSupervisionSupportSection,
  PhDFAQSection,
  PhDFinalCTASection,
} from "@/components/programs/phd-doctorate";

export default function PhDDoctoratePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <PhDIntroSection />
      <PhDAudienceSection />
      <PhDBenefitsSection />
      <PhDProgramStructureSection />
      <PhDResearchAreasSection />
      <PhDTimelineSection />
      <PhDDocumentsSection />
      <PhDAdmissionProcessSection />
      <PhDSupervisionSupportSection />
      <PhDFAQSection />
      <PhDFinalCTASection />
      {/* <Overview />
      <KeyFeatures />
      <Process />
      <ContactForm /> */}
    </main>
  );
}
