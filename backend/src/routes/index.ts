import { Hono } from "hono";
import v1ApiUserRoutes from "./v1/user";
import v1ApiBlogRoutes from "./v1/blog";

const apiRoutes = new Hono();

apiRoutes.route("/v1/user", v1ApiUserRoutes);
apiRoutes.route("/v1/blog", v1ApiBlogRoutes);

export default apiRoutes;
