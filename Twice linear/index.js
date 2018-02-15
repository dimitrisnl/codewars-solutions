/*
  First inefficient approach
*/

const dblLinear = n => {
  let numbers = [1];
  for (let i = 0; i < n - 2; i++) {
    const toSort = [
      numbers[i] * 2 + 1,
      numbers[i] * 3 + 1,
      ...numbers.splice(Math.max(numbers.length - i, 0)),
    ].sort((x, y) => x - y);

    numbers = [...numbers, ...new Set(toSort)];
  }
  return numbers[n];
};

/* 
Faster, but meh
*/
const dblLinear = n => {
  const items = new Set([1]);
  let lastItem = 2;
  let itemsToFind = 1;

  while (true) {
    let parent = null;
    let parentExists = false;

    if ((lastItem - 1) % 2 === 0) {
      parent = Math.floor((lastItem - 1) / 2);
      if (items.has(parent)) parentExists = true;
    }
    if ((lastItem - 1) % 3 === 0) {
      parent = Math.floor((lastItem - 1) / 3);
      if (items.has(parent)) parentExists = true;
    }
    if (parentExists) {
      items.add(lastItem);
      itemsToFind++;
    }

    if (itemsToFind == n + 1) break;
    else lastItem++;
  }
  return lastItem;
};
