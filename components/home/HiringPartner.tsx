import React from "react";

const partners = [
  {
    name: "PowerShell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  },
  {
    name: "Gartner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gartner_logo.svg/2560px-Gartner_logo.svg.png",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  },
  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/2560px-Intel-logo.svg.png",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
  },
];

const HiringPartner = () => {
  return (
    <section className="py-16 bg-white min-h-[40vh] flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 mb-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl md:text-4xl font-bold text-black max-w-xl leading-tight text-center md:text-left">
            From Campus to Corporate – <br />
            Together with Our Hiring Partners
          </h2>
          <div className="md:w-px md:h-20 bg-gray-300 hidden md:block"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-md text-center md:text-left leading-relaxed">
            Together, we bridge the gap between skill development and real-world
            success.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex gap-16 md:gap-20 items-center px-8 md:px-12">
            {partners.map((partner, index) => (
              <div
                key={`p1-${index}`}
                className="w-28 md:w-40 h-14 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-90"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-16 md:gap-20 items-center px-8 md:px-12">
            {partners.map((partner, index) => (
              <div
                key={`p2-${index}`}
                className="w-28 md:w-40 h-14 md:h-24 flex items-center justify-center transition-all duration-300 hover:scale-90"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartner;
