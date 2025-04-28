"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function USP() {
  const [activePoint, setActivePoint] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const points = [
    {
      id: "free-mock",
      title: "Affordable, Powerful Prep",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center h-72 md:h-80">
          {/* Image left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src="/images/heart-symbol.svg"
              alt="Affordable Prep"
              className="h-40 md:h-56 w-auto drop-shadow-xl rounded-xl p-4"
            />
          </div>
          {/* Text right */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] bg-clip-text text-transparent mb-3">
              Get Your First Mock Test for Free!
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Sign Up{" "}
              <span className="font-semibold text-[#0b8d8c]">
                and take a free NAATI CCL mock test.
              </span>{" "}
              No commitment, just real exam practice to help you pass with
              confidence.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-[#0b8d8c] font-medium">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3"
                  />
                </svg>
                Applicable for all available languages
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const animatedTexts = [
    {
      text: "Practice with Real Test Simulations",
      color: "from-purple-600 to-pink-600",
    },
    {
      text: "Get Instant Feedback & Improvement",
      color: "from-blue-600 to-cyan-600",
    },
    { text: "Track Your Performance", color: "from-green-600 to-teal-600" },
    {
      text: "Prepare for the NAATI CCL Exam",
      color: "from-orange-600 to-red-600",
    },
    { text: "Achieve Your PR Goals", color: "from-indigo-600 to-violet-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabLabels = [
    {
      id: "real-test-simulations",
      label: "Real Test Simulations",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "instant-feedback",
      label: "AI-Based Instant Scoring",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "affordable-prep",
      label: "Affordable, Powerful Prep",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoRotating) {
      interval = setInterval(() => {
        setActivePoint((prev) => (prev + 1) % points.length);
      }, 8000); // Change point every 8 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoRotating]);

  return (
    <section id="free-mock" className="py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        {/* Feature Section */}
        <div className="max-w-5xl mx-auto">{points[activePoint].content}</div>

        {/* Point Title */}
        <div className="text-center mt-8 px-4">
          {/* <h3 className="text-gray-500">{points[activePoint].title}</h3> */}
        </div>
      </div>
    </section>
  );
}
