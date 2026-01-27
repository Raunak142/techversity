"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileCheck,
  Award,
  CreditCard,
  Clock,
} from "lucide-react";

const infoItems = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Speak one-on-one with an admissions expert.",
  },
  {
    icon: FileCheck,
    title: "Personalized Assessment",
    description: "Get honest feedback on program fit and eligibility.",
  },
  {
    icon: Award,
    title: "Program Recommendations",
    description: "Receive tailored university and program suggestions.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Clear breakdown of costs with no hidden fees.",
  },
  {
    icon: Clock,
    title: "Timeline Clarity",
    description:
      "Understand realistic timelines from application to graduation.",
  },
];

export default function PostApplicationInfoSection() {
  return (
    <section className="w-full py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What to Expect After Applying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-[#0049AC]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
