"use client";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Submit Documents & Research Topics",
      description:
        "Provide your academic qualifications, resume/CV, and three proposed research topics in your area of expertise.",
    },
    {
      number: "2",
      title: "Topic & Document Approval",
      description:
        "Our academic team will review your documents, approve one research topic, and provide formal confirmation of your enrollment.",
    },
    {
      number: "3",
      title: "Thesis Development",
      description:
        "Our experts will guide you in creating a professional, original doctoral thesis based on the approved topic.",
    },
    {
      number: "4",
      title: "Thesis Review & Feedback",
      description:
        "You will receive detailed feedback on your thesis to ensure it meets academic standards and your expectations.",
    },
    {
      number: "5",
      title: "Panel Session",
      description:
        "Participate in a panel session for guidance, evaluation, and final validation of your work.",
    },
    {
      number: "6",
      title: "Optional Book Publication",
      description:
        "Your thesis can be published as a book for additional academic recognition (additional fees apply).",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
      {/* Who Can Apply Section */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Who Can Apply?
        </h2>
        <p className="text-gray-700 font-medium">
          This program is suitable for:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-gray-700">
          <li>
            <span className="font-semibold text-gray-900">
              Professionals with 8+ years of industry or academic experience
            </span>
          </li>
          <li>Senior educators, consultants, entrepreneurs, researchers</li>
          <li>
            Individuals with a strong academic or professional background
            looking to formalize their expertise with a doctorate degree
          </li>
        </ul>
      </div>

      {/* How the Process Works Section */}
      <div className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How the Process Works – 6 Simple Steps
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Step Number often redundant if using list styling, but following screenshot text format closely */}
              <div className="flex-shrink-0">
                <span className="text-lg font-bold text-gray-900">
                  {step.number}.
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
