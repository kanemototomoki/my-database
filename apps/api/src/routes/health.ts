import { Hono } from "hono";

const app = new Hono();

const healthApp = app.get("/", (c) => {
	return c.json({
		message: "OK",
	});
});

export default healthApp;
