var numbers = [1, 2, 3, 4, 5, 6, 10];

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    console.log("Find");
  }

  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      this.test();
      //  Calls the find() method on this array. The find() method is used with a callback function that calls this.test().
    }, this);
    // The second argument in find() (this) is important because it sets the this context inside the callback function.
    // this inside find() is passed from the exampleFunction() call, which refers to the student object.
    // So, this.test() refers to the test() method of the student object and will log "Find".
  }
}

var result = numbers.find(function (currentValue, currentIndex, ara) {
  return currentValue > 4;
}, this);
// numbers.find() searches the array for the first element that satisfies the given condition.
// The callback function is passed to find(). It has three arguments:
// currentValue: The current element being processed.
// currentIndex: The index of the current element.
// ara: The entire array being searched.

console.log(result);
console.log(numbers);
// Numbers array remains the same because the find() method does not modify the array. It only returns the first element that satisfies the condition. It does not change or mutate the original array.

let student = new Student("Nafeez", 25);

student.exampleFunction();
