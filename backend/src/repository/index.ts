import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcryptjs";

export class UserRepository {
  private prisma;

  constructor(databaseUrl: string) {
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: databaseUrl,
        },
      },
    }).$extends(withAccelerate());
  }

  async create(userData: { email: string; password: string; name?: string }) {
    try {
      return await this.prisma.user.create({ data: userData });
    } catch (error) {
      console.error("Database create error:", error);
      throw new Error("Failed to create user in database");
    }
  }

  async findUser(userData: { email: string; password: string }) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: userData.email },
        select: { password: true },
      });
      if (!user) {
        throw new Error("User not found");
      }

      if (!user.password) {
        throw new Error("User password not set");
      }

      const isPasswordValid = await bcrypt.compare(
        userData.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      return true;
    } catch (error) {
      console.error("Database find user error:", error);
      throw new Error("Failed to find user in database");
    }
  }
}
