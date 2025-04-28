"use client";

import { useEffect, useMemo, useState } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import CategoryFilter from "@/components/blogs/CategoryFilter";
import Pagination from "@/components/blogs/Pagination";
import Newsletter from "@/components/blogs/Newsletter";
import Script from "next/script";
import { generateBlogStructuredData } from "../structured-data";
import { BlogPost as BlogPostType } from "@/data/blogData";
import { createClient } from "@supabase/supabase-js";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blog posts along with author data
        const { data, error } = await supabase
          .from("blogposts")
          .select(
            `
          id,
          host,
          title,
          slug,
          date,
          excerpt,
          content,
          readTime,
          image,
          category,
          metaDescription,
          createdAt,
          authorId,
          author:authors(
            id,
            name,
            bio,
            image,
            role,
            credentials,
            social
          )
        `
          )
          .eq("host", "naatininja.com") // Filter condition
          .order("createdAt", { ascending: true});

        if (error) throw error;

        const typedPosts: BlogPostType[] = data.map((post: any) => ({
          ...post,
          readTime: post.readTime || "3 min read",
          image: post.image || "/images/placeholder.jpg",
          category: post.category || "General",
          metaDescription: post.metaDescription || post.excerpt || "",
          author: {
            id: post.author?.id || "0",
            name: post.author?.name || "Unknown",
            bio: post.author?.bio || "",
            image: post.author?.image || "/images/avatar-placeholder.png",
            role: post.author?.role || "Writer",
            credentials: post.author?.credentials || [],
            social: post.author?.social || {},
          },
        }));

        setBlogPosts(typedPosts);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
        setError("Failed to load blog posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);
  const structuredData = generateBlogStructuredData(blogPosts);

  const filteredPosts = useMemo(() => {
    return regularPosts
      .filter((post) => {
        const matchesTag =
          selectedTag === "all" || post.tags.includes(selectedTag);
        const matchesSearch =
          searchQuery === "" ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
      })
      .sort((a, b) => parseInt(b.id) - parseInt(a.id));
  }, [regularPosts, selectedTag, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <>
      <Script
        id="structured-data-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <section className="relative bg-gradient-to-r from-[#0b8d8c] to-green-700 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fadeIn">
                Essential Insights for NAATI CCL Exam Preparation
              </h1>
              <p className="text-xl text-primary-foreground/90 animate-fadeIn [animation-delay:200ms]">
                Expert tips for Test Day, Mock Tests, and
                Tips to Crack the NAATI CCL Exam.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12">
          {/* Loading or Error State */}
          {loading ? (
            <div className="text-center text-lg text-muted-foreground py-12 animate-pulse">
              Loading blog posts...
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">{error}</div>
          ) : (
            <>
              {/* Search and Filters */}
              <div className="mb-12 space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-96 px-4 py-2 rounded-lg border border-input bg-background"
                  />
                  {/* <CategoryFilter
                    selectedTag={selectedTag}
                    onTagChange={setSelectedTag}
                  /> */}
                </div>
              </div>

              {/* Featured Posts */}
              {currentPage === 1 &&
                !searchQuery &&
                selectedTag === "all" &&
                featuredPosts.length > 0 && (
                  <section className="mb-16 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-foreground mb-8">
                      Featured Articles
                    </h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                      {featuredPosts.map((post, index) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          priority={index === 0}
                          featured={true}
                        />
                      ))}
                    </div>
                  </section>
                )}

              {/* Regular Posts */}
              <section className="mb-16 animate-fadeIn [animation-delay:400ms]">
                {filteredPosts.length > 0 ? (
                  <>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {paginatedPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <div className="mt-12">
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={(page) => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-muted-foreground">
                      No articles found matching your criteria
                    </h3>
                  </div>
                )}
              </section>
            </>
          )}
          {/* Newsletter Section */}
          <section className="animate-fadeIn [animation-delay:600ms]">
            <Newsletter />
          </section>
        </div>
      </div>
    </>
  );
}
