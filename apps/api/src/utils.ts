import type { Context } from "hono";
import { drizzle } from "drizzle-orm/d1";

export const getDb = (c: Context) => drizzle(c.env.DB);
