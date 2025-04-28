'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/utils/formatDate';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  priority?: boolean;
  featured?: boolean;
}

export default function BlogCard({ post, priority = false, featured = false }: BlogCardProps) {
  const router = useRouter();

  if (!post.image) {
    return null;
  }

  return (
    <div 
      onClick={() => router.push(`/blogs/${post.slug}`)}
      className={`
        group relative overflow-hidden rounded-xl bg-card text-card-foreground shadow-lg 
        hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer
        ${featured ? 'lg:col-span-2' : ''}
      `}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority={priority || featured}
          sizes={featured 
            ? "(min-width: 1280px) 768px, (min-width: 1024px) 576px, (min-width: 768px) 684px, calc(100vw - 32px)"
            : "(min-width: 1280px) 384px, (min-width: 1024px) 288px, (min-width: 768px) 342px, calc(100vw - 32px)"
          }
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          quality={priority || featured ? 85 : 75}
        />
      </div>

      <div className="flex flex-col justify-between gap-4 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {post.category}
            </span>
            <time className="text-sm text-muted-foreground" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>

          <div>
            <h2 className={`
              font-semibold text-foreground group-hover:text-primary transition-colors duration-200
              ${featured ? 'text-2xl sm:text-3xl line-clamp-2' : 'text-xl line-clamp-2'}
            `}>
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-none">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="rounded-full object-cover ring-2 ring-background"
              sizes="40px"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium text-foreground">
              {post.author.name}
            </p>
            <p className="text-muted-foreground">
              {post.author.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
