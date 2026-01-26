"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function UniversityComparisonSection() {
  const factors = [
    "Geographic location and regional recognition",
    "Program delivery format (online, hybrid, in-person)",
    "Specific research areas or specializations",
    "Timeline and scheduling flexibility",
    "Faculty expertise alignment",
    "Accreditation and recognition standards",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Not Sure Which University to Choose?
        </h2>

        {/* Body Text */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
          Each university offers unique strengths, geographic positioning, and
          program emphases. During your free consultation, our admissions
          experts will discuss your background, goals, location preferences, and
          research interests to recommend the best university fit.
        </p>

        {/* Factors List */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-left md:text-center">
            Factors to Consider:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left">
            {factors.map((factor, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0049AC] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Get Personalized University Recommendations
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
