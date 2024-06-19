import { NextResponse } from "next/server";
import { db } from "../../../db";
import { desc } from "drizzle-orm";
import { transactions } from "../../../db/schema";

async function handler(req, res) {
  const transactionData = await db.query.transactions.findMany({
    orderBy: desc(transactions.timestamp),
  });

  return NextResponse.json({ transactions: transactionData }, { status: 200 });
}

export { handler as GET };
