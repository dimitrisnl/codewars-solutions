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

/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)
*/
