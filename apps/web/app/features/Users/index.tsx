import type { Users as TUsers } from "@my-database/api";
import { type FC, memo } from "react";

type Props = {
	users: TUsers[];
};
export const Users: FC<Props> = memo(({ users }) => {
	return (
		<>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id} className="grid border">
						<p>ID: {user.id}</p>
						<p>Name: {user.name}</p>
						<p>Age: {user.age}</p>
					</li>
				))}
			</ul>
		</>
	);
});

Users.displayName = "Users";
