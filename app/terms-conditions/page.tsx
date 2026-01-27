"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Last Updated: January 2025
            </p>
          </div>
          

          {/* Content Sections */}
          <div className="space-y-12 text-gray-700 leading-relaxed md:text-lg">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using Techversity.ai’s website and services, you
                agree to these Terms and Conditions. If you do not agree, please
                do not use our services.
              </p>
            </section>

            {/* Services Provided */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Services Provided
              </h2>
              <p className="mb-4">
                Techversity.ai is an admissions advisory and marketing company.
                We:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Provide information about higher education programs</li>
                <li>Facilitate applications to partner universities</li>
                <li>Offer guidance and advisory services</li>
                <li>Connect applicants with accredited universities</li>
              </ul>
              <p className="mb-4">We are not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A university or degree-granting institution</li>
                <li>Guarantors of admission or degree completion</li>
                <li>
                  Responsible for university academic policies or decisions
                </li>
              </ul>
            </section>

            {/* University Independence */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                University Independence
              </h2>
              <p className="mb-4">
                All partner universities operate independently. Techversity.ai
                does not control:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Admissions decisions</li>
                <li>Academic standards or requirements</li>
                <li>Degree conferral or program delivery</li>
                <li>Accreditation status</li>
                <li>University policies or procedures</li>
              </ul>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Application Process
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Applications submitted through Techversity.ai are forwarded to
                  selected universities
                </li>
                <li>Universities make final admissions decisions</li>
                <li>Admission is not guaranteed</li>
                <li>Processing timelines are estimates and may vary</li>
                <li>Universities may request additional documentation</li>
              </ul>
            </section>

            {/* Fees and Payments */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Fees and Payments
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Program fees vary by university and program</li>
                <li>All fees are disclosed before payment</li>
                <li>
                  Payments may be made directly to universities or via
                  Techversity.ai
                </li>
                <li>
                  Refunds are governed by university policies and our Refund
                  Policy
                </li>
                <li>Fees may be updated with notice</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                User Responsibilities
              </h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Meet application requirements and deadlines</li>
                <li>Respond to communications promptly</li>
                <li>Comply with university policies upon enrollment</li>
                <li>Use services lawfully and ethically</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p>
                All website content, branding, and materials are owned by or
                licensed to Techversity.ai. Unauthorized copying, reproduction,
                or distribution is prohibited.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="mb-4">
                Services are provided “as is” without warranties. We do not
                guarantee:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Admission to programs</li>
                <li>Career outcomes</li>
                <li>Error-free or uninterrupted services</li>
                <li>Complete accuracy of all information</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Techversity.ai is not
                liable for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Indirect or consequential damages</li>
                <li>University decisions or actions</li>
                <li>Career or opportunity losses</li>
                <li>Errors or omissions</li>
              </ul>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Indemnification
              </h2>
              <p>
                You agree to indemnify Techversity.ai from claims arising from
                misuse of services or violation of these terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Termination
              </h2>
              <p>
                We may suspend or terminate access to services for violations of
                these terms or other reasonable causes.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of England and Wales.
                Disputes will be resolved in courts located in London, UK.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p>
                We may update these Terms and Conditions at any time. Continued
                use constitutes acceptance of updated terms.
              </p>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Contact
              </h2>
              <p className="mb-4">For questions regarding these terms:</p>
              <p>
                <span className="font-bold text-gray-900">Email: </span>
                <a
                  href="mailto:legal@techversity.ai"
                  className="text-[#0049AC] hover:underline"
                >
                  legal@techversity.ai
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
