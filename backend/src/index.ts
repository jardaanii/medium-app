import { Hono } from "hono";
import apiRoutes from "./routes/index";

const app = new Hono();

app.route("/api", apiRoutes);

export default app;
