"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

const faqs = [
  {
    question:
      "Q1: What's the difference between a PhD and a professional doctorate like a DBA?",
    answer:
      "A PhD emphasizes theoretical research and academic scholarship, preparing graduates primarily for academic careers. Professional doctorates (DBA, EdD) focus on applied research relevant to professional practice. Both are terminal degrees.",
  },
  {
    question: "Q2: Do I need a master's degree to apply?",
    answer:
      "Most PhD programs require a master's degree in a relevant field. Some universities offer direct PhD entry for exceptional bachelor's degree holders, but this is less common.",
  },
  {
    question: "Q3: Can I work while doing a PhD?",
    answer:
      "Part-time PhD programs allow you to work while studying, though progress may be slower. Full-time programs typically require 40-60 hours per week of study and research, making full-time employment challenging.",
  },
  {
    question: "Q4: How do I find a supervisor?",
    answer:
      "Review faculty profiles at prospective universities to identify researchers whose work aligns with your interests. Techversity.ai can help facilitate initial supervisor connections.",
  },
  {
    question: "Q5: What is a dissertation?",
    answer:
      "A dissertation (or thesis) is an original research project that makes a new contribution to knowledge in your field. It's typically 60,000-100,000 words and represents 3-4 years of research.",
  },
  {
    question: "Q6: Do I need prior publications to apply?",
    answer:
      "Prior publications strengthen your application but aren't always required. Demonstrating research potential through a strong proposal and writing sample is most important.",
  },
  {
    question: "Q7: What if I can't complete my PhD?",
    answer:
      "Many universities offer exit degrees (e.g., MPhil) if you complete coursework and partial research but don't finish the full dissertation. Circumstances vary by institution.",
  },
  {
    question: "Q8: Can I change my research topic?",
    answer:
      "Minor refinements are common, but major topic changes typically require approval from your supervisor and committee. It's important to choose a sustainable research focus.",
  },
  {
    question: "Q9: Will I have to teach?",
    answer:
      "Teaching requirements vary. Some programs require PhD students to teach undergraduate courses as part of training; others don't. Distance PhD programs typically don't include teaching obligations.",
  },
  {
    question: "Q10: What's the job market like for PhD graduates?",
    answer:
      "Academic positions are competitive. However, PhDs also pursue careers in research institutions, government, consulting, think tanks, international organizations, and specialized industry roles.",
  },
  {
    question: "Q11: Is a PhD recognized internationally?",
    answer:
      "Yes. A PhD from an accredited university is recognized globally as the terminal academic degree in most fields.",
  },
  {
    question: "Q12: What's the failure/completion rate?",
    answer:
      "Completion rates vary by field and university. Strong supervision, clear research plans, and adequate support significantly improve completion likelihood.",
  },
];

const PhDFAQSection: React.FC = () => {
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
              PhD Program FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about the Doctor of Philosophy
              program, eligibility, and structure.
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
                Have More PhD Questions?
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhDFAQSection;
