import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terms | Naati Ninja",
  description:
    "Review the terms and conditions for using Naati Ninja's platform, services, and resources. Stay informed about your rights and responsibilities as a user.",
  keywords:
    "Naati Ninja Terms, Terms and Conditions, Naati Ninja Policy, User Agreement, Platform Terms, Service Terms, Legal, Compliance, Australia, NAATI, CCL, Test Prep",
  openGraph: {
    title: "Terms and Conditions | Naati Ninja",
    description:
      "Read the terms and conditions for using Naati Ninja's platform, including user responsibilities, legal compliance, and service guidelines.",
    url: "https://naatininja.com/terms",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">
            Please read and understand these terms before using Naati Ninja's platform.
          </p>
        </header>
        {children}
      </div>
      <Footer />
    </div>
  );
}
