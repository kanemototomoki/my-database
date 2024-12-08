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
	// @see timestamp https://orm.drizzle.team/docs/guides/timestamp-default-value#sqlite
	createdAt: text("createdAt").notNull().default(sql`(current_timestamp)`),
	updatedAt: text("updatedAt").notNull().default(sql`(current_timestamp)`),
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
