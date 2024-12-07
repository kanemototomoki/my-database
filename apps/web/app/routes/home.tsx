import { Notes } from "../features/Notes";
import { client } from "../lib/client";
import type { Route } from "./+types/home";

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader({ context }: Route.LoaderArgs) {
	const res = await client.api.notes.$get({
		query: {},
	});
	const users = await res.json();
	// return { message: context.VALUE_FROM_CLOUDFLARE };

	return { users };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { notes } = loaderData;
	return <Notes notes={notes} />;
}
