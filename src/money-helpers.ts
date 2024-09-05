export function splitMoneyEvenly(amount: number, split: number): number[] | never {
  if (isNaN(amount) || amount < 1) {
    throw new Error('Amount must be a positive number');
  }

  if (isNaN(split) || split < 1) {
    throw new Error('Split must be a positive number');
  }

  const splitAmounts = [...Array(split).keys()].map(() => Math.floor(amount / split));
  const totalFloored = splitAmounts.reduce((acc, val) => acc + val, 0);
  let splitDifference = amount - totalFloored;

  if (splitDifference === 0) {
    return splitAmounts;
  }

  return splitAmounts.map((splitAmount) => {
    if (splitDifference === 0) {
      return splitAmount;
    }

    splitDifference = splitDifference - 1;
    return splitAmount + 1
  });
}

export function splitMoneyByRatio(amount: number, ratios: number[]): number[] | never {
  return [];
}