import React from "react";
import {
  BookOpen,
  HeartPulse,
  Plane,
  Cpu, // For IT
  Leaf,
  Building2, // For Finance/Banking (using Building/Landmark)
  ShieldCheck,
} from "lucide-react";

// Data
const sectors = [
  {
    title: "Education",
    description: "Transforming learning with future-ready academic solutions.",
    icon: BookOpen,
  },
  {
    title: "Healthcare",
    description: "Empowering care with smart, scalable technology.",
    icon: HeartPulse,
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Enhancing guest experiences with smart, digital-first solutions.",
    icon: Plane,
  },
  {
    title: "Information Technology",
    description: "Fueling innovation through cutting-edge IT solutions.",
    icon: Cpu,
  },
  {
    title: "Energy & Environment",
    description: "Enabling sustainability with efficient tech interventions.",
    icon: Leaf,
  },
  {
    title: "Finance & Banking",
    description: "Simplifying finance with secure digital transformation.",
    icon: Building2,
  },
  {
    title: "Insurance Industry",
    description:
      "Driving next-gen insurance evolution through automation, analytics, and digital intelligence.",
    icon: ShieldCheck,
  },
];

const WeServe = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-8 lg:px-32">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Driving Digital Transformation Across Diverse Sectors
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We don’t believe in one-size-fits-all — we believe in precision,
            performance, and progress.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group flex gap-6 items-start p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#1C1C1E] relative overflow-hidden flex items-center justify-center text-white">
                {/* Icon 1: Visible by default, slides out to right on hover */}
                <sector.icon
                  className="w-6 h-6 absolute transition-transform duration-300 ease-in-out group-hover:translate-x-14"
                  strokeWidth={1.5}
                />
                {/* Icon 2: Hidden to left, slides in to center on hover */}
                <sector.icon
                  className="w-6 h-6 absolute transition-transform duration-300 ease-in-out -translate-x-14 group-hover:translate-x-0"
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServe;
