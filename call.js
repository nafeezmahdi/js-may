// JavaScript Function call()
// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

// The call() Method with Arguments
// The call() method can accept arguments:

// Example
const person = {
  // It takes two arguments: city and country
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// Use the 'call()' method to execute 'person.fullName'
// but with 'person1' as the value of 'this'
// 'Oslo' and 'Norway' are passed as the function arguments

person.fullName.call(person1, "Oslo", "Norway"); // OUTPUT: John Doe,Oslo,Norway

// call() invokes fullName with:
// this bound to person1
// "Oslo" and "Norway" as arguments
