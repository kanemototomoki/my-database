import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle/migrations",
	schema: "./src/schemas",
	dialect: "sqlite",
	driver: "d1-http",
	dbCredentials: {
		accountId: process.env.CLOUDFLARE_ACCOUNT_ID || "",
		databaseId: process.env.CLOUDFLARE_DATABASE_ID || "",
		token: process.env.CLOUDFLARE_D1_TOKEN || "",
	},
	/**
	 * npx drizzle-kit push でエラーが出る
	 * 7500: not authorized: SQLITE_AUTH
	 *
	 * @see https://www.answeroverflow.com/m/1299961218295136277
	 */
	tablesFilter: ["/^(?!.*_cf_KV).*$/"],
});
