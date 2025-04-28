import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getPost(slug: string) {
  const { data, error } = await supabase
    .from("blogposts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog post:", error);
    return undefined;
  }

  return data;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Naati Ninja Blog",
      description: "The requested blog post could not be found.",
    };
  }

  const ogImage = post.image?.startsWith("http")
    ? post.image
    : `https://naatininja.com${post.image}`;

  return {
    title: `${post.title ?? "Untitled"} | Naati Ninja Blog`,
    description: post.excerpt ?? "",
    keywords: [
      ...(post.tags ?? []),
      post.category ?? "",
      "Naati Ninja",
      "NAATI CCL",
      "Mock Test",
      "Practice Test",
      "Australian PR",
      "Language Test",
    ],
    authors: [{ name: post.authorId }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.authorId],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Naati Ninja",
      locale: "en_AU",
      url: `https://naatininja.com/blogs/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
      site: "@naatininja",
    },
  };
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from("blogposts").select("slug");

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post?.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          {/*<div className="flex items-center">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2">{post.author.name}</span>
          </div>
          <span>•</span>*/}
          <time dateTime={post?.date}>{post?.date}</time>
          <span>•</span>
          <span>{post?.readTime}</span>
        </div>
      </header>

      {post?.image && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post?.image}
            alt={post?.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {/* BLOG Content */}
      <div className="prose lg:prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post?.content}
        </ReactMarkdown>
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {post?.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
      <div className="mt-12 sm:mt-16 text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          Back to Blogs
        </Link>
      </div>
    </article>
  );
}
