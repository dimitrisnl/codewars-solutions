const solve = arr => {
  return arr
    .map(x => {
      return { value: x, count: arr.filter(y => x === y).length };
    })
    .sort(
      (x, y) => (x.count !== y.count ? y.count - x.count : x.value - y.value)
    )
    .map(x => x.value);
};
