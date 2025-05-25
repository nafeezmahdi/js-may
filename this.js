// What is this?
// In JavaScript, the this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

// this in a Method
// When used in an object method, this refers to the object.
const person = {
  firstName: "Nafeez",
  lastName: "Mahdi",
  id: 256,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getFullName: function () {
    return this.fullName();
  },
};

console.log(person.getFullName());

// this Alone
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

// Example
let xx = this; // In browsers, this === window

// In strict mode, when used alone, this also refers to the global object:
// Example
("use strict");
let xy = this; // Still refers to window in top-level strict mode
// Outside functions (in global scope), this refers to the global object (window in browser).
// But inside functions with strict mode, it becomes undefined.

// this in a Function (Default)
// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:

// Example
function myFunction() {
  return this;
}
// In non-strict mode, this inside a regular function = global object (e.g., window).
// In strict mode, this = undefined.

// this in a Function (Strict)
// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.

// Example
("use strict");
function myFunction() {
  return this; // undefined
}

// this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event:

// Example
<button onclick="this.style.display='none'">Click to Remove Me!</button>;
//  In event handlers, this refers to the element that triggered the event, here the <button>.

// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

const info = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const personX = {
  firstName: "John",
  lastName: "Doe",
};

info.fullName.call(personX); // ✅ "John Doe"

// Function Borrowing
// With the bind() method, an object can borrow a method from another object.
// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

const personY = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = personY.fullName.bind(member); // ✅ "Hege Nilsen"
// bind() creates a new function where this is permanently set to member.
// console.log(fullName);
