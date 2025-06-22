// ✅ Declare two variables
let num1 = 10;
let num2 = 20;

// ✅ An array with nested array at the end
var number = [1, 2, 3, 4, 5, [300, 500]];

// ✅ An object with nested object inside
const user = {
  id: 404,
  name: "NM",
  age: null,
  education: {
    degree: null,
  },
};

// Swapping values using array destructuring
[num2, num1] = [num1, num2]; // num1 = 20, num2 = 10
const [a, b] = number;
// ✅ Destructure the first two elements from number array
const [, , x, y, z] = number;
// ✅ Skip first 2 values, then extract 3rd, 4th, 5th values
const [, , , , , [n, m]] = number;
// ✅ Access values from the nested array inside number
const { name } = user;
// ✅ Object destructuring: extract 'name' property
const { name: title } = user;
// ✅ Rename 'name' to 'title' using aliasing
const { count = 20 } = user;
// ✅ Set default value for 'count' because it's missing in user
// count = 20 (default used because 'count' does not exist in user)
const {
  education: { degree },
} = user;
// ✅ Destructure nested object: get 'degree' from user.education
// degree = null (because it's explicitly set to null)

console.log(name);
console.log(title);
console.log(degree);
console.log(count);
console.log(a, b, x, y, z, n, m);
console.log(num1, num2);
