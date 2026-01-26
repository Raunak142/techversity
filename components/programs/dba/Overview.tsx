"use client";

export default function Overview() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-center">
      {/* Header & Description */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Doctor of Business Administration (DBA)
        </h2>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Overview
        </h3>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-center">
          EU’s highly competitive DBA program is designed to be challenging,
          rigorous and stimulating and to increase managerial, leadership and
          academic competencies. The program develops students’ independent and
          critical thinking skills, which enables them to master a specific
          field within business. Students hone their research and analytical
          skills by completing an original, expert-level research project.
          Students may enroll throughout the academic year.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-5xl mx-auto mt-12">
        {/* Left Column Item 1 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Duration
          </h4>
          <p className="text-gray-600">One to six years</p>
        </div>

        {/* Right Column Item 1 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Language
          </h4>
          <p className="text-gray-600">English</p>
        </div>

        {/* Left Column Item 2 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Number of Credits
          </h4>
          <p className="text-gray-600">120 ECTS</p>
        </div>

        {/* Right Column Item 2 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Fees per term
          </h4>
          <p className="text-gray-600 mb-1">
            CHF 4,750 Advance tuition payment
          </p>
          <p className="text-gray-600">CHF 4,750 (Terms I-VIII)</p>
        </div>

        {/* Left Column Item 3 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Start dates
          </h4>
          <p className="text-gray-600">
            Students may enroll throughout the academic year.
          </p>
        </div>

        {/* Right Column Item 3 */}
        <div className="flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Location
          </h4>
          <p className="text-gray-600">
            Geneva /barcelona /munich / and online
          </p>
        </div>
      </div>
    </section>
  );
}
