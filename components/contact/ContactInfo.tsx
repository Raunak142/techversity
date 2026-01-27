"use client";

import { Mail, Phone, MapPin, Contact } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      content: [
        { label: "Sales", value: "info@techversity.ai" },
        { label: "Support", value: "info@techversity.ai" },
        { label: "Admission", value: "info@techversity.ai" },
        { label: "Legal", value: "info@techversity.ai" },
      ],
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: [
        { label: "UK", value: "+44 1330 711221" },
        { label: "India", value: "+91 95402 87212" },
      ],
    },
    {
      icon: Contact,
      title: "Address",
      content: [
        {
          label: "UK",
          value:
            "Techversity Limited , 14 Harrow Place, London, England, E1 7DB",
        },
        {
          label: "India",
          value:
            "Techversity Limited , A, LGF, K-38, Kashmiri Lal Dhingra Marg, Block H, Kalkaji, New Delhi, Delhi 110019",
        },
      ],
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0049AC]/20 shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col items-center text-center overflow-hidden"
          >
            {/* Decorative Background Blob on Hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-[#0049AC] transition-colors duration-500" />
            <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-[#0049AC]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Icon Container */}
            <div className="relative mb-8">
              {/* Teardrop Shape */}
              <div className="w-20 h-20 bg-[#1e2329] group-hover:bg-[#0049AC] rounded-l-full rounded-br-full rounded-tr-[4px] -rotate-45 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-225deg]">
                {/* Icon */}
                <div className="rotate-45 group-hover:rotate-[225deg] transition-transform duration-500">
                  <item.icon
                    className="w-9 h-9 text-white group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#0049AC] transition-colors duration-300">
              {item.title}
            </h3>

            <div className="w-full space-y-4 text-sm md:text-base leading-relaxed">
              {item.content.map((line, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:justify-center md:gap-2 border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs md:text-sm self-center md:self-auto min-w-[60px] text-right">
                    {line.label}
                  </span>
                  <span className="hidden md:block text-gray-300">|</span>
                  <span className="font-medium text-gray-800 break-words max-w-[250px]">
                    {line.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
