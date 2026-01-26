"use client";

export default function ProgramDetails() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-4">
          Honorary Doctorate Program Overview
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The AMU Honorary Doctorate is one of the highest recognitions accorded
          by the university to individuals who have advanced human knowledge,
          innovation, or societal welfare. This award is symbolic of distinction
          rather than requiring traditional academic coursework or research.
        </p>
        <p className="text-gray-700 font-medium mb-4">
          The program emphasizes:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600">
          <li>
            Recognition of lifetime achievements across leadership, innovation,
            science, arts, education, and public service
          </li>
          <li>
            Global acknowledgment, supported by AMU’s accreditation affiliations
          </li>
          <li>
            Honorary titles such as Doctor of Leadership, Doctor of Management,
            or Doctor of Excellence
          </li>
          <li>
            Fast-track assessment and conferment for high-caliber candidates
          </li>
        </ul>
      </div>

      {/* Process Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-6">
          Process to Obtain an Honorary Doctorate
        </h2>
        <ul className="space-y-4 text-gray-600">
          <li>
            <span className="font-bold text-gray-800">Documentation:</span>{" "}
            Academic Certificates, Govt ID Proof, Passport Size Photo, Updated
            CV
          </li>
          <li>
            <span className="font-bold text-gray-800">
              Application Form and Nomination Form:
            </span>{" "}
            Fill in your personal details
          </li>
          <li>
            <span className="font-bold text-gray-800">
              Statement of Purpose:
            </span>{" "}
            1000-word summary of your journey
          </li>
          <li>
            <span className="font-bold text-gray-800">Evaluation:</span> Your
            profile will be sent to the evaluation team, and they will take
            approximately 7 working days to complete the process. Once the
            evaluation report is issued, you will officially and legally be able
            to start using the “Dr.” prefix with your name.
          </li>
        </ul>
      </div>

      {/* Eligibility Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003B95] mb-4">
          Eligibility & Ideal Candidates
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The Honorary Doctorate is reserved for individuals who stand out
          through sustained and impactful contributions in their fields. Ideal
          profiles include:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-600 mb-6">
          <li>Business visionaries and entrepreneurs with global impact</li>
          <li>Academics, researchers with distinguished body of work</li>
          <li>Philanthropists and social change-makers</li>
          <li>Public servants, policy-makers, or civic leaders</li>
          <li>Creators, artists, cultural influencers, and innovators</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          Note: Prior academic credentials are not mandatory — the distinction
          is based on demonstrated excellence and leadership.
        </p>
      </div>
    </section>
  );
}
