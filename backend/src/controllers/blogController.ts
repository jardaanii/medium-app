import { Context } from "hono";
import { BlogService } from "../services/blogService";

export class BlogController {
  private blogService: BlogService;

  constructor(databaseUrl: string) {
    this.blogService = new BlogService(databaseUrl);
  }

  async createBlog(c: Context) {
    try {
      const { title, content } = await c.req.json();
      const authorId = c.get("userId");
      const data = await this.blogService.createBlog({
        title: title,
        content: content,
        authorId: authorId,
      });
      return c.json({
        succsess: true,
        message: "Successfully created the blog",
        data: data,
        err: {},
      });
    } catch (error) {
      console.log({ error });
      return c.json(
        {
          data: {},
          succsess: false,
          message: "Not able to create blog",
          err: error,
        },
        500
      );
    }
  }

  async updateBlog(c: Context) {
    try {
      const id = c.req.param("id");
      const { title, content } = await c.req.json();
      const data = await this.blogService.updateBlog({
        id: id,
        title: title,
        content: content,
      });

      return c.json({
        succsess: true,
        message: "Successfully updated the blog",
        data: data,
        err: {},
      });
    } catch (error) {
      console.log({ error });
      return c.json(
        {
          data: {},
          succsess: false,
          message: "Not able to update the blog",
          err: error,
        },
        500
      );
    }
  }

  async getBlog(c: Context) {
    try {
      const id = c.req.param("id");
      const data = await this.blogService.getBlog(id);
      return c.json({
        succsess: true,
        message: "Successfully fetched the blog",
        data: data,
        err: {},
      });
    } catch (error) {
      console.log({ error });
      return c.json(
        {
          data: {},
          succsess: false,
          message: "Not able to get the blog",
          err: error,
        },
        500
      );
    }
  }

  // TODO: Implement Pagination
  async getAllBlogs(c: Context) {
    try {
      const data = await this.blogService.getAllBlogs();
      return c.json({
        succsess: true,
        message: "Successfully fetched the blogssss",
        data: data,
        err: {},
      });
    } catch (error) {
      console.log({ error });
      return c.json(
        {
          data: {},
          succsess: false,
          message: "Not able to fetch all the blogs",
          err: error,
        },
        500
      );
    }
  }
}
