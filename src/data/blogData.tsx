export interface Author {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  host: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: Author;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  metaDescription: string;
}

export const authors: Author[] = [
  {
    id: "dhruv-oberoi",
    name: "Dhruv Oberoi",
    role: "Co-Founder & Chief Data Officer",
    image: "/dhruv.png",
    bio: "",
    credentials: [""],
    social: {
      linkedin: "https://www.linkedin.com/in/oberoi-dhruv/",
    },
  },
  {
    id: "jeremy-ciaora",
    name: "Jeremy Ciaora",
    role: "Co-Founder & Chief Strategy Officer",
    image: "/jeremy.png",
    bio: "",
    credentials: [""],
    social: {
      linkedin: "https://www.linkedin.com/in/jeremy-ciaora/",
    },
  },
];

export const categories = [];

export const blogPosts: BlogPost[] = [];

export const featuredPosts = blogPosts.filter((post) => post.featured);
export const recentPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
export const popularPosts = [...recentPosts];
