import { PrismaClient } from '@prisma/client';
import { authors, blogPosts } from './blogData';

const prisma = new PrismaClient();

// interface AuthorData {
//   id: string;
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
//   credentials: string[];
//   social: {
//     twitter?: string;
//     linkedin?: string;
//     github?: string;
//   };
// }

async function seedDatabase() {
  try {
    // First, seed authors
    for (const author of authors) {
      await prisma.author.upsert({
        where: { id: author.id },
        update: {},
        create: {
          id: author.id,
          name: author.name,
          role: author.role,
          image: author.image,
          bio: author.bio,
          credentials: author.credentials,
          social: author.social,
        },
      });
    }

    // Then, seed blog posts
    for (const post of blogPosts) {
      await prisma.blogPost.upsert({
        where: { id: post.id },
        update: {},
        create: {
          id: post.id,
          host: 'naatininja.com',
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          date: new Date(post.date),
          readTime: post.readTime,
          category: post.category,
          tags: post.tags,
          image: post.image,
          featured: post.featured,
          metaDescription: post.metaDescription,
          authorId: post.author.id,
        },
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Only run if this file is being run directly
if (require.main === module) {
  seedDatabase()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
} 
