import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { UserRepository } from "../repository";

export class UserService {
  private userRepository: UserRepository;
  private jwtSecret: string;
  private salt: string;

  constructor(databaseUrl: string, jwt: string, salt: string) {
    this.userRepository = new UserRepository(databaseUrl);
    this.jwtSecret = jwt;
    this.salt = salt;
  }

  private async createToken(email: string): Promise<string> {
    const token = await sign(
      {
        email: email,
      },
      this.jwtSecret
    );

    return token;
  }

  async createUser(userData: {
    email: string;
    password: string;
    name?: string;
  }) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, this.salt);

      const response = await this.userRepository.create({
        email: userData.email,
        password: hashedPassword,
        name: userData.name,
      });
      const token: Promise<string> = this.createToken(userData.email);
      return token;
    } catch (error) {
      console.log("Something is wrong in the service layer create");
      throw new Error("Failed to create user");
    }
  }

  async findUser(userData: { email: string; password: string }) {
    try {
      const { email, password } = userData;
      const response = await this.userRepository.findUser(userData);
      const token: Promise<string> = this.createToken(email);
      return token;
    } catch (error) {
      console.error("User find error:", error);
      if (error instanceof Error) {
        if (error.message === "User not found") {
          throw new Error("Invalid email");
        } else if (error.message === "Invalid password") {
          throw new Error("Invalid password");
        }
      }
      throw new Error("Failed to authenticate user");
    }
  }
}
