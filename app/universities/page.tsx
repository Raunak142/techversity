import {
  UniversitiesHero,
  UniversityProfilesSection,
  UniversityComparisonSection,
  UniversityPartnershipDisclosureSection,
  AccreditationNoticeSection,
  UniversityFinalCTASection,
} from "@/components/universities";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <UniversitiesHero />
      <UniversityProfilesSection />
      <UniversityComparisonSection />

      <UniversityPartnershipDisclosureSection />
      <AccreditationNoticeSection />
      <UniversityFinalCTASection />
    </main>
  );
}
