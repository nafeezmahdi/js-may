function isPrime(num) {
  if (num <= 1) return console.log(num, " Is Composite"); // 0, 1, negatives are not prime
  if (num === 2) return console.log(num, " Is Prime"); // 2 is the smallest prime
  if (num % 2 === 0) return console.log(num, " Is Composite"); // even numbers >2 are not prime

  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return console.log(num, " Is Composite");
    }
  }
  return console.log(num, " Is Prime");
}

// Why go only up to Math.sqrt(num)?
// If a number n has a factor, it must be paired with another factor.
// Example: 36 → pairs are (1,36), (2,18), (3,12), (4,9), (6,6).
// Notice that after 6 (which is √36), factors start repeating in reverse.
// So it’s enough to check divisibility up to √n. ✅

// Why increment by 2 (i += 2)?
// All even numbers greater than 2 are not prime (they’re divisible by 2).
// So we can skip even numbers and check only odd numbers: 3, 5, 7, 9, 11, ....
// This cuts the work in half and makes the algorithm faster.

isPrime(12); // Composite
isPrime(1009); // Prime
isPrime(37); // Prime
isPrime(39); // Composite
