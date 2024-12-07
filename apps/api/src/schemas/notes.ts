import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { ulid } from "ulidx";

import { z } from "zod";

const STATUS = ["draft", "publish", "unpublish"] as const;

const notes = sqliteTable("notes", {
	id: text().$defaultFn(() => ulid()),
	title: text().notNull(),
	content: text().notNull(),
	status: text("status", { enum: STATUS }).notNull().default("draft"),
	createdAt: integer({ mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: integer({ mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

type Note = typeof notes.$inferSelect;

const insertNoteSchema = createInsertSchema(notes, {
	title: z.string().min(1),
	content: z.string().min(1),
	status: z.enum(STATUS),
});
const selectNoteSchema = createSelectSchema(notes, {
	title: z.string().optional(),
	content: z.string().optional(),
	status: z.enum(STATUS).optional(),
}).partial();

export { notes, insertNoteSchema, selectNoteSchema };
export type { Note };
