function gcd(num1, num2) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    gcd = num1 % i === 0 && num2 % i === 0 ? i : gcd;
  }

  return gcd;
}

function lcm(num1, num2) {
  let lcm = Math.abs(num1 * num2) / gcd(num1, num2);
  // Math.abs(...) → take the absolute value, because if one number is negative, the LCM must still be positive.

  console.log("LCM of ", num1, " & ", num2, " are : ", lcm);
}

lcm(12, 18);
lcm(12, 28);
lcm(19, 18);
lcm(92, 28);
