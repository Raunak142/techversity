"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Q1: What's the difference between a DBA and a PhD in Business?",
    answer:
      "A DBA is designed for experienced practitioners and focuses on applied research solving real business problems. A PhD typically targets aspiring academics and emphasizes theoretical research. Both are terminal degrees with equivalent academic standing.",
  },
  {
    question: "Q2: Do I need a business background?",
    answer:
      "Most DBA programs require a master's degree (preferably MBA or related business field) and substantial professional business experience. Some programs may accept candidates from related disciplines.",
  },
  {
    question: "Q3: Can I work full-time while completing a DBA?",
    answer:
      "Yes. DBA programs are designed for working executives with flexible schedules, online coursework, and dissertation research that can be conducted alongside professional responsibilities.",
  },
  {
    question: "Q4: Will I need to relocate or attend classes in person?",
    answer:
      "Most programs are online or hybrid, requiring minimal or no physical attendance. Some universities offer optional residencies or workshops. Specific requirements vary by institution.",
  },
  {
    question: "Q5: What are typical DBA research topics?",
    answer:
      "DBA research covers areas like leadership, strategy, entrepreneurship, innovation, organizational behavior, marketing, finance, operations, digital transformation, and industry-specific challenges.",
  },
  {
    question: "Q6: Do I need prior research experience?",
    answer:
      "No. DBA programs include research methodology training. However, intellectual curiosity, analytical thinking, and strong writing skills are essential.",
  },
  {
    question: "Q7: Can I teach at universities with a DBA?",
    answer:
      "Yes. A DBA qualifies you for adjunct or full-time faculty positions at business schools, particularly for practice-oriented courses. Requirements vary by institution.",
  },
  {
    question: "Q8: What's the workload like?",
    answer:
      "Expect to dedicate 15-25 hours per week to reading, coursework, research, and writing. The intensity varies throughout different program phases.",
  },
  {
    question: "Q9: Can I choose my dissertation topic?",
    answer:
      "Yes. You'll work with faculty advisors to identify and refine a research topic aligned with your interests and professional experience.",
  },
  {
    question: "Q10: What happens if I can't complete on time?",
    answer:
      "Most programs offer extensions or flexible completion timelines. Discuss your circumstances with the university and your advisor.",
  },
  {
    question: "Q11: Is the DBA recognized internationally?",
    answer:
      "Yes. A DBA from an accredited university is recognized globally as a terminal business degree equivalent to a PhD.",
  },
  {
    question: "Q12: What career doors does a DBA open?",
    answer:
      "A DBA enhances opportunities for C-suite advancement, board positions, senior consulting roles, university teaching, research publication, and thought leadership platforms.",
  },
];

const DBAFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleView = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    } else {
      setShowAll(true);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="faq"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
              DBA Program FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about the Doctor of Business
              Administration program, eligibility, and structure.
            </p>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-3">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`bg-white cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                    isOpen
                      ? "shadow-lg border-transparent"
                      : "border-gray-200 hover:border-gray-300"
                  } border`}
                >
                  {/* Left Border Accent (Sliding in from outside) */}
                  <div
                    className={`absolute top-0 left-0 bottom-0 w-1.5 bg-[#001F3F] transition-transform duration-300 ease-out ${
                      isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                  />

                  <div className="p-4 md:p-5 flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-0 w-full pl-2">
                      <h3
                        className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#001F3F]" : "text-black group-hover:text-[#003B95]"}`}
                      >
                        {faq.question}
                      </h3>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-gray-600 text-sm leading-relaxed pt-2">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 mt-1">
                      <div
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                      >
                        {isOpen ? (
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#003B95] transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div
            ref={buttonRef}
            className="flex flex-col items-center gap-6 pt-4"
          >
            <button
              onClick={handleToggleView}
              className="px-8 py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 hover:text-black transition-all shadow-sm flex items-center gap-2"
            >
              {showAll ? "View Less" : "View More FAQs"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Footer CTA - Only visible when showing all */}
            {showAll && (
              <Link
                href="/contact"
                className="text-[#0049AC] hover:text-[#003B95] font-semibold flex items-center gap-2 group transition-colors animate-in fade-in duration-300"
              >
                More Questions About the DBA?
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DBAFAQSection;
