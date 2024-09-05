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

  return splitAmounts.map((splitAmount) => {
    if (splitDifference === 0) {
      return splitAmount;
    }

    splitDifference = splitDifference - 1;
    return splitAmount + 1
  });
}

export function splitMoneyByRatio(amount: number, ratios: number[]): number[] | never {
  if (isNaN(amount) || amount < 1) {
    throw new Error('Amount must be a positive number');
  }

  if (ratios?.length < 1 || ratios?.length && ratios.some((ratio) => isNaN(ratio) || ratio === 0)) {
    throw new Error('Ratios must contain only positive numbers');
  }

  const ratioTotal = ratios.reduce((acc, val) => acc + val, 0);
  const split = ratios.map((ratio, index) => {
    const percent = ratio / ratioTotal;
    const value = Math.floor(amount * percent);
    return { index, percent, value };
  });
  const splitTotal = split.reduce((acc, val) => acc + val.value, 0);
  const distributedSplit = [];
  let splitDifference = amount - splitTotal;

  split.toSorted((a, b) => b.value - a. value).forEach(({index, value}) => {
    if (splitDifference === 0) {
      distributedSplit[index] = value;
    } else {
      splitDifference = splitDifference - 1;
      distributedSplit[index] = value + 1;
    }
  });

  return distributedSplit;
}