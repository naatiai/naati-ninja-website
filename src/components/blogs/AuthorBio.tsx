'use client';

import Image from 'next/image';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Author } from '@/types/blog';

interface AuthorBioProps {
  author: Author;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-12">
      <div className="flex items-start gap-6">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="rounded-full object-cover"
            sizes="80px"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            About {author.name}
          </h3>
          {author.bio && <p className="text-gray-600 mb-4">{author.bio}</p>}
          {author.social && (
            <div className="flex gap-4">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
