const maxSequence = arr => {
  let currentSum = 0;

  return arr.reduce((maxSum, number) => {
    currentSum = Math.max(0, currentSum + number);
    return Math.max(currentSum, maxSum);
  }, 0);
};
