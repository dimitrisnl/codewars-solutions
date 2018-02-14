const createPhoneNumber = numbers =>
  `(${numbers.splice(0, 3).join('')}) ${numbers
    .splice(0, 3)
    .join('')}-${numbers.splice(0, 4).join('')}`;

// shouldn't really mutate the array, but oh well
