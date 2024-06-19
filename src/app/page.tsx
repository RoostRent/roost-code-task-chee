"use client";

import useSWR from "swr";
import type { Transaction } from "../../src/db/schema";

// SWR Fetcher
const fetcher = (...args) => fetch(args[0], args[1]).then((res) => res.json());

const transactionElement = (transaction: Transaction) => {
  const date = new Date(transaction.timestamp as string);
  return (
    <li
      key={transaction.id}
      className="border border-zinc-200 rounded flex gap-4 py-2 px-4 items-center"
    >
      <div className="flex flex-col grow">
        <span className="text-zinc-400 text-sm font-light">
          {date.toLocaleDateString()}{" "}
          {date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <span>{transaction.reference}</span>
      </div>
      <span className="text-lg">
        {transaction.type === "DBT" ? "-" : "+"} £
        {Number(transaction.amount / 100).toFixed(2)}
      </span>
    </li>
  );
};

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/transactions", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto py-12 space-y-8">
      <h1 className="text-4xl">Transactions</h1>
      <ul className="space-y-2 pb-8">
        {data.transactions.map(transactionElement)}
      </ul>
    </div>
  );
}
