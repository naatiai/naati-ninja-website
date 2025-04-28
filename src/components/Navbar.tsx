"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useCalendly } from "./RootLayoutClient";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { openCalendly } = useCalendly();

  const openCalendly = () => {
    window.open("https://calendly.com/dhruv-oberoi-tg6r/30min");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Naati Ninja Logo"
                  width={137}
                  height={31}
                  className="w-50 h-50"
                />
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight lowercase"></h1>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
            >
              Contact
            </Link>

            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 hover:text-gray-900 px-2 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              // onClick={openCalendly}
              href="https://app.naatininja.com/sign-up"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gradient-to-r hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
            >
              Register Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              // href="https://app.naatininja.com/sign-up"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              // onClick={openCalendly}
              href="https://app.naatininja.com/sign-up"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-700 hover:to-indigo-700"
            >
              Register Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
