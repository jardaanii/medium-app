import { Hono } from "hono";
import { UserController } from "../../controllers";
import { validateSignupInput } from "../../middlewares";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  SALT: string;
};

export const v1ApiRoutes = new Hono<{ Bindings: Bindings }>();

v1ApiRoutes.post("/signup", validateSignupInput, async (c) => {
  const controller = new UserController(
    c.env.DATABASE_URL,
    c.env.JWT_SECRET,
    c.env.SALT
  );
  return await controller.signup(c);
});

v1ApiRoutes.post("/signin", validateSignupInput, async (c) => {
  const controller = new UserController(
    c.env.DATABASE_URL,
    c.env.JWT_SECRET,
    c.env.SALT
  );
  return await controller.signin(c);
});

v1ApiRoutes.post("/blog", (c) => {
  return c.text("You have posted blog successfully");
});

v1ApiRoutes.put("/blog", (c) => {
  return c.text("You have putted the blog up successfully");
});

v1ApiRoutes.get("/blog/:id", (c) => {
  return c.text("You have got the bolg with id successfully");
});

v1ApiRoutes.get("/blog/bulk", (c) => {
  return c.text("You have got the blog  successfully");
});
export default v1ApiRoutes;
