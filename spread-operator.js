var numbers = [1, 2, 3, 4];
var otherNumbers = numbers;
// Reference Assignment
// otherNumbers points to the same array in memory as numbers.
// So any change in numbers will affect otherNumbers.
var newNumbers = [...numbers, 4, 3, 2, 1];
// Creating a new array using the spread operator
// Creates a new array by copying values of numbers and appending extra values.
// newNumbers is now [1, 2, 3, 4, 3, 2, 1]
// It's a completely new array, not linked to numbers.
var addNumbers = [numbers, ...newNumbers];
// Creating a new array using the spread operator
// Creates a new array by copying values of numbers and appending extra values.
// newNumbers is now [1, 2, 3, 4, 3, 2, 1]
// It's a completely new array, not linked to numbers.
// nested array (original reference)
// spread elements
// addNumbers will be affected if you push a new value into numbers — because it holds a reference to the original numbers array inside it.

var myObj1 = {
  x: 1,
  y: 2,
};
var myObj2 = {
  a: 5,
  b: 6,
};

var addObj = {
  ...myObj1,
  myObj2,
};
// The spread ...myObj1 unpacks x and y directly into addObj.
// myObj2 is not spread. It's added as a named property with its own object as a value.
// So myObj2 becomes a nested object inside addObj.
// ...myObj1 spreads (copies) the values of x and y into addObj.
// This is a shallow copy — not a reference.
// ✅ Changes in myObj1 will NOT affect addObj.
// In addObj, myObj2 is referenced — not spread.
// So both addObj.myObj2 and myObj2 point to the same object in memory.
// ✅ Changes in myObj2 WILL affect addObj.myObj2.

numbers.push(5);

console.log("Numbers : ", numbers);
console.log("Others Numbers : ", otherNumbers);
console.log("New Numbers : ", newNumbers);
console.log("Add Numbers : ", addNumbers);
console.log("My Obj1 : ", myObj1);
console.log("My Obj2 : ", myObj2);
console.log("Add Obj : ", addNumbers);
