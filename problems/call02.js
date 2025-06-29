// Math.max Without Spread
// Can you use .call() to pass an array to Math.max() without using the spread operator?

const result = Math.max.call(null, 10, 23, 20, 15);
// call() lets you manually set the this context of the function you're calling.
// Math.max doesn't use this, so we pass null as the thisArg.
// It demonstrates that Math.max works like a regular function and doesn’t rely on a this context.

console.log(result);
