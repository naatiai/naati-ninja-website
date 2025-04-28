import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privacy Policy | Naati Ninja",
  description:
    "Read Naati Ninja's privacy policy to understand how we collect, use, and protect your personal information on our platform.",
  keywords:
    "Naati Ninja Privacy Policy, Data Protection, User Privacy, NAATI CCL, Test Prep, Australia, Information Security",
  openGraph: {
    title: "Privacy Policy | Naati Ninja",
    description:
      "Learn about Naati Ninja's privacy practices and how your data is handled on our platform.",
    url: "https://naatininja.com/privacy",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Your privacy is important to us at Naati Ninja. Please review our policy.
          </p>
        </header>
        {children}
      </div>
      <Footer />
    </div>
  );
}
