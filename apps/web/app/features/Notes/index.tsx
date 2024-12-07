import type { Note } from "@my-notes/api";
import { type FC, memo } from "react";

type Props = {
	notes: Note[];
};
export const Notes: FC<Props> = memo(({ notes }) => {
	return (
		<>
			<h1>Notes</h1>
			<ul>
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Title
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Content
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Status
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Created At
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Updated At
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{notes.map((note) => (
							<tr key={note.id}>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
									{note.title}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{note.content}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{note.status}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{new Date(note.createdAt).toLocaleString()}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{new Date(note.updatedAt).toLocaleString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</ul>
		</>
	);
});

Notes.displayName = "Notes";
