import { Hono } from "hono";
import healthApp from "./routes/health";
import notesApp from "./routes/notes";

export interface Env {
	DB: D1Database;
}

const app = new Hono<{ Bindings: Env }>().basePath("/api");

const healthRoute = app.route("/health", healthApp);
const notesRoute = app.route("/notes", notesApp);

export type AppType = typeof notesRoute | typeof healthRoute;
export default app;

export * from "./schemas";
