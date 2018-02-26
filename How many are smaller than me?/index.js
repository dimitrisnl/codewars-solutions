const smaller = arr => {
  return arr.map((x, index) => {
    let count = 0;

    for (let i = index; i <= arr.length; i++) {
      if (arr[i] < x) count++;
    }

    return count;
  });
};
