const divisors = integer => {
  const items = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      items.push(i);
    }
  }
  return items.length > 0 ? items : `${integer} is prime`;
};
