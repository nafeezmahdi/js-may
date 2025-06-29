// Function Borrowing from Another Object
// Given:

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };
// const anotherPerson = {
//   firstName: "John",
//   lastName: "Doe"
// };
// Use .call() to invoke fullName() for anotherPerson.

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const anotherPerson = {
  firstName: "John",
  lastName: "Doe",
};

const result = person.fullName.call(anotherPerson);
// person.fullName is a function that uses this to refer to firstName and lastName.
// anotherPerson has those properties (firstName: "John", lastName: "Doe").
// By calling .call(anotherPerson), you're changing the context of this inside fullName to point to anotherPerson.

console.log(result);
