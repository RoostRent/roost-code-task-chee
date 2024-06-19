import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

export const transactions = sqliteTable("transactions", {
  id: text("id").$defaultFn(() => createId()),
  type: text("type").notNull(),
  amount: integer("amount").notNull(),
  currency: text("currency").default("gbp"),
  reference: text("reference").notNull(),
  timestamp: text("timestamp").default(sql`(CURRENT_TIMESTAMP)`),
});

export type Transaction = typeof transactions.$inferSelect; // return type when queried
export type NewTransaction = typeof transactions.$inferInsert;
