const alphabetLowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const alphabetUpperCase = alphabetLowerCase.map(x => x.toUpperCase());
const alphabet = [...alphabetLowerCase, ...alphabetUpperCase];

const findMissingLetter = array => {
  const [firstLetter, length] = [array[0], array.length];
  const startInArray = alphabet.indexOf(firstLetter);
  const subArray = alphabet.slice(startInArray, startInArray + length);

  return subArray.filter(x => !array.includes(x))[0];
};
