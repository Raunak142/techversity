"use client";

import { Check } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/graduation-celebration.jpg')", // Ensure this path is correct or placeholder
            // Fallback for visual verification if image missing:
            backgroundColor: "#1a1a1a",
          }}
        >
          {/* Dark overlay to match the design's dark feel */}
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>

        {/* Form Container with unique shape/overlay look */}
        <div className="relative z-10 w-full max-w-lg bg-[#0f172a]/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700/50">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Message*"
                className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <div className="bg-white rounded-full p-0.5">
                <Check className="w-3 h-3 text-[#0049AC]" strokeWidth={4} />
              </div>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
