"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  X as XIcon,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Contact Us", path: "/contact" },
    { name: "American Management University", path: "/amu" },
    { name: "Bachelor Programs", path: "/programs/bachelors" },
    { name: "Honorary Doctorate", path: "/programs/honorary-doctorate" },
    {
      name: "Honorary Doctorate Program - American Management University",
      path: "/programs/amu-honorary",
    },
    {
      name: "Integrated Master's + Doctorate Programs",
      path: "/programs/integrated",
    },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "REFUND & CANCELLATION POLICY", path: "/refund-policy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="relative z-50">
      {/* Main Footer */}
      <div className="bg-[#0049AC] pt-16 pb-12">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            {/* About Us Column */}
            <div className="flex flex-col gap-6">
              <div className="relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-white/30">
                <h3 className="text-xl font-bold text-white">About Us</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed max-w-sm">
                HNtrix is a forward-thinking organization dedicated to bridging
                the gap between quality education and innovative enterprise
                solutions.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors group"
                >
                  <XIcon className="w-5 h-5 text-[#0049AC]" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col gap-6">
              <div className="relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-white/30">
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-white/90 hover:text-white hover:pl-2 transition-all text-sm flex items-start gap-2"
                    >
                      <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col gap-6">
              <div className="relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-white/30">
                <h3 className="text-xl font-bold text-white">Contact Info</h3>
              </div>
              <div className="flex flex-col gap-4 text-white/90 text-[15px]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <p>
                      For Sales Enquiry:{" "}
                      <a href="mailto:sales@hntrix.com" className="font-bold">
                        sales@hntrix.com
                      </a>
                    </p>
                    <p>
                      For Support Enquiry:{" "}
                      <a href="mailto:support@hntrix.com" className="font-bold">
                        support@hntrix.com
                      </a>
                    </p>
                    <p>
                      For Admission Enquiry:{" "}
                      <a
                        href="mailto:admissions@hntrix.com"
                        className="font-bold"
                      >
                        admissions@hntrix.com
                      </a>
                    </p>
                    <p>
                      For Legal:{" "}
                      <a href="mailto:legal@hntrix.com" className="font-bold">
                        legal@hntrix.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <Phone className="w-5 h-5 shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <p>UK +44 7452 024431</p>
                    <p>USA +13159617606</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <p>UK Address : 14 Harrow Place, London, England, E1 7DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#242B30] py-6 text-center border-t border-white/10">
        <p className="text-white/80 text-sm font-medium">
          © 2026 HNtrix PVT LTD . Your Gateway to Global Recognition.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
