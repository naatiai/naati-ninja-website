import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact | Naati Ninja",
  description:
    "Contact Naati Ninja for support, inquiries, or feedback. We're here to help you with your NAATI CCL preparation and language learning journey.",
  keywords:
    "Naati Ninja Contact, Support, Help, NAATI CCL, Test Prep, Australia, Language Learning, Customer Service",
  openGraph: {
    title: "Contact | Naati Ninja",
    description:
      "Get in touch with Naati Ninja for assistance, questions, or feedback regarding our platform and services.",
    url: "https://naatininja.com/contact",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}
