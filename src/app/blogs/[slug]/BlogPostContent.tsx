'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '@/types/blog';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {post.category}
          </span>
          <time className="text-sm text-zinc-600 dark:text-zinc-400" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="rounded-full object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <div className="font-medium text-zinc-900 dark:text-white">
              {post.author.name}
            </div>
            <div className="text-zinc-600 dark:text-zinc-400">
              {post.author.role}
            </div>
          </div>
        </div>
      </header>

      {post.image && (
        <div className="relative aspect-[16/9] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="rounded-2xl object-cover"
            sizes="(min-width: 1280px) 896px, (min-width: 1024px) 768px, (min-width: 768px) 672px, calc(100vw - 32px)"
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
