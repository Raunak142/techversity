import React from "react";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Global Degrees, Real Impact. <br />
              Delivered by-HNtrix
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                At HNtrix, we operate with a dual focus — delivering globally
                recognized doctorate and university-level programs in
                partnership with Kennedy University, Kennedy university of
                baptist , Central Global University , Global University Of
                Science & Technology , American Management University , Eu
                Business School , Cyprus Aydin University while also providing
                cutting-edge IT and business solutions that drive success across
                industries.
              </p>
              <p>
                By empowering individuals with prestigious academic credentials
                from Kennedy University , Kennedy university of baptist ,
                Central Global University , Global University Of Science &
                Technology , American Management University , Eu Business School
                , Cyprus Aydin University and equipping organizations with
                next-generation digital services, HNtrix stands at the forefront
                of transformative growth in both education and enterprise.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ChevronsRight className="w-6 h-6 text-black" />
                  Experienced Team
                </h3>
                <p className="text-gray-600 text-sm md:text-base pl-8">
                  Our experts bring years of domain knowledge.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <ChevronsRight className="w-6 h-6 text-black" />
                  Technology-Driven Approach
                </h3>
                <p className="text-gray-600 text-sm md:text-base pl-8">
                  We blend innovation with practicality for smarter outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-[800px] w-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder Image - replace with actual image asset */}
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Graduation cap on globe"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
