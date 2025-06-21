let num1 = 10;
let num2 = 20;

var number = [1, 2, 3, 4, 5, [300, 500]];

const user = {
  id: 404,
  name: "NM",
  age: null,
  education: {
    degree: null,
  },
};

[num2, num1] = [num1, num2];
const [a, b] = number;
const [, , x, y, z] = number;
const [, , , , , [n, m]] = number;
const { name } = user;
const { name: title } = user;
const { count = 20 } = user;
const {
  education: { degree },
} = user;

console.log(name);
console.log(title);
console.log(degree);
console.log(count);
console.log(a, b, x, y, z, n, m);
console.log(num1, num2);
