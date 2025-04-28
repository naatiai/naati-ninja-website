import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs | Naati Ninja",
  description:
    "Explore the latest updates, tips, and resources from Naati Ninja. Stay informed about NAATI CCL, test preparation, and language learning.",
  keywords:
    "Naati Ninja Blog, NAATI CCL, Test Prep, Language Learning, Australia, Tips, Updates, News, Resources, Study Guide",
  openGraph: {
    title: "Blogs | Naati Ninja",
    description:
      "Discover articles, guides, and news from Naati Ninja to help you succeed in your NAATI CCL journey.",
    url: "https://naatininja.com/blogs",
    siteName: "Naati Ninja",
    locale: "en_AU",
    type: "website",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Naati Ninja Blog</h1>
          <p className="text-gray-600">
            Insights, tips, and updates for your NAATI CCL journey.
          </p>
        </header>
        {children}
      </div>
      <Footer />
    </div>
  );
}
