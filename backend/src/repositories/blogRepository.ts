import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export class BlogRepository {
  private prisma;

  constructor(databaseUrl: string) {
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    }).$extends(withAccelerate());
  }

  async create(blogData: { title: string; content: string; authorId: string }) {
    try {
      const blog = await this.prisma.post.create({ data: blogData });
      return blog.id;
    } catch (error) {
      console.log("Database create error in  the blog repository:", error);
      throw new Error("Failed to create blog in database");
    }
  }

  async update(blogData: { id: string; title: string; content: string }) {
    try {
      const blog = await this.prisma.post.update({
        where: {
          id: blogData.id,
        },
        data: {
          title: blogData.title,
          content: blogData.content,
        },
      });

      return blog.id;
    } catch (error) {
      console.log("Database update error in the blog repository", error);
      throw new Error("Failed to update the blog in the database");
    }
  }

  async get(blogId: string) {
    try {
      const blog = await this.prisma.post.findFirst({
        where: {
          id: blogId,
        },
        select: {
          content: true,
          title: true,
          id: true,
          author: {
            select: {
              name: true,
            },
          },
          createdAt: true,
        },
      });

      return blog;
    } catch (error) {
      console.log(
        "Database fetching  blog error in the blog repository",
        error
      );
      throw new Error("Failed to get the specificed blog from the database");
    }
  }

  async getAll() {
    try {
      const blogs = await this.prisma.post.findMany({
        select: {
          content: true,
          title: true,
          id: true,
          author: {
            select: {
              name: true,
            },
          },
          createdAt: true,
        },
      });
      return blogs;
    } catch (error) {
      console.log(
        "Database fetching  blogs error in the blog repository",
        error
      );
      throw new Error("Failed to get all the blogs from the database");
    }
  }
}
