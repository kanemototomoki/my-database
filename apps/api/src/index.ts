import { zValidator } from "@hono/zod-validator";
import { drizzle } from "drizzle-orm/d1";
import { createInsertSchema } from "drizzle-zod";
import { Hono } from "hono";
import { z } from "zod";
import { users } from "./db/schema";

export interface Env {
	DB: D1Database;
}

const insertUserSchema = createInsertSchema(users, {
	age: z.coerce.number().int().positive(),
});

type Users = z.infer<typeof insertUserSchema>;

const app = new Hono<{ Bindings: Env }>()
	.post("/users", zValidator("form", insertUserSchema), async (c) => {
		console.log("log test");
		const params = c.req.valid("form");

		const db = drizzle(c.env.DB);
		const result = await db.insert(users).values(params).execute();

		return c.json(result);
	})
	.get("/users", async (c) => {
		const db = drizzle(c.env.DB);
		const result = await db.select().from(users).execute();

		return c.json(result);
	})
	.get("/health", (c) => {
		return c.json({
			message: "OK",
		});
	});

export type AppType = typeof app;
export default app;
export { app, type Users };
