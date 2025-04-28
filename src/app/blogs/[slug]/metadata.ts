import type { Metadata } from "next";
import { blogPosts } from "@/data/blogData";

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Naati Ninja Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const ogImage = post.image.startsWith("http")
    ? post.image
    : `https://naatininja.com${post.image}`;

  return {
    title: `${post.title} | Naati Ninja Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      post.category,
      "Naati Ninja",
      "NAATI CCL",
      "Mock Test",
      "Practice Test",
      "Australian PR",
      "Language Test",
      "NAATI CCL Exam",
      "AI Feedback",
      "Free Mock Test"
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://naatininja.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
