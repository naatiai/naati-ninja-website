import { BlogPost } from "@/data/blogData";

export default function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Naati Ninja",
    url: "https://naatininja.com",
    logo: "https://naatininja.com/logo.png",
    sameAs: [
      "https://twitter.com/naatininja",
      "https://linkedin.com/company/naatininja",
      "https://www.instagram.com/naatininja/",
    ],
    description:
      "Naati Ninja helps you prepare for the NAATI CCL exam with practice tests, vocabulary, tips, and community support.",
  };
}

export function generateBlogStructuredData(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Naati Ninja Blog",
    description:
      "Get the latest tips, strategies, and updates for NAATI CCL exam preparation. Read success stories, vocabulary lists, and expert advice from Naati Ninja.",
    url: "https://naatininja.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "Naati Ninja",
      logo: {
        "@type": "ImageObject",
        url: "https://naatininja.com/logo.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
      image: post.image.startsWith("http")
        ? post.image
        : `https://naatininja.com${post.image}`,
    })),
  };
}
