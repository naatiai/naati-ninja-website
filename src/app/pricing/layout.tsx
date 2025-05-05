import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing | Naati Ninja",
  description:
    "View Naati Ninja's pricing plans for NAATI CCL test preparation and language learning resources. Choose the best plan for your needs.",
  keywords:
    "Naati Ninja Pricing, NAATI CCL, Test Prep, Plans, Subscription, Australia, Language Learning, Affordable, Cost",
  openGraph: {
    title: "Pricing | Naati Ninja",
    description:
      "Explore Naati Ninja's pricing options for NAATI CCL test prep and language learning resources.",
    url: "https://naatininja.com/pricing",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}
