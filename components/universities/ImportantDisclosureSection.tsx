"use client";

import { Info } from "lucide-react";

export default function ImportantDisclosureSection() {
  const disclosurePoints = [
    "Operates independently with its own governance and academic standards",
    "Maintains its own accreditation and institutional recognition",
    "Makes final admissions decisions based on their criteria",
    "Issues all degrees and credentials directly to students",
    "Handles academic supervision and program delivery",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6 md:p-10 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <Info className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Understanding Our University Partnerships
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Techversity.ai is an independent admissions advisory company. We
              are not affiliated with, owned by, or operated by any of our
              partner universities.
            </p>
          </div>
        </div>

        <div className="pl-0 md:pl-10">
          <ul className="space-y-3 mb-6">
            {disclosurePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm md:text-base text-gray-600 italic border-t border-gray-200 pt-4">
            Techversity.ai facilitates the admissions process, provides advisory
            services, and connects qualified applicants with appropriate
            programs. All academic decisions remain with the universities.
          </p>
        </div>
      </div>
    </section>
  );
}
