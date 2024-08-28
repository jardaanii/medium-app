import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const validateSignupInput = async (c: Context, next: Next) => {
  const body = await c.req.json();
  const { email, password } = body;

  if (!email || !password) {
    return c.json(
      {
        status: 400,
        message: "You have credentials missing",
        error: "Email and password are required",
      },
      400
    );
  }

  c.set("validatedInput", { email, password });
  await next();
};

export async function authMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json(
      {
        status: 403,
        message: "The user is not authorized",
        error: "Token is missing from the request",
      },
      403
    );
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return c.json(
      {
        status: 403,
        message: "The user is not authorized",
        error: "Invalid Authorization header format",
      },
      403
    );
  }

  try {
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload || !payload.email) {
      throw new Error("Invalid token payload");
    }

    c.set("userEmail", payload.email);
    await next();
  } catch (error) {
    return c.json(
      {
        status: 403,
        message: "The user is not authorized",
        error: "Invalid or expired token",
      },
      403
    );
  }
}
