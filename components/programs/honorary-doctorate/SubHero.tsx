"use client";

import Image from "next/image";

export default function SubHero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/pagebgImage.png')", // Ensure this path is correct or placeholder
            // Fallback for visual verification if image missing:
            backgroundColor: "#1a1a1a",
          }}
        >
          {/* Overlay for better text contrast if needed on the main bg */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Blur Card */}
        <div className="relative z-10 w-full max-w-4xl mx-4 p-8 md:p-12 rounded-2xl bg-[#0a1635]/80 backdrop-blur-md text-center shadow-2xl border border-white/10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Honorary Doctorate Program — Fast Track Mode
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            AMU honors exceptional individuals who have made significant
            contributions in leadership, innovation, education, philanthropy,
            and society. Through HNtrix facilitation, the Fast Track process
            ensures recognition within a shorter timeframe for qualified
            candidates.
          </p>

          {/* Logos */}
          <div className="flex justify-center items-center gap-6">
            <div className="bg-white rounded-lg p-2 w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
              {/* AMU Logo Placeholder */}
              <span className="text-black font-bold text-xs">AMU</span>
            </div>
            <div className="bg-white rounded-lg p-2 w-10 h-10 md:w-20 md:h-20 flex items-center justify-center">
              {/* HNtrix Logo Placeholder */}
              <span className="text-black font-bold text-xs">HNtrix</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
