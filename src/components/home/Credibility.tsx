"use client";

import Image from "next/image";
import Link from "next/link";

export default function Credibility() {
  const founders = [
    {
      id: "eremy",
      name: "Jeremy Ciaora",
      role: "Co-Founder & COO",
      bio: "",
      image: "/images/jeremy-ciaora.jpg",
    },
    {
      id: "dhruv",
      name: "Dhruv Oberoi",
      role: "Co-Founder & CEO",
      bio: "",
      image: "/images/dhruv-oberoi.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      user_type: "NAATI Candidate",
      quote:
        "Naati Ninja's mock tests are incredibly realistic. The AI feedback is detailed and helpful.",
      author: "Mohit S.",
      company: "NAATI Candidate",
    },
    {
      id: 2,
      user_type: "NAATI Candidate",
      quote:
        "I'm so glad I found Naati Ninja!  It helped me pass the NAATI CCL exam and get my PR points.",
      author: "Lasith T.",
      company: "NAATI Candidate",
    },
    {
      id: 3,
      user_type: "NAATI Candidate",
      quote:
        "Naati Ninja has significantly improved my interpretation skills.  The platform is easy to use and the feedback is invaluable.",
      author: "Jennifer R.",
      company: "NAATI Candidate",
    },
    {
      id: 4,
      user_type: "Coaching Center",
      quote:
        "We've integrated Naati Ninja into our NAATI CCL prep course, and our students are seeing amazing results!",
      author: "Anirudh B.",
      company: "Coaching Center",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Trusted By Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Trusted Expertise
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built by
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] pb-5">
              Language Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each test is created by a language expert in that language with AI
            grading, supervised by these experts. Each test is created using the
            latest exam quality and difficulty in mind. Each exam is structured
            exactly like the real NAATI CCL exam.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl transition-opacity bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100" />
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 mb-4">
                        {testimonial.user_type}
                      </div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="https://app.naatininja.com/sign-in"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-[#0b8d8c] hover:to-[#0b8d8c] transition-all duration-300"
            >
              Start Your Free Mock Test
              <svg
                className="ml-2 w-4 sm:w-5 h-4 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
