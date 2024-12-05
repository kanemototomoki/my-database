import type { AppType } from "@my-database/api";
import { hc } from "hono/client";

export const client = hc<AppType>("http://localhost:8787/");

