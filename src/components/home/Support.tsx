"use client";

// import { useCalendly } from "../RootLayoutClient";
import Link from "next/link";

const Support = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12 animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12 animate-pulse" />
          <div className="absolute inset-0 bg-none bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Support
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            <span className="relative">
              World-Class Support
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/50 -rotate-1 transform translate-y-3"></span>
            </span>
            {" at "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]">
              Every Step
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From exam testing to vocabulary improvements, we're here to ensure
            your success
          </p>
        </div>

        {/* Environment */}
        <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-100/20 border border-gray-100/50 p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Ace Your NAATI CCL Exam and Get Your Australian PR?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Start practicing today with affordable NAATI CCL mock tests and
              instant feedback. Get on the path to success in your NAATI
              Australia test now!
            </p>
            <Link
              href="https://app.naatininja.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
            >
              Start Practicing Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
