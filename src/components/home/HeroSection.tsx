"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const industryExamples = [
  {
    industry: "NAATI CCL",
    query: "How can NAATI Ninja help me pass the NAATI CCL exam?",
    response:
      "NAATI Ninja AI analysed your requirements and found:\n1. Realistic mock tests simulating the actual exam\n2. Instant AI feedback on your performance\n3. Practice in Hindi, Tamil, Mandarin, and more languages\n4. Track your progress with a performance dashboard\n5. Affordable pricing starting at $5 per mock test",
    icon: <Image src="/file.svg" alt="NAATI CCL Icon" width={32} height={24} />,
  },
  {
    industry: "Immigration",
    query:
      "How can passing the NAATI CCL exam help with Australian immigration?",
    response:
      "NAATI Ninja AI reviewed your needs and found:\n1. Passing the NAATI CCL exam grants you 5 PR points for Australian immigration\n2. Improve your language skills for better integration in Australia\n3. Gain confidence in your communication abilities\n4. Access resources and tips for immigration success\n5. Prepare effectively with realistic mock tests",
    icon: (
      <Image src="/globe.svg" alt="Immigration Icon" width={32} height={24} />
    ),
  },
  {
    industry: "Language Skills",
    query: "How can NAATI Ninja improve my language skills?",
    response:
      "NAATI Ninja AI suggests focusing on:\n1. Practice with bilingual dialogues in various languages\n2. Receive detailed feedback on your interpretation and translation\n3. Identify areas for improvement with AI analysis\n4. Build confidence through realistic test simulations\n5. Access tips and resources to enhance your language proficiency",
    icon: (
      <Image
        src="/reagent.svg"
        alt="Language Skills Icon"
        width={32}
        height={24}
      />
    ),
  },
];

const HeroSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  const animatedTexts = [
    {
      text: "Hindi (हिन्दी)",
      color: "from-orange-600 to-red-600",
    },
    {
      text: "Mandarin (中文)",
      color: "from-red-600 to-yellow-600",
    },
    {
      text: "Nepali (नेपाली)",
      color: "from-blue-600 to-indigo-600",
    },
    { text: "Sinhala (සිංහල)", color: "from-yellow-700 to-green-600" },
    {
      text: "Punjabi (ਪੰਜਾਬੀ)",
      color: "from-green-600 to-emerald-800",
    },
    { text: "Tamil (தமிழ்)", color: "from-indigo-600 to-violet-600" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industryExamples.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedResponse("");
    let currentText = "";
    const response = industryExamples[activeIndustry].response;

    const typeWriter = (text: string, index: number) => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayedResponse(currentText);
        setTimeout(() => typeWriter(text, index + 1), 30);
      } else {
        setIsTyping(false);
      }
    };

    typeWriter(response, 0);
  }, [activeIndustry]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-64 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Get 5 PR Points Faster with NAATI Ninja
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Take AI-powered NAATI CCL mock tests in
            {/* <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] pb-1">
              In Your Language
            </span> */}
            <span
              className={`pt-2 block mt-2 text-transparent bg-clip-text bg-gradient-to-r ${animatedTexts[textIndex].color} pb-1`}
            >
              {animatedTexts[textIndex].text}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real exam format. Instant results. One free test on sign-up.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="https://app.naatininja.com/sign-in"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
          >
            Take a Free Test
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-600 bg-white hover:bg-gray-50 shadow-lg shadow-gray-100/30 hover:shadow-xl hover:shadow-gray-200/40 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
