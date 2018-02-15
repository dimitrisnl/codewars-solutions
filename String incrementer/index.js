const regex = new RegExp(/(\d+)/g);
const incrementString = str => {
  const numPart = str.match(regex) || null;
  let finalString = '';

  if (numPart) {
    const stringifiedNumbers = numPart[0];
    const resultAsInteger = parseInt(numPart[0]) + 1;
    const leadingZerosNeeded = Math.max(
      0,
      stringifiedNumbers.length - resultAsInteger.toString().length
    );

    const finalNumber = '0'.repeat(leadingZerosNeeded) + resultAsInteger;

    finalString = str.replace(regex, finalNumber);
  }

  return numPart ? finalString : str + 1;
};
