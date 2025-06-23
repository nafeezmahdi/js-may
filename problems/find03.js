// Hard Problem: Find Deeply Nested Key Value
// 🧪 Problem:
// Given an array of objects, each object may contain a nested object under details.
// Find the first user whose details.isActive is true.

// 📥 Sample Input:
// const users = [
//   { name: "Alice", details: { isActive: false } },
//   { name: "Bob", details: { isActive: false } },
//   { name: "Carol", details: { isActive: true } },
// ];
// 🎯 Expected Output:
// { name: "Carol", details: { isActive: true } }
// ✅ Challenge: Solve this using .find() only.

const users = [
  { name: "Alice", details: { isActive: false } },
  { name: "Bob", details: { isActive: false } },
  { name: "Carol", details: { isActive: true } },
];

const result = users.find((currentValue) => {
  console.log(currentValue.details.isActive);
  return currentValue.details.isActive === true;
});

console.log(result);
