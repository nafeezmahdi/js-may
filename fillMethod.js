let ara = [1, 2, 3, 4, 5];
console.log(ara);

ara.fill(5);
console.log(ara);

ara.fill(3, 2, 4);
console.log(ara);

ara.fill(4, 2, 5);
console.log(ara);

ara.fill();
console.log(ara);

const array = Array(5).fill(33);
console.log(array);

const newArray = Array(5).fill(11);
console.log(newArray);
