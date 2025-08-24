let num = 123;
let sequence = [];

while (num > 1) {
  sequence.push(num);
  // .push() → adds items into an array.

  if (num % 2 === 0) num = num / 2;
  else num = num - 1;
}
sequence.push(1);
console.log("Sequence Array : ", sequence);

console.log("Sequence Number : ", sequence.join(", "));
// .join(", ") → joins array into a string with commas.
