import { Hono } from "hono";
import { authMiddleware } from "../../middlewares";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  SALT: string;
};

export const v1ApiBlogRoutes = new Hono<{ Bindings: Bindings }>();

v1ApiBlogRoutes.use("/*", authMiddleware);

v1ApiBlogRoutes.post("/blog", (c) => {
  return c.text("You have posted blog successfully");
});

v1ApiBlogRoutes.put("/blog", (c) => {
  return c.text("You have putted the blog up successfully");
});

v1ApiBlogRoutes.get("/blog/:id", (c) => {
  return c.text("You have got the bolg with id successfully");
});

v1ApiBlogRoutes.get("/blog/bulk", (c) => {
  return c.text("You have got the blog  successfully");
});

export default v1ApiBlogRoutes;
