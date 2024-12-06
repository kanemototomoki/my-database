import { env } from "cloudflare:test";
import app from ".";

describe("Testing My App", () => {
	it("Should put and get the value with KV", async () => {
		const formData = new FormData();
		formData.append(KEY, "foo");
		let req = new Request("http://localhost", {
			method: "PUT",
			body: formData,
		});

		let res = await app.fetch(req, env);
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Success!");

		req = new Request("http://localhost/put");
		res = await app.fetch(req, env);
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Value is foo");
	});
});
