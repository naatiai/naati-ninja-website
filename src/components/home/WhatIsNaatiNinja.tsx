"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WhatIsNaatiNinja() {
  const [activePoint, setActivePoint] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const points = [
    {
      id: "real-test-simulations",
      title: "Real Test Simulations",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center h-72 md:h-80">
          {/* Image left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src="/images/online.svg"
              alt="Real Test Simulations"
              className="h-40 md:h-56 w-auto drop-shadow-xl rounded-xl p-4"
            />
          </div>
          {/* Text right */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] bg-clip-text text-transparent mb-3">
              Practice with Real Test Simulations
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Experience the NAATI CCL exam before the real thing! Naati Ninja
              offers{" "}
              <span className="font-semibold text-[#0b8d8c]">
                audio-based mock tests
              </span>{" "}
              that perfectly mimic the official format, bilingual dialogues, and
              timing. Build confidence and reduce exam anxiety with every
              attempt.
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
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                Realistic audio & bilingual dialogues
              </li>
              <li className="flex items-center text-[#f7941e] font-medium">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Exact exam simulation format
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "instant-feedback",
      title: "AI-Based Instant Scoring and Feedback",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center h-72 md:h-80">
          {/* Image left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src="/images/results.svg"
              alt="AI Feedback"
              className="h-40 md:h-56 w-auto drop-shadow-xl rounded-xl p-4"
            />
          </div>
          {/* Text right */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
              Get Instant AI Feedback & Scoring
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Receive{" "}
              <span className="font-semibold text-blue-600">
                detailed AI-powered reports
              </span>{" "}
              within an hour. Instantly know your strengths and areas for
              improvement, so you can focus your prep and track your progress
              with every test.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-600 font-medium">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Instant scoring & feedback
              </li>
              <li className="flex items-center text-cyan-600 font-medium">
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
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                Track your improvement over time
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "affordable-prep",
      title: "Affordable, Powerful Prep",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center h-72 md:h-80">
          {/* Image left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src="/images/savings.svg"
              alt="Affordable Prep"
              className="h-40 md:h-56 w-auto drop-shadow-xl rounded-xl p-4"
            />
          </div>
          {/* Text right */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-3">
              Affordable, Powerful Prep for Everyone
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Access{" "}
              <span className="font-semibold text-indigo-600">
                top-quality mock tests
              </span>{" "}
              starting at just $5. Every new user gets a free mock test—no
              scheduling, no hassle, just on-demand practice whenever you want.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-indigo-600 font-medium">
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
                Free mock test for every new user
              </li>
              <li className="flex items-center text-violet-600 font-medium">
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
                    d="M9 12l2 2 4-4"
                  />
                </svg>
                On-demand, affordable access
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

  const handleTabClick = (index: number) => {
    setActivePoint(index);
    setIsAutoRotating(false);
  };

  return (
    <section
      id="what-is-NaatiNinja"
      className="py-24 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-gray-100 border border-gray-200 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Unlock Your NAATI CCL Potential
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What is
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] pb-1">
              Naati Ninja
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naati Ninja is your AI-powered platform to help you{" "}
          </p>
          <div
            className={`inline-block transition-all duration-500 bg-gradient-to-r ${animatedTexts[textIndex].color} bg-clip-text text-transparent`}
            style={{ minWidth: "200px" }}
          >
            <div className="text-xl max-w-3xl mx-auto mt-1">
              {animatedTexts[textIndex].text}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-xl shadow-sm border border-gray-200">
            {tabLabels.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`
              flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg transition-all duration-300
              ${
                activePoint === index
                  ? "bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-700 hover:bg-blue-50"
              }
              ${index !== tabLabels.length - 1 ? "mr-2" : ""}
            `}
              >
                <span
                  className={`transition-transform duration-300 ${
                    activePoint === index ? "scale-110" : ""
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Section */}
        <div className="max-w-5xl mx-auto">{points[activePoint].content}</div>

        {/* Point Title */}
        <div className="text-center mt-8 px-4">
          <h3 className="text-gray-500">{points[activePoint].title}</h3>
        </div>

        {/* Get Started Button */}
        <div className="text-center mt-12">
          <Link
            href="https://app.naatininja.com/sign-in"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
          >
            Start Your Free Mock Test
          </Link>
        </div>
      </div>
    </section>
  );
}
