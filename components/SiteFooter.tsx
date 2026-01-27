"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  X as XIcon,
} from "lucide-react";

/**
 * SiteFooter
 *
 * Global footer with logo+social on left, link columns on right.
 */
const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50">
      {/* Main Footer */}
      <div className="bg-[#0049AC] pt-16 pb-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side: Logo + Social */}
            <div className="flex flex-col gap-6 lg:w-1/4 shrink-0">
              <Link href="/" className="inline-block">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  TECHVERSITY.AI
                </span>
              </Link>

              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Your gateway to global academic recognition and professional
                excellence.
              </p>

              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#0049AC]" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-2 hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-[#0049AC]" />
                </a>
              </div>
            </div>

            {/* Right Side: Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 flex-1">
              {/* Column 1: About */}
              <div className="flex flex-col gap-4">
                <div className="relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/30">
                  <h3 className="text-lg font-bold text-white">About</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      About Techversity.ai
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Our Universities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Programs */}
              <div className="flex flex-col gap-4">
                <div className="relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/30">
                  <h3 className="text-lg font-bold text-white">Programs</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/programs/honorary-doctorate"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Honorary Doctorate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/dba"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all block"
                    >
                      <span>Doctor of Business</span>
                      <span className="block">Administration</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs/phd-doctorate"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      PhD Programs
                    </Link>
                  </li>
                  <li>
                    <span className="text-white/50 text-sm">
                      Master's (Coming Soon)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Support */}
              <div className="flex flex-col gap-4">
                <div className="relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/30">
                  <h3 className="text-lg font-bold text-white">Support</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Apply Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consultation"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Book Consultation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Legal */}
              <div className="flex flex-col gap-4">
                <div className="relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/30">
                  <h3 className="text-lg font-bold text-white">Legal</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refund-policy"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="text-white/80 hover:text-white hover:pl-2 text-sm transition-all"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 5: Connect */}
              <div className="flex flex-col gap-4">
                <div className="relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-white/30">
                  <h3 className="text-lg font-bold text-white">Connect</h3>
                </div>
                <ul className="flex flex-col gap-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                    <a
                      href="https://wa.me/447452024431"
                      className="hover:text-white transition-colors"
                    >
                      +44 7452 024431
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                    <a
                      href="mailto:admissions@techversity.ai"
                      className="hover:text-white transition-colors break-all"
                    >
                      admissions@techversity.ai
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Mon-Fri, 9AM-6PM GMT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#242B30] py-6 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="max-w-lg">
              <p className="text-white/70 text-sm">
                © {currentYear} Techversity.ai. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                Techversity.ai is an admissions advisory company. All academic
                programs are provided by independent accredited universities.
              </p>
            </div>
            <p className="text-white/50 text-xs max-w-xl text-center md:text-right leading-relaxed">
              Techversity.ai facilitates admissions to partner universities. We
              are not a university and do not issue degrees. All credentials are
              awarded by the respective universities following their academic
              standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
