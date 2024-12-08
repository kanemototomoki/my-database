import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { insertNoteSchema, notes, selectNoteSchema } from "../schemas/notes";
import { getDb } from "../utils";

const app = new Hono();

const notesApp = app
	.get("/", zValidator("query", selectNoteSchema), async (c) => {
		const db = getDb(c);
		const result = await db.select().from(notes).execute();

		return c.json(result);
	})
	.post("/", zValidator("json", insertNoteSchema), async (c) => {
		console.log("log test");
		const params = c.req.valid("json");

		const db = getDb(c);
		const result = await db.insert(notes).values(params).execute();

		return c.json(result);
	});

export default notesApp;
