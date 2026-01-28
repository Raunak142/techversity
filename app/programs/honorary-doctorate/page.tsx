import {
  Hero,
  HonoraryDoctorateIntroSection,
  HonoraryDoctorateAudienceSection,
  HonoraryDoctorateBenefitsSection,
  HonoraryDoctorateTimelineSection,
  HonoraryDoctorateDocumentsSection,
  HonoraryDoctorateAdmissionProcessSection,
  HonoraryDoctorateDisclosureSection,
  HonoraryDoctorateUniversitiesSection,
  HonoraryDoctorateFAQSection,
  HonoraryDoctorateFinalCTASection,
} from "@/components/programs/honorary-doctorate";

export default function HonoraryDoctoratePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <HonoraryDoctorateIntroSection />
      <HonoraryDoctorateAudienceSection />
      <HonoraryDoctorateBenefitsSection />
      <HonoraryDoctorateTimelineSection />
      <HonoraryDoctorateDocumentsSection />
      <HonoraryDoctorateAdmissionProcessSection />
      <HonoraryDoctorateDisclosureSection />
      <HonoraryDoctorateUniversitiesSection />
      <HonoraryDoctorateFAQSection />
      <HonoraryDoctorateFinalCTASection />
    </main>
  );
}
