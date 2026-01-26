"use client";

import Image from "next/image";

export default function Nomination() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Nomination Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-6">
            Nominate / Apply Now
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name of Candidate
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="achievements"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Achievements / Impact Summary
              </label>
              <textarea
                id="achievements"
                rows={5}
                placeholder="Describe major contributions, publications, recognitions, etc."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-[#0d3b85] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md mt-2"
            >
              Submit Nomination
            </button>
          </form>
        </div>

        {/* Right Column: Contact & Support */}
        <div className="lg:col-span-1 pt-2">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Contact & Support
          </h2>
          <p className="text-gray-600 font-bold mb-6">
            HNtrix — AMU Facilitation
          </p>

          <div className="space-y-2 text-gray-600 mb-8">
            <p>
              <span className="font-medium text-gray-500">Email:</span>{" "}
              <a
                href="mailto:admissions@hntrix.com"
                className="text-blue-600 hover:underline"
              >
                admissions@hntrix.com
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">Phone (UK):</span> +44
              7452 024431
            </p>
          </div>

          <div className="flex items-start">
            {/* HNtrix Logo Placeholder from screenshot */}
            <div className="w-16 h-12 relative">
              {/* Replace with actual logo component or image */}
              <span className="font-black text-2xl italic tracking-tighter">
                <span className="text-black">H</span>
                <span className="text-[#0088cc]">N</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
