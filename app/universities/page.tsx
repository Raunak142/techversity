import {
  UniversitiesHero,
  UniversityCardsSection,
  UniversityComparisonSection,
} from "@/components/universities";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <UniversitiesHero />
      <UniversityCardsSection />
      <UniversityComparisonSection />
    </main>
  );
}
