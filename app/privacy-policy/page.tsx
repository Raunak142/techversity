"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16"
        >
          {/* Page Title */}
          <div className="border-b border-gray-100 pb-8 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-gray-700 leading-relaxed md:text-lg">
            {/* Introduction */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p>
                Techversity.ai ("we," "our," or "us") respects your privacy and
                is committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, share, and protect
                information when you use our website, apply for programs, or
                interact with our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Name, email address, phone number, WhatsApp number</li>
                  <li>Educational background and professional experience</li>
                  <li>Country of residence</li>
                  <li>Program interests and preferences</li>
                  <li>
                    Payment information (processed securely via third-party
                    processors)
                  </li>
                  <li>
                    Information provided through applications, forms, or
                    communications
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Process applications and facilitate university admissions
                </li>
                <li>Communicate about programs, services, and updates</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Sharing Your Information
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Partner universities for admissions processing</li>
                <li>Payment processors for secure transactions</li>
                <li>Service providers (email, CRM, analytics)</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-4 font-medium text-gray-900">
                We <strong>do not sell</strong> your personal information.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your
                information. However, no online transmission is completely
                secure, and absolute security cannot be guaranteed.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-6">
                To exercise your rights, contact:{" "}
                <a
                  href="mailto:privacy@techversity.ai"
                  className="text-[#0049AC] font-bold hover:underline"
                >
                  privacy@techversity.ai
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Cookies
              </h2>
              <p>
                We use cookies to enhance user experience, analyze traffic, and
                personalize content. You can manage cookie preferences via your
                browser settings.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                International Transfers
              </h2>
              <p>
                Your data may be processed outside your country of residence.
                Appropriate safeguards are applied where required.
              </p>
            </section>

            {/* Children’s Privacy */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Children’s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under 18. We do
                not knowingly collect data from children.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy periodically. Updates will be
                reflected with a revised “Last Updated” date.
              </p>
            </section>

            {/* Contact Us */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="mb-4">For privacy-related questions:</p>
              <div className="space-y-2">
                <p>
                  <span className="font-bold text-gray-900">Email: </span>
                  <a
                    href="mailto:privacy@techversity.ai"
                    className="text-[#0049AC] hover:underline"
                  >
                    privacy@techversity.ai
                  </a>
                </p>
                <p>
                  <span className="font-bold text-gray-900">Address: </span>
                  <span>
                    Techversity Limited, 14 Harrow Place, London, England, E1
                    7DB
                  </span>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
