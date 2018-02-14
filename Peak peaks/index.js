const pickPeaks = arr => {
  const obj = { pos: [], peaks: [] };

  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] <= arr[i - 1]) continue;
    if (arr[i] < arr[i + 1]) continue;
    if (arr[i] < arr[i + 2]) continue;

    const plateau = arr.slice(i + 1, arr.length);
    const areWeStuck = plateau.every(x => x === arr[i]);

    if (!areWeStuck) {
      obj.pos.push(i);
      obj.peaks.push(arr[i]);
    }
  }
  return obj;
};
