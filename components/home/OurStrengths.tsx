import React from "react";
import AnimatedCircularProgress from "../ui/AnimatedCircularProgress";

const OurStrengths = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Your Career, Your Growth  <br />
              Powered by Global Learning
            </h2>

            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              <p>
                At HNtrix, we understand that every professional’s journey is
                unique. That’s why our globally recognized programs are built to
                fit into your life — flexible, supportive, and practical. With
                expert mentors and real-world learning pathways, we help you
                grow with confidence and clarity.
              </p>
              <p>
                And because HNtrix works with international partners and
                learners across multiple countries, you don’t just earn a
                qualification — you become part of a global community. Whether
                you want to upgrade your skills, shift into a new field, or gain
                a respected international credential, we’re here to walk with
                you at every step.
              </p>
              <p>
                Your goals matter — and we’re committed to helping you reach
                them, wherever you are in the world.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="flex flex-wrap gap-12 mt-4 justify-center md:justify-start">
              <AnimatedCircularProgress
                percentage={80}
                label="Global Presence"
                description="With operational capacity in over 30 countries, we work across time zones, cultures, and sectors."
                size={140}
                strokeWidth={10}
              />
              <AnimatedCircularProgress
                percentage={75}
                label="Placements"
                description="At HNtrix, we believe education is complete only when it leads to meaningful employment."
                size={140}
                strokeWidth={10}
              />
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="relative flex flex-col gap-6">
            {/* Main Image (Graduation) */}
            <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Graduation success"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary Image (Map/Book) - Positioned below */}
            <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-xl lg:mt-[-50px] lg:ml-12 border-4 border-white z-20">
              <img
                src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
