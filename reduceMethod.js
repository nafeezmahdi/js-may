// ✅ 1. Step-by-step Sum with Logs
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(`Step ${index}: Acc = ${accumulator}, Current = ${currentValue}`);
  return accumulator + currentValue;
}, 0); // 👈 This is the initial value of the accumulator
// accumulator: Holds the running total(previous value).
// currentValue: The value currently being processed.
// index: The index of the current element.
// array: The original array.
// The reduce() method returns a single value, which is the final value of the accumulator after processing all elements of the array.
// reduce() is a non-mutating method — it does not modify the original array.
// The second argument to reduce() is the initial value of the accumulator.
// In this case, it's 0, so the summation starts at 0.

// console.log("✅ Total Sum (with steps):", total);
// console.log("------------------------------------------------");

// ✅ 2. Simple Sum of numbers
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log("1️⃣ Simple Sum:", sum);

// ✅ 3. Finding maximum value
const max = nums.reduce((acc, val) => (val > acc ? val : acc), nums[0]);
console.log("2️⃣ Max Value:", max);
// Compares each number with the current max (acc).
// Keeps the largest value seen so far.
// Starts from the first value in the array (nums[0] = 1).

// ✅ 4. Flattening a 2D array
const nestedArray = [[1, 2], [3, 4], [5]];
const flat = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log("3️⃣ Flattened Array:", flat);
// Merges all sub-arrays into one flat array.
// acc starts as an empty array [].
// acc.concat(val) joins the current sub-array (val) into the accumulator (acc).
// Each sub-array (val) is concatenated.
// Step-by-step:
// Start: acc = []
// 1st iteration: [] .concat([1, 2]) → [1, 2]
// 2nd iteration: [1, 2] .concat([3, 4]) → [1, 2, 3, 4]
// 3rd iteration: [1, 2, 3, 4] .concat([5]) → [1, 2, 3, 4, 5]

// ✅ 5. Counting occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("4️⃣ Fruit Count:", count);
// Creates an object where keys are fruit names and values are their counts.
// If a fruit is already in acc, increment its count. Else, start at 1.

// ✅ 6. Converting array to object
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const userMap = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log("5️⃣ User Map:", userMap);
// Converts array of objects into a map/object.
// Keys are id, and values are name.

// ✅ 7. Creating a sentence from array
const words = ["Hello", "world", "!"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log("6️⃣ Sentence:", sentence);
// Joins all words into a sentence string.
// Starts with "Hello" as the initial accumulator (by default).
