"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle, X } from "lucide-react";

const faqs = [
  {
    question: "Q1: What types of degree programs do you offer?",
    answer:
      "We offer a range of programs including Bachelor's degrees, Master's degrees, and Doctoral degrees across various fields, all with globally recognized university partners.",
  },
  {
    question: "Q2: Are your degree programs recognized internationally?",
    answer:
      "Yes, all our degree programs are accredited and recognized globally, ensuring that your qualification holds value wherever your career takes you.",
  },
  {
    question: "Q3: Can I pursue these degrees while working full-time?",
    answer:
      "Absolutely. Our programs are designed with flexibility in mind, tailored for working professionals who need to balance their studies with career commitments.",
  },
  {
    question: "Q4: What is the admission process for your degree programs?",
    answer:
      "The admission process is streamlined. You can apply online, submit your academic transcripts, and our counselors will guide you through the rest of the verification and enrollment steps.",
  },
  {
    question: "Q5: What types of degree programs do you offer?",
    answer:
      "We offer a range of programs including Bachelor's degrees, Master's degrees, and Doctoral degrees across various fields, all with globally recognized university partners.",
  },
  {
    question: "Q6: Are your degree programs recognized internationally?",
    answer:
      "Yes, all our degree programs are accredited and recognized globally, ensuring that your qualification holds value wherever your career takes you.",
  },
  {
    question: "Q7: Can I pursue these degrees while working full-time?",
    answer:
      "Absolutely. Our programs are designed with flexibility in mind, tailored for working professionals who need to balance their studies with career commitments.",
  },
  {
    question: "Q8: What is the admission process for your degree programs?",
    answer:
      "The admission process is streamlined. You can apply online, submit your academic transcripts, and our counselors will guide you through the rest of the verification and enrollment steps.",
  },
];

const FAQContact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Your Quick Guide to Answers
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className={`bg-white cursor-pointer transition-all duration-300 group ${
                      isOpen
                        ? "shadow-lg border-l-[6px] border-[#001F3F]" // Dark navy border
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="p-4 md:p-5 flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-0 w-full">
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

          {/* Contact Form Section */}
          <div className="flex flex-col gap-8 bg-transparent">
            {/* The form container implies a visual separation, but the design shows it just sitting there on the bg */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                We’re Just a Message Away
              </h2>
              <p className="text-gray-600 text-lg">
                Simply fill out the form below, and one of our team members will
                get back to you promptly.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full bg-white border border-gray-200 p-4 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#003B95] transition-colors text-base"
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full bg-white border border-gray-200 p-4 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#003B95] transition-colors text-base"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full bg-white border border-gray-200 p-4 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#003B95] transition-colors text-base"
                required
              />
              <textarea
                placeholder="Message*"
                rows={5}
                className="w-full bg-white border border-gray-200 p-4 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#003B95] transition-colors text-base resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="mt-4 w-full bg-[#003B95] text-white font-bold py-4 px-8 flex items-center justify-center gap-2 hover:bg-[#002a6b] transition-colors text-lg"
              >
                <CheckCircle className="w-5 h-5 fill-white text-[#003B95]" />{" "}
                {/* Visual trick using fill-white and text-blue to make a checkmark in circle */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;
