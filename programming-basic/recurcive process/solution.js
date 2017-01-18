export const sequenceSum = (begin, end, step) => {
  // BEGIN (write your solution here)
  if (begin > end || step === 0) {
    return 0;
  } else if (begin === end) {
    return begin;
  } else if (step === 1 || step === 2) {
    return begin + step * (Math.floor(end / step) - 1) + sequenceSum(begin, end - step, step);
  } else {
    return begin + step * Math.floor(end / step) + sequenceSum(begin, end - step, step);
  }
  // END
};

//Решая эту задачу я перемудрил. Результат был достигнут, но всё оказалось проще!
//Решение учителя:
/*
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
  */
