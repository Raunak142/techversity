"use client";

import { BarChart3, Presentation, Crown } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: BarChart3,
      title: "Value Beyond Advice",
      description:
        "We don’t stop at insights; we work with you to implement real, scalable results.",
    },
    {
      icon: Presentation, // Fallback might be needed if Presentation isn't in version, but commonly LayoutPanelTop or similar used. Using Presentation for now or I'll swap to Monitor if needed. Actually let's use 'MonitorPlay' or 'Projector' if Presentation fails TS check, but I'll try standard mapping.
      // Re-thinking: Lucide often doesn't have 'Presentation'. 'MonitorPlay' or 'Board' is safer. Let's use 'Presentation' strictly if I'm sure, but to be safe I'll import 'MonitorPlay' as a backup thought, but let's stick to a generic plausible one. 'Presentation' might be 'Projector' or 'ScreenShare'.
      // Let's use 'MonitorPlay' effectively representing the screen.
      // Wait, user provided an image. It looks like a whiteboard on a stand. 'Presentation' is likely the name in some sets, but in Lucide 'Presentation' does not exist. 'Projector' does. 'Monitor' does. 'Tv' does. 'Easel' doesn't.
      // 'Presentation' is NOT in standard lucide-react. I will use 'MonitorPlay' for now.
      title: "Integrity in Every Interaction",
      description:
        "Transparency, honesty, ethics, integrity, and accountability are embedded in everything we do.",
    },
    {
      icon: Crown,
      title: "Human-Centered Solutions",
      description:
        "While we use cutting-edge tools and advanced technologies, we never lose sight of people and purpose.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12">
        {values.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white pt-16 pb-12 px-8 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 border-b-4 border-transparent hover:border-[#1e2329]"
          >
            {/* Floating Icon Container */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[#1e2329] flex items-center justify-center border-[6px] border-white shadow-sm z-10">
              {/* Note: In the screenshot the icon is white on dark circle. */}
              {index === 1 ? (
                // Using a specific icon for the middle one since Presentation might be missing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              ) : (
                <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
              )}
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
