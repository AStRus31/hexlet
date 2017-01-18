// BEGIN (write your solution here)
export const smallestDivisor = (num) => {
  const iter = (curr, acc) => {
    if (curr === 1) {
      return 1;
    } else if (curr % acc === 0) {
      return acc;
    }

    return iter(curr, acc + 1);
  };

  return iter(num, 2);
};
// END
