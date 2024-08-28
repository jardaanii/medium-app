import { BlogRepository } from "../repositories/blogRepository";

export class BlogService {
  private blogRepository: BlogRepository;

  constructor(databaseUrl: string) {
    this.blogRepository = new BlogRepository(databaseUrl);
  }

  async createBlog(blogData: {
    title: string;
    content: string;
    authorId: string;
  }) {
    try {
      const response = await this.blogRepository.create(blogData);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer in createBlog");
      throw new Error("Failed to create a blog");
    }
  }

  async updateBlog(blogData: { id: string; title: string; content: string }) {
    try {
      const response = await this.blogRepository.update(blogData);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer in updateBlog");
      throw new Error("Failed to update the blog");
    }
  }

  async getBlog(blogId: string) {
    try {
      const response = await this.blogRepository.get(blogId);
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer in getBlog");
      throw new Error("Failed to get the blog");
    }
  }

  // TODO: Implement Pagination
  async getAllBlogs() {
    try {
      const response = await this.blogRepository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in the service layer in getAllBlogs");
      throw new Error("Failed to get all the  blogs");
    }
  }
}
