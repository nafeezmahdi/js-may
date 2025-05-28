// JavaScript Function apply()
// Method Reuse
// With the apply() method, you can write a method that can be used on different objects.
// The JavaScript apply() Method
// The apply() method is similar to the call() method.
// In this example the fullName method of person is applied on person1:

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// Use 'apply()' to call person.fullName but with 'this' set to person1
// Even though person1 doesn't have the method, it can "borrow" it
console.log(person.fullName.apply(person1)); // OUTPUT: "Mary Doe"

// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// The apply() Method with Arguments
// The apply() method accepts arguments in an array:

// Example
const personX = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// call(): Arguments are passed individually
// apply(): Arguments are passed as an array
// Call personX.fullName with person2 as 'this' and arguments as an array
console.log(personX.fullName.apply(person2, ["Oslo", "Norway"]));
// OUTPUT: "John Doe,Oslo,Norway"

// Simulate a Max Method on Arrays
// You can find the largest number (in a list of numbers) using the Math.max() method:

// Example
// Normally, Math.max takes arguments separately:
Math.max(1, 2, 3); // ✅ returns 3

// ❌ This doesn’t work:
Math.max([1, 2, 3]); // ❌ NaN, because it's a single array argument

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

// Example
//  So we use apply():
Math.max.apply(null, [1, 2, 3]);
// 'null' is used for 'this' but not needed by Math.max
// Output: 3

// The first argument (null) does not matter. It is not used in this example.
// These examples will give the same result:

// You can also pass any value instead of null:
Math.max.apply(Math, [1, 2, 3]); // ✅ 3
Math.max.apply(" ", [1, 2, 3]); // ✅ 3
Math.max.apply(0, [1, 2, 3]); // ✅ 3

// Math.max doesn't use this, so the first argument to apply() can be anything.
// All of these lines return 3, the highest number in the array.

// In modern JavaScript, you can use the spread operator instead of apply():
Math.max(...[1, 2, 3]); // ✅ returns 3
