let ara = [1, 2, 3, 4, 5];
console.log(ara);

ara.fill(5);
console.log(ara);
// The .fill() method is used to modify all elements of the array ara. The parameter 5 specifies the value that all elements in the array should be set to. So after this operation, every element in the array will be replaced with 5.
// Now, the ara array looks like this: [5, 5, 5, 5, 5]

ara.fill(3, 2, 4);
console.log(ara);
// Here, the .fill() method is used again, but with more specific arguments: 3, 2, and 4.
// The first argument 3 is the value that will replace elements.
// The second argument 2 is the starting index, and the third argument 4 is the ending index (not inclusive).
// So, it will fill the array starting from index 2 (element 3), and up to but not including index 4 (element 4), with 3.
// After this operation, the ara array will look like this: [5, 5, 3, 3, 5].

ara.fill(4, 2, 5);
console.log(ara);
// This is another .fill() method call.
// The value 4 will replace elements.
// The starting index is 2 and the ending index is 5.
// So, it will fill the array starting from index 2 (element 3) and up to but not including index 5 (element 5) with 4.
// =The resulting array is [5, 5, 4, 4, 4].

ara.fill();
console.log(ara);
// This time, the .fill() method is called without any arguments. By default, .fill() will replace all elements of the array with undefined if no value is provided.
// So, the ara array becomes [undefined, undefined, undefined, undefined, undefined].

const array = Array(5).fill(33);
console.log(array);
// This creates a new array array using Array(5), which creates an array with 5 empty slots. Then, the .fill(33) method is used to fill all 5 slots with the value 33.
// The resulting array array is [33, 33, 33, 33, 33].

const newArray = new Array(5).fill(11);
console.log(newArray);
// new Array(5) creates a new array with 5 empty slots. At this point, the array looks like [ <5 empty slots> ].
// .fill(11) fills all the elements in the array with the value 11.
// After this operation, the newArray becomes [11, 11, 11, 11, 11].
