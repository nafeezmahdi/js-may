var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var result = numbers.findIndex((currentValue, index, arr) => {
  return currentValue > 20;
});
// . findIndex() method:
// The findIndex() method is used to search the array and return the index of the first element that satisfies the provided condition (the condition in the callback function).
// If no element is found that satisfies the condition, findIndex() returns -1.

console.log(result);
