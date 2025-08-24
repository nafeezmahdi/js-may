let a = 500,
  b = 600;

console.log("Before Swap : ", a, " ", b);

[a, b] = [b, a];

console.log("After Swap : ", a, " ", b);
