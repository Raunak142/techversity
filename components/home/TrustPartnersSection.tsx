import React from "react";
import Image from "next/image";

const TrustPartnersSection = () => {
  return (
    <section className="py-28 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Heading */}
          <div className="relative">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800 tracking-tight ">
              Trusted by professionals across 12+ countries
              <span className="mx-3 text-gray-400 font-light">|</span>
              Partnered with 4 accredited universities
            </h2>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center w-full max-w-5xl justify-items-center">
            {/* University Logo 1 */}
            <div className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=300&q=80"
                alt="University Partner 1"
                fill
                className="object-contain rounded-md"
              />
            </div>

            {/* University Logo 2 */}
            <div className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=300&q=80"
                alt="University Partner 2"
                fill
                className="object-contain rounded-md"
              />
            </div>

            {/* University Logo 3 */}
            <div className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=300&q=80"
                alt="University Partner 3"
                fill
                className="object-contain rounded-md"
              />
            </div>

            {/* University Logo 4 */}
            <div className="relative w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-70 hover:opacity-100">
              <Image
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=300&q=80"
                alt="University Partner 4"
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPartnersSection;
