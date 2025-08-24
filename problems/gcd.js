function gcd(num1, num2) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    gcd = num1 % i === 0 && num2 % i === 0 ? i : gcd;
  }

  console.log("GCD of ", num1, " & ", num2, " are : ", gcd);
}

gcd(12, 18);
gcd(12, 28);
gcd(19, 18);
gcd(92, 28);
