"use client";

export default function KeyFeatures() {
  const features = [
    {
      title: "Structured & Strategic Learning Path",
      description:
        "Our program follows a thoughtfully designed framework that blends in-depth theoretical understanding with hands-on research experience, ensuring holistic academic development.",
    },
    {
      title: "Dedicated One-on-One Mentorship",
      description:
        "Work closely with a seasoned academic mentor who will guide your doctoral journey, offering tailored support and helping you refine your research methodology and vision.",
    },
    {
      title: "Access to Premier Academic Resources",
      description:
        "Gain entry to the most up-to-date journals, digital libraries, research databases, and advanced tools to stay ahead in your area of study.",
    },
    {
      title: "International Research Collaborations",
      description:
        "Collaborate with renowned universities and global research hubs, engaging in pioneering projects while expanding your network across borders.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0049AC] rounded-xl p-8 hover:bg-[#003B95] transition-colors shadow-md flex flex-col justify-center min-h-[200px]"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
