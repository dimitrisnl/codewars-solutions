const isValidIP = str => {
  const test = str.split('.');

  const hasFourDigits = test.length === 4;
  const isBetweenRange = test.every(x => x >= 0 && x <= 255);
  const hasNoTricks = test.every(x => x.trim().length === x.length);

  return hasFourDigits && isBetweenRange && hasNoTricks;
};

/* RegEx 2 hard 4 me */
