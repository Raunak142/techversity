import {
  Hero,
  ContactMethodsSection,
  ApplicationFormSection,
  PostApplicationInfoSection,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <ApplicationFormSection />
      <ContactMethodsSection />
      <PostApplicationInfoSection />
    </main>
  );
}
