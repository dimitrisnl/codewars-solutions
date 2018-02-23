class Primes {
  static *stream() {
    let counter = 1;

    while (true) {
      counter++;

      if (isPrime(counter)) {
        yield counter;
      }
    }
  }
}

const isPrime = numberToCheck => {
  for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) return false;
  }
  return true;
};
