const numbers = [1, 2, 3, 4, 5];

// Use map to create a new array with each element squared
const squares = numbers.map((num) => num * num);
// The map() method is used to transform each element in an array and return a new array with the transformed values.
// map() does not change the original array.
// It returns a new array with the result of applying a function to each element.

console.log("Original Array:", numbers); // ➜ [1, 2, 3, 4, 5]
console.log("Squared Array:", squares); // ➜ [1, 4, 9, 16, 25]

// An object we want to use as 'this' inside the callback function
const multiplierObject = {
  multiplier: 2,
};

// Using map() with all arguments: currentValue, index, array, and thisArg
const result = numbers.map(function (currentValue, index, array) {
  // currentValue: current element in the array
  // index: current index of the element
  // array: the full original array
  // this: refers to multiplierObject because it's passed as thisArg

  // Logging each parameter to understand what's happening
  console.log(`🔹 Value: ${currentValue}, Index: ${index}, Array: [${array}]`);

  // Multiply current value with the multiplier from the thisArg object
  return currentValue * this.multiplier;
}, multiplierObject); // multiplierObject is passed as 'thisArg'

console.log("✅ Result:", result);
