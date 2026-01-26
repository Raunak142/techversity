"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Note: User should replace this with their actual image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pagebgImage.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center h-full mt-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-wide">
          Honorary Doctorate Program
        </h1>

        {/* Breadcrumb / Subheading */}
        <div className="flex items-center gap-2 text-sm md:text-base text-gray-200 font-medium">
          <span className="text-white">Honorary Doctorate Program</span>
        </div>
      </div>
    </section>
  );
}
