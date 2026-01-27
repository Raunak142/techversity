"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  FileSearch,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const guidancePoints = [
  {
    icon: Globe,
    text: "Review each university’s official accreditation information on their website",
  },
  {
    icon: ShieldCheck,
    text: "Understand recognition standards in your home country or jurisdiction",
  },
  {
    icon: FileSearch,
    text: "Verify credentials with relevant professional or regulatory bodies when required",
  },
  {
    icon: MessageSquare,
    text: "Discuss recognition requirements with our admissions team during consultation",
  },
];

export default function AccreditationNoticeSection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accreditation & Recognition
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
              Accreditation and recognition standards vary by country, region,
              and institution type. We encourage prospective students to take an
              informed approach when evaluating academic credentials.
            </p>
          </div>

          {/* Guidance Points */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {guidancePoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100"
                >
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#0049AC]" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Support Statement & CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Our team can provide guidance on accreditation questions and help
              you understand how credentials from our partner universities are
              recognized in different professional and geographic contexts.
            </p>

            <Link href="/contact" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0049AC] font-bold rounded-lg border border-[#0049AC] hover:bg-blue-50 transition-all shadow-sm"
              >
                Have Questions About Accreditation? Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
