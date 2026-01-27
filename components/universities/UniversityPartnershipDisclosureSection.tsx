"use client";

import { motion } from "framer-motion";
import { Info, ShieldAlert } from "lucide-react";

const disclosurePoints = [
  "Each university operates independently with its own governance and academic standards",
  "Universities maintain their own accreditation and institutional recognition",
  "Final admissions decisions are made solely by the universities",
  "All degrees and credentials are issued directly by the universities",
  "Academic supervision and program delivery are handled by the universities",
];

export default function UniversityPartnershipDisclosureSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border-l-4 border-l-[#0049AC]"
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-full shrink-0">
              <Info className="w-6 h-6 text-[#0049AC]" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Understanding Our University Partnerships
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Techversity.ai is an independent admissions advisory company. We
                are not affiliated with, owned by, or operated by any of our
                partner universities.
              </p>
            </div>
          </div>

          {/* Disclosure Points */}
          <div className="my-8 pl-4 border-l border-gray-100 space-y-4">
            {disclosurePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-start gap-3"
              >
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="pt-6 border-t border-gray-100">
            <p className="text-gray-500 text-sm font-medium italic">
              Techversity.ai facilitates the admissions process, provides
              advisory services, and connects qualified applicants with
              appropriate programs. All academic decisions remain entirely with
              the partner universities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
