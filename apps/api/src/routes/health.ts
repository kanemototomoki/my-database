import { Hono } from "hono";
import type { Env } from "..";

const app = new Hono<{ Bindings: Env }>();

const healthApp = app.get("/health", (c) => {
	return c.json({
		message: "OK",
	});
});

export default healthApp;
