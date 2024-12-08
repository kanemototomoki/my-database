
CREATE TABLE `notes` (
	`id` text,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`createdAt` text DEFAULT (current_timestamp) NOT NULL,
	`updatedAt` text DEFAULT (current_timestamp) NOT NULL
);
