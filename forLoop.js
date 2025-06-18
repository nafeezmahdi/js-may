let i = 1;

for (; i < 5; i++) {
  console.log(i);
}
console.log(i);

// i is declared before the loop with let
// Since i is declared outside the loop, it is accessible after the loop.
// The final value of i after the loop is 5.
// block (but declared outside loop)

for (let j = 10; j < 15; j++) {
  console.log(j);
}
// console.log(j); showing error

// let and const are block-scoped
// let j = 10 is only accessible inside the for loop block.
// Trying to access j outside the loop gives a ReferenceError.

for (var k = 20; k < 25; k++) {
  console.log(k);
}
console.log(k);

// ✅ var is function-scoped (or globally scoped if outside a function)
// var k = 20 is accessible outside the for loop.
// So console.log(k) after the loop will print 25 (loop ends when k becomes 25).
