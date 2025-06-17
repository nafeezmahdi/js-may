var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var numbers3 = [10, 20, 30, 40, 50];
var numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// splice(start) → removes from start to end
var result1 = numbers.splice(2); // removes from index 2 to end
// In the case of splice(), the main array does change — unlike slice() which returns a shallow copy without modifying the original array.
// Because splice() modifies the original array in place:
// It removes elements starting from the given index.
// It can also insert elements if you provide additional values.
// 👉 splice() returns a new array containing the removed elements.

console.log("After Splice(2):");
console.log("Result 1 (removed elements):", result1);
console.log("Main Array:", numbers); // changed!

// splice(start, deleteCount)
var result2 = numbers2.splice(3, 2); // remove 2 items from index 3

console.log("\nAfter Splice(3, 2):");
console.log("Result 2 (removed):", result2); // [40, 50]
console.log("Main Array:", numbers2); // [10, 20, 30, 60, 70, 80, 90, 100]

// splice(start, deleteCount, item1, item2, ...)
var result3 = numbers3.splice(2, 1, 999, 888); // remove 1 item at index 2, insert 999 & 888

console.log("\nAfter Splice(2, 1, 999, 888):");
console.log("Result 3 (removed):", result3); // [30]
console.log("Main Array:", numbers3); // [10, 20, 999, 888, 40, 50]

// var numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// splice(start, deleteCount) — start = -3 means count from end (3rd from last)
var result4 = numbers4.splice(-3, 2); // removes 2 elements starting from index 7 (value 80)

console.log("Main Array After Splice(-3, 2):");
console.log(numbers4); // [10, 20, 30, 40, 50, 60, 70, 100]

console.log("Result (Removed Elements):");
console.log(result4); // [80, 90]
