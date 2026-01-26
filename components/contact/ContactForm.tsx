"use client";

import { Check } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Left Side - Image */}
        <div
          className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/pagebgImage.png')", // User uploaded this image in the request
          }}
        >
          {/* Fallback if image fails or for better text contrast if we had text overlay (not needed here based on design) */}
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Let’s Connect and Bring Your Dreams Closer
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We’re here to answer your questions, clear your doubts, and guide
            you towards your goals.
          </p>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all text-gray-800"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all text-gray-800"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all text-gray-800"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Message*"
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all text-gray-800 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 duration-200"
              >
                <div className="bg-white rounded-full p-0.5">
                  <Check className="w-3 h-3 text-[#0049AC]" strokeWidth={4} />
                </div>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
