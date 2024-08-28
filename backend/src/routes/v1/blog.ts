import { Hono } from "hono";
import { authMiddleware } from "../../middlewares";
import { BlogController } from "../../controllers/blogController";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  SALT: string;
};

export const v1ApiBlogRoutes = new Hono<{ Bindings: Bindings }>();

v1ApiBlogRoutes.use("/*", authMiddleware);

v1ApiBlogRoutes.post("/", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.createBlog(c);
});

//Todo: Add pagination
v1ApiBlogRoutes.get("/bulk", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.getAllBlogs(c);
});

v1ApiBlogRoutes.put("/:id", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.updateBlog(c);
});

v1ApiBlogRoutes.get("/:id", async (c) => {
  const controller = new BlogController(c.env.DATABASE_URL);

  return await controller.getBlog(c);
});

export default v1ApiBlogRoutes;
