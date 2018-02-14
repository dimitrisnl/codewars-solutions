const towerBuilder = nFloors => {
  return Array.from({ length: nFloors }, (v, i) => {
    const spaces = ' '.repeat(nFloors - i - 1);
    spaces + '*'.repeat(i * 2 + 1) + spaces;
  });
};
