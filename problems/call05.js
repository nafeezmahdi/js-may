// Partial Function Call with .call()
// Write a function multiply(a, b) and invoke it with .call() where one argument is fixed and the other varies.

function multiply(a, b) {
  return console.log(a * b);
}

multiply.call(null, 5, 6);
multiply.call(null, 5, 5);
multiply.call(null, 5, 4);
multiply.call(null, 5, 2);
// .call(thisArg, arg1, arg2, ...) invokes a function with a specified this value and arguments.
// In this case, multiply does not use this, so null is fine as the thisArg.
// You're just passing a and b as arguments.
