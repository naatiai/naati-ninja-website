"use client";

import { useState } from "react";
// import { useCalendly } from "../RootLayoutClient";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  // const { openCalendly } = useCalendly();
  const faqs = [
    {
      question: "What is NAATI Ninja?",
      answer:
        "NAATI Ninja is an AI-powered platform that helps students practice for the NAATI CCL exam. It offers affordable, on-demand mock tests and detailed feedback to improve your translation and interpretation skills.",
    },
    {
      question: "How do the mock tests work?",
      answer:
        "You select a mock test, listen to the audio conversation, and then interpret/translate it into your chosen language. The test is recorded, and you receive a detailed AI-generated report showing your performance.",
    },
    {
      question: "How much do the mock tests cost?",
      answer:
        "Each mock test costs as little as $3, making it an affordable and effective way to practice for the NAATI CCL exam. Plus, every new account gets one free mock test to try before you buy.",
    },
    {
      question: "How long does it take to receive my results?",
      answer:
        "Your AI-generated result is usually available within an hour, with insights into vocabulary, fluency, and areas to improve—just like a real NAATI test.",
    },
    {
      question: "Can I review my answers after the test?",
      answer:
        "Yes, after completing any NAATI CCL practice test, you can view your transcript and listen to your recordings alongside AI-generated feedback.",
    },
    {
      question: "Do I need to schedule a test in advance?",
      answer:
        "Nope! NAATI Ninja’s tests are completely on-demand, so you can practice anytime, anywhere.",
    },
    {
      question:
        "What languages can I practice for the NAATI CCL exam on NAATI Ninja?",
      answer:
        "You can currently practice in Hindi, Tamil, Mandarin, Punjabi, Sinhala, Nepali with more languages coming soon. All are designed to match the official NAATI CCL exam structure.",
    },
    {
      question: "How does the AI grading work?",
      answer:
        "NAATI Ninja’s AI scores your test like the real NAATI exam, analyzing transcription accuracy, fluency, and contextual understanding. You get a breakdown of your score with improvement tips.",
    },
    {
      question: "Is there any support available if I need help?",
      answer:
        "Yes! If you have any questions about your tests, scoring, or setup, our support team is here to help—just like NAATI contact support.",
    },
    {
      question: "Can I track my progress over time?",
      answer:
        "Yes. Your dashboard stores your history so you can monitor your growth across multiple mock tests.",
    },
    {
      question: "How long does it take to prepare for the NAATI CCL exam?",
      answer:
        "Preparation time varies, but most students prep over 2–4 weeks. A great way to start is by taking a free NAATI mock test at NAATI Ninja.",
    },
    {
      question: "How do I prepare for the NAATI CCL exam?",
      answer:
        "Start by simulating the exam with a realistic mock test. It shows you exactly what to expect and helps you build confidence.",
    },
    {
      question: "Is the NAATI CCL exam difficult?",
      answer:
        "It depends on your proficiency. The best way to find out your level is by taking a mock NAATI test online at NAATI Ninja.",
    },
    {
      question: "What if my vocabulary is not strong?",
      answer:
        "Try a mock test to see where you stand. NAATI Ninja highlights weak vocab areas and gives tailored feedback.",
    },
    {
      question:
        "I tried some online tests but still struggle to pass. How hard is the NAATI CCL exam?",
      answer:
        "The official exam is rigorous. Our mock tests are designed to be just like the real thing, so practicing with NAATI Ninja is your best prep.",
    },
    {
      question: "How much does the NAATI CCL exam cost?",
      answer:
        "The official NAATI CCL test currently costs AUD $800. That’s why it’s worth investing in affordable NAATI preparation beforehand.",
    },
    {
      question: "How can the NAATI CCL help me get PR in Australia?",
      answer:
        "Passing the NAATI CCL exam gives you 5 bonus points towards your Australian PR. It’s one of the most effective and accessible ways to boost your immigration points.",
    },
    {
      question: "How long is the NAATI CCL valid for?",
      answer:
        "Once passed, your NAATI CCL result is valid for 3 years. That gives you time to apply and benefit from the 5 PR points.",
    },
    {
      question: "Do I need to take notes in the NAATI CCL exam?",
      answer:
        "Yes. Effective note-taking can help you retain key details. Practice with our exam simulation tests to get used to this under time pressure.",
    },
    {
      question: "Where can I find the rules for the NAATI CCL exam?",
      answer:
        "Visit the official NAATI Australia website or explore NAATI Ninja's blog for simplified breakdowns of the test format, rules, and scoring.",
    },
    {
      question: "Do I need a NAATI CCL tutorial?",
      answer:
        "If you're unsure about where to start, a mock test is the best first step. NAATI Ninja’s intuitive interface makes it easy for beginners.",
    },
    {
      question: "How do I know what the NAATI CCL exam setup is like?",
      answer:
        "Try a mock test on NAATI Ninja—it mimics the exact structure, timing, and format of the official exam.",
    },
    {
      question: "What are the best ways to prepare for the NAATI CCL exam?",
      answer:
        "Combine mock tests, vocabulary revision, and real-time feedback. NAATI Ninja offers all of this in one place.",
    },
    {
      question: "What is the cheapest way to prepare for NAATI CCL?",
      answer:
        "NAATI Ninja offers mock tests from just $3, and every user gets one free test. It’s the most budget-friendly prep option online.",
    },
    {
      question: "What’s the best way to pass the NAATI CCL exam?",
      answer:
        "Practice with realistic mock tests, learn from feedback, and work consistently. NAATI Ninja gives you all the tools you need.",
    },
    {
      question: "Do I need NAATI CCL practice material?",
      answer:
        "Absolutely. The best prep is practice under exam conditions, and NAATI Ninja offers just that.",
    },
    {
      question: "Is the NAATI vocabulary list helpful?",
      answer:
        "Yes, but only if you apply it. Try a mock test to see how well you can use the vocabulary in a real conversation.",
    },
    {
      question: "How is the NAATI CCL scored?",
      answer:
        "The official exam is marked on dialogue accuracy, language fluency, and comprehension. NAATI Ninja’s AI system follows the same scoring methodology, so you get realistic results.",
    },
    {
      question: "What is the pass rate of the NAATI CCL exam?",
      answer:
        "The pass rate for the NAATI CCL exam varies, but it's generally considered to be challenging. NAATI Ninja helps you simulate the exact exam setup and provides AI-powered feedback to improve your chances of success. While we don't guarantee a pass, our users experience one of the highest success rates in the market due to our realistic mock tests and personalized learning approach.",
    },
  ];

  const openCalendly = () => {
    window.open("https://calendly.com/dhruv-oberoi-tg6r/30min", "_blank");
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12"
          animate={{
            rotate: [12, -12, 12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12"
          animate={{
            rotate: [-12, 12, -12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-none bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 sm:mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              FAQ
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]">
              Questions
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to know about Naati Ninja and how it can help
            you prepare for the NAATI CCL exam.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <dt>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      <motion.svg
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-6 h-6 transform text-blue-600 transition-transform duration-200`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-4"
                    >
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>

          <div className="mt-12 text-center space-y-4">
            <p className="text-lg text-gray-600">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://app.naatininja.com/sign-in"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
              >
                Start Your Free Mock Test
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-600 bg-white hover:bg-gray-50 shadow-lg shadow-gray-100/30 hover:shadow-xl hover:shadow-gray-200/40 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
