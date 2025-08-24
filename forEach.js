let numbers = [1, 2, 3, 4, 5];
let student = { name: "Rahim", grade: "A", marks: 90 };
let users = [
  { name: "Rahim", age: 20 },
  { name: "Karim", age: 22 },
  { name: "Sumit", age: 25 },
];

numbers.forEach(square);
numbers.forEach(display);

// forEach passes (element, index, array) into the callback
function square(element, index, array) {
  array[index] = Math.pow(element, 2);
}

function display(element) {
  console.log(element);
}

// Here forEach loops through each user object
users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

// Object.entries(student) converts the object into an array of [key, value] pairs
Object.entries(student).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

Object.entries(student);

// This method converts the object into an array of key–value pairs.
// Each pair itself is a small 2-element array: [key, value].
// So the result is:

// [ [ 'name', 'Rahim' ], [ 'grade', 'A' ], [ 'marks', 90 ] ]
