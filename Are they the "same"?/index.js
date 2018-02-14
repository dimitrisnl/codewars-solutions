const comp = (array1, array2) => {
  if (!array1 || !array2) return false;

  array1.sort((x, y) => x - y);
  array2.sort((x, y) => x - y);

  return array1.map((x, i) => x * x === array2[i]).every(Boolean);
};
