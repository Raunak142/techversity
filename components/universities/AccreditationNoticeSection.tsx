"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AccreditationNoticeSection() {
  const guidancePoints = [
    "Review each university’s official accreditation information on their websites",
    "Understand recognition standards in their home country or jurisdiction",
    "Verify credentials with relevant professional bodies if required for specific career purposes",
    "Discuss recognition requirements with our admissions team during consultation",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-[#0049AC]" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Accreditation & Recognition
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-lg">
          Accreditation and recognition standards vary by country, region, and
          institution type. We encourage prospective students to:
        </p>

        <div className="max-w-2xl mx-auto text-left bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <ul className="space-y-4">
            {guidancePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0049AC] flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Our team can provide guidance on accreditation questions and help you
          understand how credentials from our partner universities are
          recognized in different contexts.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0049AC] hover:bg-[#003B95] text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
        >
          Have Questions About Accreditation? Contact Us
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
