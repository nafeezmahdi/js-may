const myArray = [1, 2, 3, 4, 5];
const myString = "JavaScript is Beautiful";

for (element of myArray) {
  console.log(element);
}
// for...of with Array
// for...of loops through the values of the array.

for (element in myArray) {
  console.log(element);
}
// for...in with Array
// for...in loops through the keys (indexes) of the array.
// Use for...in for objects, and for...of for arrays or strings.

for (element of myString) {
  console.log(element);
}
// for...of with strings loops over each character.
// It treats the string as an iterable of characters.
