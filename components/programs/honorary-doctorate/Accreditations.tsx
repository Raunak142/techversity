"use client";

import Image from "next/image";

export default function Accreditations() {
  const accreditations = [
    { name: "Accreditat", logo: "/images/logos/accreditat.png" },
    { name: "QAHE", logo: "/images/logos/qahe.png" },
    { name: "ICHE", logo: "/images/logos/iche.png" },
    { name: "Higher Education Council", logo: "/images/logos/hec.png" },
    { name: "ASIC", logo: "/images/logos/asic.png" },
    { name: "IABP", logo: "/images/logos/iabp.png" },
    { name: "ECBE", logo: "/images/logos/ecbe.png" },
    { name: "IACBE", logo: "/images/logos/iacbe.png" },
    { name: "MACCA", logo: "/images/logos/macca.png" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-4">
          Global Accreditations & Recognitions
        </h2>
        <p className="text-gray-600 mb-8 max-w-4xl">
          Choosing this Honorary Doctorate Program means you’re not just earning
          a title — you’re elevating your personal brand, opening doors to elite
          networks, and reinforcing your credibility across borders. Here are
          some of the standout benefits:
        </p>

        <div className="space-y-4">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              {/* Logo Placeholder */}
              <div className="flex items-center gap-2">
                {/* Replace with actual Images when available */}
                <span className="font-bold text-gray-400 text-xl tracking-wider uppercase">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
