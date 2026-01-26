import { Hero, ContactInfo, ContactForm } from "@/components/contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
