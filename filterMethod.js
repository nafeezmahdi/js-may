var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.filter((currentValue, index, arr) => {
  return currentValue > 4;
});
// numbers.filter(...)
// The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
// .filter() does not modify the original array.
// It returns a new array based on the filtering condition.

console.log(numbers);
console.log(result);
