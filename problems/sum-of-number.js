let sum = 0,
  num = 123456;

while (num != 0) {
  sum = sum + (num % 10);
  num = Math.floor(num / 10);
}

console.log("Sum : ", Number(sum));
