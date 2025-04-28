'use client';

import { FiTwitter, FiLinkedin, FiShare2 } from 'react-icons/fi';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareArticle = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600">Share this article:</span>
      <button
        onClick={shareOnTwitter}
        className="text-gray-400 hover:text-blue-500 transition-colors"
        aria-label="Share on Twitter"
      >
        <FiTwitter className="w-5 h-5" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="text-gray-400 hover:text-blue-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin className="w-5 h-5" />
      </button>
      <button
        onClick={shareArticle}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Share"
      >
        <FiShare2 className="w-5 h-5" />
      </button>
    </div>
  );
}
