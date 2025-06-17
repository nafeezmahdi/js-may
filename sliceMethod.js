var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var result1 = numbers.slice();
var result2 = numbers.slice(0, 4);
var result3 = numbers.slice(1, 8);
var result4 = numbers.slice(-7, 8);
var result5 = numbers.slice(-7);
// Array.prototype.slice(start, end)
// Returns a shallow copy of a portion of an array into a new array object.
// The start index is inclusive.
// The end index is exclusive.
// It does not modify the original array.
// Negative indices count from the end of the array.
// numbers.slice(-7, 8)
// -7 means start from length - 7 = 10 - 7 = 3
// So it's slice(3, 8) → index 3 to 7
// numbers.slice(-7)
// Starts from index 3 to end

console.log("Main Array : ");
console.log(numbers);
console.log("Result 1 Array : ");
console.log(result1);
console.log("Result 2 Array : ");
console.log(result2);
console.log("Result 3 Array : ");
console.log(result3);
console.log("Result 4 Array : ");
console.log(result4);
console.log("Result 5 Array : ");
console.log(result5);
