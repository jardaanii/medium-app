import { Hono } from "hono";
import v1ApiRoutes from "./v1/index";

const apiRoutes = new Hono();

apiRoutes.route("/v1", v1ApiRoutes);

export default apiRoutes;
