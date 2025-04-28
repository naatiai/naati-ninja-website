"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useCalendly } from "../RootLayoutClient";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

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

  const openCalendly = () => {
    window.open("https://calendly.com/dhruv-oberoi-tg6r/30min", "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Sign up for free",
      description:
        "Create your free account in seconds and get instant access to your first free NAATI CCL mock test.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      animation: {
        steps: [
          { content: "Creating account...", type: "process" },
          { content: "Account created!", type: "success" },
          { content: "Allocating free mock test...", type: "process" },
          { content: "Free mock test ready!", type: "success" },
          { content: "Redirecting to dashboard...", type: "process" },
        ],
      },
    },
    {
      id: 2,
      title: "Take a mock test",
      description:
        "Choose your language and take a realistic audio-based mock test designed to simulate the actual NAATI CCL exam experience.",
      icon: (
        <svg
          className="w-8 h-8"
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
      animation: {
        steps: [
          { content: "Loading mock test...", type: "process" },
          { content: "Test started!", type: "success" },
          { content: "Recording dialogue...", type: "process" },
          { content: "Dialogue recorded!", type: "success" },
          { content: "Submitting test...", type: "process" },
        ],
      },
    },
    {
      id: 3,
      title: "Get instant feedback",
      description:
        "Receive a detailed report within an hour with AI-marked feedback, highlighting areas for improvement and tracking your progress.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3m0 0l3 3m-3-3v12m-7 0h16a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
      animation: {
        steps: [
          { content: "Analysing performance...", type: "process" },
          { content: "Generating report...", type: "process" },
          { content: "Report ready!", type: "success" },
          { content: "Reviewing feedback...", type: "user" },
        ],
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 20000); // Change step every 10 seconds
    return () => clearInterval(timer);
  }, []);

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setAnimationStep(0); // Reset animation when active step changes
    const timer = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev < steps[activeStep].animation.steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 10000); // Show each animation step for 5 seconds
    return () => clearInterval(timer);
  }, [activeStep]);

  const step1Animation = (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        {/* Video Preview */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <video
            src="/videos/free-sub-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );

  const step2Animation = (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        {/* Video Preview */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <video
            src="/videos/mock-test-flow.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );

  const step3Animation = (
    <>
      <div className="bg-white rounded-xl shadow-lg">
        {/* Video Preview */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <video
            src="/videos/mock-results.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );

  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-gray-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Easy & Reliable
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How Naati Ninja
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NAATI Ninja helps you prepare for the NAATI CCL exam by allowing you
            to
            <div
              className={`inline-block transition-all duration-500 bg-gradient-to-r ${animatedTexts[textIndex].color} bg-clip-text text-transparent`}
              style={{ minWidth: "200px" }}
            >
              {animatedTexts[textIndex].text}
            </div>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animation */}
          <div
            className={`relative w-full h-[40vh] lg:h-[45vh] min-h-[250px] lg:min-h-[350px] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-2 sm:p-4 lg:p-8 flex items-center justify-center`}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="h-full flex items-center justify-center p-2 sm:p-4 lg:p-8">
                <div className="w-full h-full max-w-none lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl transform transition-all duration-500 flex items-center justify-center">
                  {activeStep === 0 && step1Animation}
                  {activeStep === 1 && step2Animation}
                  {activeStep === 2 && step3Animation}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative bg-white rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? "border-2 border-green-900 transform scale-105"
                    : "hover:shadow-xl hover:-translate-y-1"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                      activeStep === index
                        ? "bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.icon}
                    <div
                      className={`absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                        activeStep === index
                          ? "bg-white text-green-900 border-2 border-green-900"
                          : "bg-green-900 text-white"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="https://app.naatininja.com.au/sign-in"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
