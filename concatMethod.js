const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arr4 = [7, 8];

// Concat 2 arrays
const result2 = arr1.concat(arr2);
console.log("Concat 2 Arrays:", result2); // [1, 2, 3, 4]
// concat() does not modify the original arrays.
// It returns a new array with all elements combined.

// Concat 3 arrays
const result3 = arr1.concat(arr2, arr3);
console.log("Concat 3 Arrays:", result3); // [1, 2, 3, 4, 5, 6]

// Concat 4 arrays
const result4 = arr1.concat(arr2, arr3, arr4);
console.log("Concat 4 Arrays:", result4); // [1, 2, 3, 4, 5, 6, 7, 8]

// Original arrays remain unchanged
console.log("Original arr1:", arr1); // [1, 2]
