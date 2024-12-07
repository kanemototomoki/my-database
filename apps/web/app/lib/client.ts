import type { AppType } from "@my-notes/api";
import { hc } from "hono/client";

export const client = hc<AppType>("http://localhost:8787/");
