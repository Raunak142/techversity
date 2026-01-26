import {
  Hero,
  Overview,
  KeyFeatures,
  Process,
  ContactForm,
} from "@/components/programs/phd-doctorate";

export default function PhDDoctoratePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Overview />
      <KeyFeatures />
      <Process />
      <ContactForm />
    </main>
  );
}
