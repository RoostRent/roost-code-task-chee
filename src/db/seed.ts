import { db } from ".";
import { transactions } from "./schema";
import data from "./seed-data";

const setDate = (timestamp) => {
  const date = new Date();
  const seed = new Date(timestamp);

  date.setTime(seed.getTime());
  date.setFullYear(
    seed.getFullYear() - 1,
    seed.getMonth() + new Date().getMonth(),
    seed.getDate()
  );

  return date.toISOString();
};

const main = async () => {
  console.log("🗑️ Deleting old DB records...");

  await db.delete(transactions);

  console.log("🌱 Inserting seed data...");

  await db.insert(transactions).values(
    data.map(({ timestamp, ...rest }) => ({
      timestamp: setDate(timestamp),
      ...rest,
    }))
  );

  console.log(`✅ DB seed complete, inserted ${data.length} records.`);
};

main();
