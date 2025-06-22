// You are given an array of user objects. Each user has a name and an age. Write a function that finds the first user who is at least 18 years old, using the .find() method.

// 🧪 Sample Input:
// const users = [
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 17 },
//   { name: "Tom", age: 19 },
//   { name: "Lucy", age: 21 },
// ];
// 🎯 Expected Output:
// { name: 'Tom', age: 19 }

const users = [
  { name: "Ali", age: 15 },
  { name: "Sara", age: 17 },
  { name: "Tom", age: 19 },
  { name: "Lucy", age: 21 },
];

const result = users.find((currentVale, currentIndex, ara) => {
  return currentVale.age >= 18;
});

console.log(`${result.name} ${result.age}`);
// console.log(result);
