import Link from "next/link";
import Cta from "./components/Cta";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Base from "./Baseof";

function Pricing({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [sliderValue, setSliderValue] = useState(0);
  const [payLink, setPayLink] = useState("");
  const [advisorText, setAdvisorText] = useState("1 mock");
  const [price, setPrice] = useState({
    currency: "$",
    amount: "5",
  });

  const priceInput = {
    0: "1 mock",
    1: "5 mocks",
    2: "10 mocks",
    3: "13 mocks",
    4: "35 mocks",
  };

  const priceOutput = {
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
    setPayLink(priceOutput[sliderValue][2]);
  }, [sliderValue]);

  const handleChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  const {
    frontmatter: { title, meta_title, description, image, noindex, canonical, plans, call_to_action },
  } = data;
  return (
    <Base
      title={title}
      meta_title={meta_title}
      description={description}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      <section className="section pb-0">
        <div className="container mx-auto mt-10 flex flex-col gap-4">
          <div className="p-6 text-center">
            <h2 className="text_bg bg-clip-text text-center text-3xl font-normal leading-[72px] tracking-[-0.6px] sm:text-[40px] sm:tracking-[-1.2px] ">
              Pricing + Benefits
            </h2>

            <p className="text-gray-400">
              Use the slider to select your preferred number of mocks tests.
            </p>

            {/* Slider Section */}
            <div className="mx-auto w-full max-w-md">
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={sliderValue}
                onChange={handleChange}
                className="h-2 w-full appearance-none rounded-lg bg-gray-300 accent-blue-500
                   outline-none"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                    sliderValue * 25
                  }%, #d1d5db ${sliderValue * 25}%, #d1d5db 100%)`,
                }}
              />
            </div>
            {/* Pricing Section */}
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
                    <span className="mr-2 text-green-500">✓</span>
                    Identical Exam Simulation
                  </li>
                  <li className="flex items-center py-2">
                    <span className="mr-2 text-green-500">✓</span>
                    Powered by AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </Base>
  );
}

export default Pricing;
