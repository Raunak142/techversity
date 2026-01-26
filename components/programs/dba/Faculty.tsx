"use client";

import { Check } from "lucide-react";

export default function Faculty() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12 text-center">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Faculty</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-center">
          <p>
            EU’s faculty is composed of highly qualified academics,
            entrepreneurs, consultants and business leaders.
          </p>
          <p>
            All courses are taught by lecturers with a wealth of practical
            experience in their fields. Our teaching staff create a personalized
            and interactive learning environment that promotes and fosters the
            skills and knowledge required for a successful career in business.
            The caliber of the faculty and a culture that values and rewards an
            entrepreneurial spirit are what make EU Business School stand out.
          </p>
        </div>
      </div>

      {/* Video Embed */}
      <div className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" // Placeholder ID, replace if actual ID known from screenshot implies "The EU Experience"
          title="EU Business School: The EU Experience"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
        {/* Note: I'm using a placeholder video ID. In a real scenario, I'd extract it if visible or ask. The screenshot shows "EU Business School: The EU Experience". */}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-left">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all font-light"
            />
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Message*"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400 transition-all resize-none font-light"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0049AC] hover:bg-[#003B95] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            {/* Icon optional, matching style of previous forms */}
            <div className="bg-white rounded-full p-0.5">
              <Check className="w-3 h-3 text-[#0049AC]" strokeWidth={4} />
            </div>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
