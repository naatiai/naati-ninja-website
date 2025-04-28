export default function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Naati Ninja",
    applicationCategory: "EducationApplication",
    description:
      "Naati Ninja helps you prepare for the NAATI CCL exam with practice tests, vocabulary, tips, and community support.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
    operatingSystem: "Web-based",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500+",
    },
    featureList: [
      "Practice NAATI CCL dialogues",
      "Vocabulary builder",
      "Exam tips and strategies",
      "Community forums",
      "Progress tracking",
      "Expert feedback",
      "Mobile friendly",
      "Affordable pricing",
      "Free resources",
      "Latest NAATI updates",
      "Support for multiple languages",
      "Success stories",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://naatininja.com",
    },
    sameAs: [
      "https://www.instagram.com/naati.ninja",
      "https://www.facebook.com/people/Naati-Ninja/61569638377174/",
      "https://www.youtube.com/@NaatiNinja",
    ],
  };
}

export function generateBlogStructuredData(posts: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Naati Ninja Blog",
    description:
      "Get the latest tips, strategies, and updates for NAATI CCL exam preparation. Read success stories, vocabulary lists, and expert advice from Naati Ninja.",
    url: "https://naatininja.com/blogs",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://naatininja.com/blogs",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "Naati Ninja",
      },
      publisher: {
        "@type": "Organization",
        name: "Naati Ninja",
        logo: {
          "@type": "ImageObject",
          url: "https://naatininja.com/logo.png",
        },
      },
    })),
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Naati Ninja",
  url: "https://naatininja.com",
  description:
    "Prepare for the NAATI CCL exam with practice dialogues, vocabulary, and expert tips from Naati Ninja.",
  logo: {
    "@type": "ImageObject",
    url: "https://naatininja.com/logo.png",
  },
  sameAs: [
    "https://twitter.com/naatininja",
    "https://linkedin.com/company/naatininja",
    "https://www.instagram.com/naatininja/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
  },
};

export const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Naati Ninja Blog",
  description:
    "NAATI CCL exam tips, vocabulary, and preparation resources from Naati Ninja.",
  url: "https://naatininja.com/blogs",
  "@id": "https://naatininja.com/blogs",
  publisher: {
    "@type": "Organization",
    name: "Naati Ninja",
    logo: {
      "@type": "ImageObject",
      url: "https://naatininja.com/logo.png",
    },
  },
};
