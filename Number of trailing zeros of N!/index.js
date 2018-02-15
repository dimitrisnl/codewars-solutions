const zeros = n => {
  let sum = 0;
  let divider = 5;
  while (true) {
    let multiples = Math.floor(n / divider);

    if (multiples > 0) {
      sum += multiples;
      divider *= 5;
    } else {
      return sum;
    }
  }
};
