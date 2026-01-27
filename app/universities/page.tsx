import {
  UniversitiesHero,
  UniversityCardsSection,
  UniversityComparisonSection,
  ImportantDisclosureSection,
  AccreditationNoticeSection,
  FinalCTASection,
} from "@/components/universities";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <UniversitiesHero />
      <UniversityCardsSection />
      <UniversityComparisonSection />
      <AccreditationNoticeSection />
      <ImportantDisclosureSection />
      <FinalCTASection />
    </main>
  );
}
