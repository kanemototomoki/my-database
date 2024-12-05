import { Users } from "../features/Users";
import { client } from "../lib/client";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader({ context }: Route.LoaderArgs) {
	const res = await client.users.$get();
	const users = await res.json();
	// return { message: context.VALUE_FROM_CLOUDFLARE };
	
	return { users };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { users } = loaderData;
	return <Users users={users} />;
}
