'use client';

import { useState, useEffect, useRef } from 'react';
import { blogPosts } from '@/data/blogData';

interface CategoryFilterProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

// Get unique tags from blog posts and sort by frequency
const getAllTags = () => {
  const tagCount = new Map<string, number>();
  tagCount.set('all', Infinity); // Ensure 'all' is always first

  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCount.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag);
};

export default function CategoryFilter({ selectedTag, onTagChange }: CategoryFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tags = getAllTags();

  // Split tags into primary (most used) and secondary (rest)
  const primaryTags = tags.slice(0, 6); // Show top 6 tags
  const secondaryTags = tags.slice(6);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Primary Tags */}
      {primaryTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${selectedTag === tag
              ? 'bg-gradient-to-r from-[#0b8d8c] to-[#f7941e] text-primary-foreground shadow-md'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }
          `}
        >
          {tag === 'all' ? 'All Posts' : tag}
        </button>
      ))}

      {/* More Tags Dropdown */}
      {secondaryTags.length > 0 && (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="
              px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              bg-secondary text-secondary-foreground hover:bg-secondary/80
              flex items-center gap-1
            "
          >
            More
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="
              absolute z-10 mt-2 w-48 rounded-lg bg-card shadow-lg ring-1 ring-black/5
              overflow-hidden animate-fadeIn [animation-duration:150ms]
            ">
              <div className="py-1">
                {secondaryTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      onTagChange(tag);
                      setIsDropdownOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 text-sm text-left transition-colors duration-200
                      ${selectedTag === tag
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
