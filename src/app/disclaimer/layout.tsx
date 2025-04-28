import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disclaimer | Naati Ninja",
  description:
    "Read the disclaimer for Naati Ninja. Understand the limitations and responsibilities regarding the use of our platform and resources.",
  keywords:
    "Naati Ninja Disclaimer, Platform Disclaimer, Legal Notice, Limitation of Liability, Australia, NAATI, CCL, Test Prep",
  openGraph: {
    title: "Disclaimer | Naati Ninja",
    description:
      "Review the disclaimer for Naati Ninja, including limitations of liability and user responsibilities.",
    url: "https://naatininja.com/disclaimer",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
          <p className="text-gray-600">
            Please review this disclaimer before using Naati Ninja's platform.
          </p>
        </header>
        {children}
      </div>
      <Footer />
    </div>
  );
}
