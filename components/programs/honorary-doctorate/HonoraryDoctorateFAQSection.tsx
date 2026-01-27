"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

const faqs = [
  {
    question: "Q1: What qualifications do I need for an honorary doctorate?",
    answer:
      "Typical candidates have 15+ years of professional experience, significant achievements, leadership roles, published work, or notable contributions to industry or society. Each university has specific criteria reviewed during the application process.",
  },
  {
    question: 'Q2: Can I use "Dr." as a title?',
    answer:
      "Recipients may use the title in many professional contexts, but should clarify the honorary nature when appropriate, especially in academic or medical settings.",
  },
  {
    question: "Q3: Will this help me get a teaching position at a university?",
    answer:
      "No. Honorary doctorates are not intended for academic employment. Faculty positions typically require earned research doctorates.",
  },
  {
    question: "Q4: How is this different from buying a degree?",
    answer:
      "Honorary doctorates are legitimate awards based on merit and achievement review, conferred by universities following formal assessment processes.",
  },
  {
    question: "Q5: Is an honorary doctorate recognized internationally?",
    answer:
      "Recognition varies by country and context. Honorary doctorates are generally respected in professional and business circles but differ from earned degrees in academic settings.",
  },
  {
    question: "Q6: How much does it cost?",
    answer:
      "Costs vary by university and program. Transparent pricing with no hidden fees is provided during consultation.",
  },
  {
    question: "Q7: What documents will I receive?",
    answer:
      "You will receive an official certificate, conferral letter, and typically a transcript with university seals and signatures.",
  },
  {
    question: "Q8: Can this degree be verified?",
    answer:
      "Yes. All honorary doctorates can be verified directly with the issuing university.",
  },
  {
    question: "Q9: How long does the process take?",
    answer:
      "The process typically takes 4–8 weeks, depending on university review and delivery timelines.",
  },
  {
    question: "Q10: What if my application is not approved?",
    answer:
      "We provide an honest assessment upfront. If not approved, alternative options or refunds are handled per our refund policy.",
  },
  {
    question: "Q11: Do I need to attend any ceremonies?",
    answer:
      "Attendance is usually not required. Some universities offer optional virtual or in-person ceremonies.",
  },
  {
    question: "Q12: Can I add this to my LinkedIn profile?",
    answer:
      "Yes. You may list it on professional profiles, clearly stating it is an honorary degree.",
  },
];

const HonoraryDoctorateFAQSection: React.FC = () => {
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
              Honorary Doctorate FAQs
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about the Honorary Doctorate
              program, eligibility, and application process.
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
                More Questions? Contact Our Team
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

export default HonoraryDoctorateFAQSection;
