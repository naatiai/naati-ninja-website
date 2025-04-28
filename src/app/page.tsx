import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhatIsNaatiNinja from "@/components/home/WhatIsNaatiNinja";
import USP from "@/components/home/USP";
import TargetUsers from "@/components/home/TargetUsers";
import Credibility from "@/components/home/Credibility";
import Support from "@/components/home/Support";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import generateStructuredData from "./structured-data";
import Script from "next/script";

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1">
          <div className="relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

            <div className="relative">
              <HeroSection />

              <div className="space-y-24 pb-24">
                <HowItWorks />
                <WhatIsNaatiNinja />
                <div className="space-y-24 pb-24"></div>
                <USP />
                <div className="space-y-24 pb-24"></div>
                <TargetUsers />
                <Credibility />
                <FAQ />
                <Support />
              </div>

              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
