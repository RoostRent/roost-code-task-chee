CREATE TABLE `transactions` (
	`id` text,
	`type` text NOT NULL,
	`amount` integer NOT NULL,
	`currency` text DEFAULT 'gbp',
	`reference` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
