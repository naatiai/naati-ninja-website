export interface Author {
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: Author;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readTime?: string;
}

export interface BlogCategory {
  name: string;
  count: number;
}
