const generateWinningCombinations = (size, prefix) => {
  const combinations = [];
  for (let i = 0; i < size; i++) {
    const row = Array.from({ length: size }, (_, j) => i * size + j);
    const col = Array.from({ length: size }, (_, j) => i + j * size);
    combinations.push({
      combination: row,
      className: `row-${i + 1}-${prefix}`,
    });
    combinations.push({
      combination: col,
      className: `col-${i + 1}-${prefix}`,
    });
  }
  const diagonal1 = Array.from({ length: size }, (_, i) => i * (size + 1));
  const diagonal2 = Array.from(
    { length: size },
    (_, i) => (i + 1) * (size - 1)
  );

  combinations.push({
    combination: diagonal1,
    className: `dg-row-1-1-${prefix}`,
  });
  combinations.push({
    combination: diagonal2,
    className: `dg-row-1-3-${prefix}`,
  });
  return combinations;
};

export const winningCombinations3x3 = generateWinningCombinations(3, "");

export const winningCombinations4x4 = generateWinningCombinations(4, "4x4");

export const winningCombinations5x5 = generateWinningCombinations(5, "5x5");

export const winningCombinations6x6 = generateWinningCombinations(6, "6x6");

export const winningCombinations7x7 = generateWinningCombinations(7, "7x7");
