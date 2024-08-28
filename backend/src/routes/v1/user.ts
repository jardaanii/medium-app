import { Hono } from "hono";
import { UserController } from "../../controllers/userController";

import { validateSignupInput } from "../../middlewares";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
  SALT: string;
};

export const v1ApiUserRoutes = new Hono<{ Bindings: Bindings }>();

v1ApiUserRoutes.post("/signup", validateSignupInput, async (c) => {
  const controller = new UserController(
    c.env.DATABASE_URL,
    c.env.JWT_SECRET,
    c.env.SALT
  );
  return await controller.signup(c);
});

v1ApiUserRoutes.post("/signin", validateSignupInput, async (c) => {
  const controller = new UserController(
    c.env.DATABASE_URL,
    c.env.JWT_SECRET,
    c.env.SALT
  );
  return await controller.signin(c);
});

export default v1ApiUserRoutes;
