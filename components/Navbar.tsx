import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Techversity
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Programs Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium py-2 flex items-center gap-1 transition-colors">
                Programs
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left ${
                  isProgramsOpen
                    ? "opacity-100 transform scale-100 visible"
                    : "opacity-0 transform scale-95 invisible"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/programs/honorary-doctorate"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Honorary Doctorate
                  </Link>
                  <Link
                    href="/programs/dba"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    DBA
                  </Link>
                  <Link
                    href="/programs/phd-doctorate"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    PhD / Doctorate
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/universities"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Universities
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
