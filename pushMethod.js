const arr = [1, 2, 3];

console.log("Original Array:", arr); // [1, 2, 3]

// Push a single element
arr.push(4);
console.log("After pushing 4:", arr); // [1, 2, 3, 4]
// push() modifies the original array.
// Returns the new length of the array.
// When you push another array (e.g., [7, 8]), it is added as a single element, not merged.

// Push multiple elements
const result = arr.push(50, 60);
console.log("After pushing 50 and 60:", arr); // [1, 2, 3, 4, 50, 60]
console.log(result); // Output: 6
// It returns the new length of the array after adding the elements
// Because there are now 6 elements in the array.

// Push an array as a single element
arr.push([7, 8]);
console.log("After pushing [7, 8]:", arr); // [1, 2, 3, 4, 5, 6, [7, 8]]
