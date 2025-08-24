let num = 2346167;

let sum = num
  .toString()
  .split("")
  .reduce((acc, value) => acc + Number(value), 0);

//  num.toString() → Converts number 2346167 → "2346167" (string).
// .split("") → Splits string into an array of characters → ["2", "3", "4", "6", "1", "6", "7"]
// .reduce((acc, value) => acc + Number(value), 0) → Starts with accumulator acc = 0. → Iterates through each element (value) and adds it as a number.

console.log("Sum : ", sum);
