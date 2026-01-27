"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
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
              Refund Policy
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-gray-700 leading-relaxed md:text-lg">
            {/* Overview */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p>
                This Refund Policy outlines the conditions under which refunds
                may be issued for services provided by Techversity.ai. Please
                review this policy carefully before making any payments.
              </p>
            </section>

            {/* Techversity.ai Service Fees */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Techversity.ai Service Fees
              </h2>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Advisory and Application Processing Fees
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Fees paid to Techversity.ai for advisory services are
                  non-refundable once application processing begins
                </li>
                <li>
                  Refunds may be issued if services were not delivered as
                  described
                </li>
                <li>
                  Refund requests must be submitted in writing to{" "}
                  <a
                    href="mailto:refunds@techversity.ai"
                    className="text-[#0049AC] hover:underline"
                  >
                    refunds@techversity.ai
                  </a>
                </li>
              </ul>
            </section>

            {/* University Program Fees */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                University Program Fees
              </h2>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Fees Paid to Universities
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Tuition and program fees are governed by each university’s
                  refund policy
                </li>
                <li>Universities operate independently</li>
                <li>
                  Techversity.ai does not control university refund decisions
                </li>
                <li>
                  We assist applicants in communicating with universities when
                  required
                </li>
              </ul>
            </section>

            {/* Refund Eligibility Scenarios */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Refund Eligibility Scenarios
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Full Refund
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payment made in error</li>
                  <li>Services not delivered by Techversity.ai</li>
                  <li>
                    Application not submitted to the university (if applicable)
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Partial Refund
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Application withdrawn before university submission
                    (processing fees may apply)
                  </li>
                  <li>
                    Admission denied due to a Techversity.ai error
                    (case-by-case)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  No Refund
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Admission denied based on eligibility or qualifications
                  </li>
                  <li>Failure to provide required documents</li>
                  <li>Withdrawal after university submission</li>
                  <li>Violation of terms or provision of false information</li>
                  <li>Services fully delivered</li>
                </ul>
              </div>
            </section>

            {/* Refund Request Process */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Refund Request Process
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Submit a refund request via email to{" "}
                  <a
                    href="mailto:refunds@techversity.ai"
                    className="text-[#0049AC] hover:underline"
                  >
                    refunds@techversity.ai
                  </a>
                </li>
                <li>
                  Include: full name, application number, reason for request,
                  and supporting documents
                </li>
                <li>
                  Requests are reviewed within{" "}
                  <span className="font-semibold">5–10 business days</span>
                </li>
                <li>Decision communicated via email</li>
                <li>
                  Approved refunds processed within{" "}
                  <span className="font-semibold">14–30 business days</span>
                </li>
              </ol>
            </section>

            {/* Processing Timeframes */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Processing Timeframes
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Review: 5–10 business days</li>
                <li>Refund processing (if approved): 14–30 business days</li>
                <li>Refunds issued to the original payment method</li>
                <li>Bank processing times may vary</li>
              </ul>
            </section>

            {/* Non-Refundable Items */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Non-Refundable Items
              </h2>
              <p className="mb-4">The following are non-refundable:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advisory consultation fees (once services are rendered)</li>
                <li>
                  Document review and application preparation services (once
                  completed)
                </li>
                <li>
                  Third-party services (translation, courier, verification)
                </li>
                <li>Fees explicitly marked as non-refundable</li>
              </ul>
            </section>

            {/* University-Specific Refunds */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                University-Specific Refunds
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Program fees paid directly to universities must follow
                  university refund policies
                </li>
                <li>Applicants should contact universities directly</li>
                <li>
                  Techversity.ai may facilitate communication but cannot approve
                  refunds
                </li>
                <li>Review university refund terms before enrollment</li>
              </ul>
            </section>

            {/* Payment Disputes */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Payment Disputes
              </h2>
              <p className="mb-4">If you believe a charge is incorrect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Contact{" "}
                  <a
                    href="mailto:billing@techversity.ai"
                    className="text-[#0049AC] hover:underline"
                  >
                    billing@techversity.ai
                  </a>{" "}
                  immediately
                </li>
                <li>Provide transaction details and dispute reason</li>
                <li>We will work to resolve disputes fairly</li>
                <li>Chargebacks may impact future service eligibility</li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Refund Policy at any time. Changes will be
                reflected on this page with an updated date.
              </p>
            </section>

            {/* Contact for Refund Inquiries */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Contact for Refund Inquiries
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-bold text-gray-900">Email: </span>
                  <a
                    href="mailto:refunds@techversity.ai"
                    className="text-[#0049AC] hover:underline"
                  >
                    refunds@techversity.ai
                  </a>
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    Response Time:{" "}
                  </span>
                  <span>Within 48 hours</span>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
