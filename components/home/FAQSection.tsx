"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const faqs = [
  {
    question: "Q1: What exactly does Techversity.ai do?",
    answer:
      "Techversity.ai is an admissions advisory and marketing company. We connect qualified professionals with accredited university programs including honorary doctorates, DBAs, and PhD programs. We handle the application process, provide expert guidance, and support you from inquiry to enrollment.",
  },
  {
    question: "Q2: Are the universities accredited?",
    answer:
      "Our partner universities operate under their respective jurisdictions and maintain institutional recognition. We recommend reviewing each university's specific accreditation status on their official websites. Our admissions team can also discuss recognition standards during your consultation.",
  },
  {
    question:
      "Q3: What's the difference between an Honorary Doctorate and a traditional PhD?",
    answer:
      "An Honorary Doctorate recognizes significant professional achievements and contributions to a field. It is an award-based credential, not an earned academic degree through research and coursework. A traditional PhD or DBA requires original research, coursework, and dissertation defense. Both have different purposes and recognition contexts.",
  },
  {
    question: "Q4: Who is eligible for an Honorary Doctorate?",
    answer:
      "Honorary Doctorates are typically awarded to established professionals with significant achievements, leadership roles, published work, or substantial contributions to their industry. Each university has specific criteria. Our team will assess your eligibility during the initial consultation.",
  },
  {
    question: "Q5: How long does the application process take?",
    answer:
      "Timelines vary by program type. Honorary Doctorates typically process in 4-8 weeks. DBA and PhD programs may take 2-4 weeks for admissions processing, with programs lasting 18-48 months. We'll provide specific timelines based on your chosen program.",
  },
  {
    question: "Q6: How does payment work?",
    answer:
      "Payment options vary by university and program. You may pay directly to the university via bank transfer, Stripe, or PayPal, or through Techversity.ai's secure payment system. Full payment details and options are provided after your application is reviewed and accepted.",
  },
  {
    question: "Q7: What documents do I need to apply?",
    answer:
      "Typical requirements include an updated CV/resume, copies of existing degrees or certifications, professional references, a personal statement or motivation letter, and valid identification. Specific requirements vary by program and university.",
  },
  {
    question: "Q8: Can I speak to someone before applying?",
    answer:
      "Absolutely. We encourage all prospective students to schedule a free consultation with our admissions team. You can book a call, reach out via WhatsApp, or email us with your questions.",
  },
  {
    question: "Q9: Do you offer payment plans?",
    answer:
      "Payment options depend on the university and program selected. Some programs offer installment plans. Discuss your specific needs with our admissions team during your consultation.",
  },
  {
    question: "Q10: I'm based outside the US/UK. Can I still apply?",
    answer:
      "Yes. While our initial focus is the US and UK markets, we accept applications from qualified professionals worldwide. Our university partners offer online and flexible programs accessible globally.",
  },
  {
    question: "Q11: Is Techversity.ai a university?",
    answer:
      "No. Techversity.ai is an admissions advisory company. We partner with accredited universities to facilitate enrollments. Your degree or credential is issued by the university, not Techversity.ai.",
  },
  {
    question: "Q12: How do I know if a program is right for me?",
    answer:
      "Our admissions experts will discuss your professional background, career goals, timeline, and budget during your consultation. We'll provide honest recommendations about which program aligns best with your situation.",
  },
  {
    question: "Q13: What happens after I apply?",
    answer:
      "After submitting your application through Techversity.ai, we review it for completeness, submit it to the appropriate university, and keep you updated throughout the process. You'll receive regular communication and next steps via email and WhatsApp.",
  },
  {
    question: "Q14: Can I verify my degree after completion?",
    answer:
      "Yes. All degrees and credentials issued by our partner universities include official documentation and can be verified directly with the issuing institution.",
  },
  {
    question: "Q15: What if I have more questions?",
    answer:
      "Contact our team anytime via WhatsApp, email, or by booking a call. We're here to help you make informed decisions about your educational journey.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
              Your Quick Guide to Answers
            </h2>
            <p className="text-gray-600 text-lg">
              Frequently asked questions about our programs and admissions.
            </p>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
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
                      {/* Added padding-left to account for the border strip when open, or just to keep text aligned */}
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
