import { Hono } from "hono";
import { authMiddleware } from "../../middlewares";
import { BlogController } from "../../controllers/blogController";
import { createBlogInput, updateBlogInput } from "@trozon/medium-common";
type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  SALT: string;
};

export const v1ApiBlogRoutes = new Hono<{ Bindings: Bindings }>();

v1ApiBlogRoutes.use("/*", authMiddleware);

v1ApiBlogRoutes.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: "Inputs for blog creation are not correct",
    });
  }
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.createBlog(c);
});

//Todo: Add pagination
v1ApiBlogRoutes.get("/bulk", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.getAllBlogs(c);
});

v1ApiBlogRoutes.put("/:id", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      message: "Inputs for blog updation are not correct",
    });
  }
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.updateBlog(c);
});

v1ApiBlogRoutes.get("/:id", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.getBlog(c);
});

export default v1ApiBlogRoutes;
