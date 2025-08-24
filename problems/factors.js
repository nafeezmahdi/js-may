function displayFactors(num) {
  let factors = [];

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);

  console.log(`The Factors Of ${num} are : ${factors.join(", ")}.`);
}

displayFactors(5);
displayFactors(4);
displayFactors(3);
displayFactors(125);
displayFactors(12);
displayFactors(39);
