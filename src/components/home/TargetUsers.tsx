"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const TargetUsers = () => {
  const [activeTab, setActiveTab] = useState("Homebuyer");
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const industries = [
    {
      id: "ccl-candidates",
      name: "CCL Candidates",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      useCase: "Prepare effectively for the NAATI CCL exam.",
      description:
        "Practice with realistic mock tests and get instant AI feedback to improve your skills.",
      steps: [
        {
          title: "Real Test Simulation",
          description:
            "Experience the actual exam format with audio-based dialogues.",
        },
        {
          title: "Instant AI Feedback",
          description:
            "Receive detailed reports highlighting areas for improvement.",
        },
        {
          title: "Track Progress",
          description:
            "Monitor your performance and see your growth over time.",
        },
        {
          title: "Affordable Practice",
          description: "Access high-quality mock tests starting at just $5.",
        },
      ],
    },
    {
      id: "immigration-aspirants",
      name: "Immigration Aspirants",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      useCase: "Gain 5 PR points for Australian immigration.",
      description:
        "Passing the NAATI CCL exam is crucial for immigration points. Naati Ninja helps you succeed.",
      steps: [
        {
          title: "Earn 5 PR Points",
          description:
            "Successfully pass the CCL test to boost your PR application.",
        },
        {
          title: "Build Confidence",
          description: "Practice until you feel ready to tackle the real exam.",
        },
        {
          title: "Flexible Preparation",
          description: "Study anytime, anywhere with our on-demand platform.",
        },
        {
          title: "Targeted Improvement",
          description:
            "Focus on specific areas needing improvement with AI feedback.",
        },
      ],
    },
    {
      id: "language-learners",
      name: "Language Learners",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l1.053-1.053M15.586 15H21a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h1.414l2.071 2.071a1 1 0 001.414 0l2.071-2.071H15.586z"
          />
        </svg>
      ),
      useCase: "Improve your bilingual interpretation skills.",
      description:
        "Enhance your language proficiency in Hindi, Tamil, Mandarin, Punjabi, Sinhala, Nepali and more.",
      steps: [
        {
          title: "Practice Interpretation",
          description: "Listen to dialogues and record your interpretation.",
        },
        {
          title: "Multi-Language Support",
          description:
            "Practice in Hindi, Tamil, Mandarin, Punjabi, Sinhala, Nepali with more languages coming.",
        },
        {
          title: "Detailed Feedback",
          description:
            "Understand your strengths and weaknesses in translation.",
        },
        {
          title: "Real-World Scenarios",
          description: "Prepare for practical communication challenges.",
        },
      ],
    },
    {
      id: "coaching-centers",
      name: "Coaching Centers",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      useCase: "Supplement your NAATI CCL training programs.",
      description:
        "Offer your students realistic mock tests with AI feedback as part of your curriculum.",
      steps: [
        {
          title: "Enhance Curriculum",
          description:
            "Provide students with valuable exam simulation practice.",
        },
        {
          title: "Track Student Progress",
          description: "Monitor student performance through our platform.",
        },
        {
          title: "Scalable Solution",
          description:
            "Easily integrate Naati Ninja into your existing programs.",
        },
        {
          title: "Affordable Partnership",
          description: "Offer valuable resources without high costs.",
        },
      ],
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isUserInteracted) {
      interval = setInterval(() => {
        setActiveTab((current) => {
          const currentIndex = industries.findIndex((i) => i.id === current);
          const nextIndex = (currentIndex + 1) % industries.length;
          return industries[nextIndex].id;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isUserInteracted, industries]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsUserInteracted(true);
  };

  return (
    <section id="target-users" className="py-12 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 sm:mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Who We Help
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Who Uses
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] pb-1">
              Naati Ninja
            </span>
          </h2>
          <p className="text-base sm:text-xl leading-7 sm:leading-8 text-gray-600 max-w-lg sm:max-w-3xl mx-auto">
            Naati Ninja helps NAATI CCL candidates, immigration aspirants, and
            language learners achieve their goals.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {/* Top Row - Industry Tabs */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => handleTabClick(industry.id)}
                  className={`group flex items-center space-x-2 sm:space-x-3 px-2 sm:px-4 py-2 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-100 ${
                    activeTab === industry.id
                      ? "bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white shadow-md scale-[1.02]"
                      : "hover:bg-blue-50 text-gray-600 hover:scale-[1.01]"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 ${
                      activeTab === industry.id
                        ? "text-white"
                        : "text-gray-600 group-hover:text-gray-700"
                    }`}
                  >
                    {industry.icon}
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    {industry.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Middle Row - Workflow Steps */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`transition-all duration-500 ${
                  activeTab === industry.id ? "block" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {industry.steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-gray-600 font-semibold flex items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-gray-100 group-hover:scale-110">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm sm:text-lg font-medium text-gray-800 mb-0.5 sm:mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - Industry Details */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-100">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`transition-all duration-500 ${
                  activeTab === industry.id ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="px-4 sm:px-8 py-3 sm:py-5">
                  <div className="max-w-lg sm:max-w-4xl mx-auto flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        <span className="font-medium">{industry.useCase}</span>{" "}
                        <span className="text-gray-500">
                          {industry.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-16 flex justify-center">
            <Link
              href="https://app.naatininja.com/sign-in"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
            >
              Start Your Free Mock Test
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;
