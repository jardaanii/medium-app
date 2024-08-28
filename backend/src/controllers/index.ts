import { Context } from "hono";
import { UserService } from "../services";

export class UserController {
  private userService: UserService;

  constructor(databaseUrl: string, jwt: string, salt: string) {
    this.userService = new UserService(databaseUrl, jwt, salt);
  }

  async signup(c: Context) {
    try {
      const { email, password } = c.get("validatedInput");
      const { name } = await c.req.json();
      const response = name
        ? await this.userService.createUser({ email, password, name })
        : await this.userService.createUser({ email, password });

      return c.json({
        succsess: true,
        message: "Successfully created a user",
        token: response,
        err: {},
      });
    } catch (error) {
      console.log({ error });
      return c.json(
        {
          data: {},
          succsess: false,
          message: "Not able to create a user",
          err: error,
        },
        500
      );
    }
  }

  async signin(c: Context) {
    try {
      const { email, password } = c.get("validatedInput");

      const response = await this.userService.findUser({ email, password });
      return c.json({
        succsess: true,
        message: "Successfully signed in the user",
        token: response,
        err: {},
      });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Invalid email") {
          return c.json(
            {
              success: false,
              message: "Invalid email",
            },
            403
          );
        } else if (error.message === "Invalid password") {
          return c.json(
            {
              success: false,
              message: "Invalid password",
            },
            403
          );
        }
      }
      return c.json(
        {
          success: false,
          message: "Authentication failed",
          error: error instanceof Error ? error.message : String(error),
        },
        500
      );
    }
  }
}
