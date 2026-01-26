"use client";

import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16 text-center">
      {/* Why Geneva Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Why Geneva?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-center">
          <p>
            Studying a DBA in Geneva allows students to benefit from the Swiss
            capital’s remarkable concentration of outstanding intergovernmental
            organizations, financial institutions and the headquarters of
            multinational companies. It is home to the highest number of
            international organizations in the world, including the United
            Nations, the World Trade Organization, the World Health Organization
            and the Red Cross. EU students are given an insider’s glimpse of the
            workings of these world-famous organizations and institutions during
            company visits and networking events.
          </p>
          <p>
            The diverse and international community in Geneva allows students to
            gain a global mindset and expand their cultural awareness during
            their time at EU. These soft skills are essential for any future
            business leader’s repertoire and are highly desirable traits in the
            international job market. Geneva’s combination of tranquility,
            diversity and business excellence makes this city a perfect location
            to gain a business education.
          </p>
        </div>
      </div>

      {/* Why Choose HNtrix Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Why choose eu business school through HNtrix ?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-center">
          <p>
            HNtrix is a global education and consultancy platform connecting
            students with multiple internationally recognized universities
            across the world. With 50+ specializations spanning business,
            technology, healthcare, education, tourism, diplomacy, and more,
            HNtrix offers diverse academic pathways designed to match every
            learner’s goal.
          </p>
          <p>
            Through our strong international collaborations, we ensure students
            receive globally accepted qualifications, real-world learning
            experiences, and career-focused education. From admissions to
            graduation, HNtrix provides complete guidance, mentorship, and
            support — helping you study smarter, grow faster, and succeed
            globally.
          </p>
          <p className="font-medium text-black">
            At HNtrix, your future begins with world-class education and
            limitless global opportunities.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop')",
            }} // Modern Office / Lobby
          />
        </div>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop')",
            }} // Modern Office / Glass
          />
        </div>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage:
                "url('/images/pagebgImage.png')",
            }} // Modern Reception
          />
        </div>
      </div>
    </section>
  );
}
