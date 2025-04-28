"use client";

import { useEffect, useState } from "react";

export default function Pricing() {
  const [sliderValue, setSliderValue] = useState(0);
  const [advisorText, setAdvisorText] = useState("1 mock");
  const [price, setPrice] = useState({
    currency: "$",
    amount: "5",
  });

  const priceInput: Record<number, string> = {
    0: "1 mock",
    1: "5 mocks",
    2: "10 mocks",
    3: "13 mocks",
    4: "35 mocks",
  };

  const priceOutput: Record<number, [string, string]> = {
    0: ["$", "5"],
    1: ["$", "20"],
    2: ["$", "40"],
    3: ["$", "50"],
    4: ["$", "101"],
  };

  useEffect(() => {
    setAdvisorText(priceInput[sliderValue]);
    setPrice({
      currency: priceOutput[sliderValue][0],
      amount: priceOutput[sliderValue][1],
    });
  }, [sliderValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-50 to-transparent rounded-full opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-50 to-transparent rounded-full opacity-20 blur-3xl transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
            <p className="text-sm font-semibold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
              Pricing
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="pb-1 block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0b8d8c] to-[#f7941e]">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use the slider to view what each mock pack includes.
          </p>
        </div>

        {/* Slider and Info Card */}
        <div className="container mx-auto mt-10 flex flex-col gap-4">
          <div className="p-6 text-center">
            {/* Slider */}
            <div className="mx-auto w-full max-w-md">
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={sliderValue}
                onChange={handleChange}
                className="h-2 w-full appearance-none rounded-lg bg-gray-300 accent-blue-500 outline-none"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                    sliderValue * 25
                  }%, #d1d5db ${sliderValue * 25}%, #d1d5db 100%)`,
                }}
              />
            </div>

            {/* Info Card */}
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <div className="w-72 rounded bg-white p-6 shadow-md">
                <div className="mb-2 mt-2 text-2xl font-semibold text-gray-900">
                  {advisorText}
                </div>
                <div className="text-3xl font-medium text-gray-500">
                  <span>{price.currency}</span>
                  <span>{price.amount}</span>
                </div>
                <ul className="m-3 mt-4 flex flex-wrap justify-center text-gray-600">
                  <li className="flex items-center py-2">
                    <span className="mr-2 text-green-500">✓</span>Complete NAATI
                    CCL Prep
                  </li>
                  <li className="flex items-center py-2">
                    <span className="mr-2 text-green-500">✓</span>Segment
                    Specific Result
                  </li>
                  <li className="flex items-center py-2">
                    <span className="mr-2 text-green-500">✓</span>Identical Exam
                    Simulation
                  </li>
                  <li className="flex items-center py-2">
                    <span className="mr-2 text-green-500">✓</span>Powered by AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
