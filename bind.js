// JavaScript Function bind()
// Function Borrowing
// With the bind() method, an object can borrow a method from another object.
// The example below creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

Example;
const personX = {
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

// Use bind() to borrow the fullName method from personX,
// but bind it to the 'member' object as 'this'
let fullName = personX.fullName.bind(member); // OUTPUT: "Hege Nilsen"
// bind() does not call the function immediately — it returns a new function where this is permanently set to the given object (member).
// So this.firstName becomes "Hege" and this.lastName becomes "Nilsen" inside the bound function.

// Preserving this
// Sometimes the bind() method has to be used to prevent losing this.
// In the following example, the person object has a display method. In the display method, this refers to the person object:

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

person.display(); // ✅ Works: 'this' refers to 'person'

// When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead:

// Example
const personY = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

setTimeout(personY.display, 3000); // ❌ 'this' is LOST
// ❗ Problem:
// When display is passed to setTimeout, it becomes a standalone function.
// Inside it, this no longer refers to personY; it becomes undefined (in strict mode) or the global object — so this.firstName is undefined.

// The bind() method solves this problem.
// In the following example, the bind() method is used to bind person.display to person.
// This example will display the person name after 3 seconds:

// Example
const personXY = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};

// Bind 'display' to the 'personXY' object so 'this' stays correct
let display = personXY.display.bind(personXY);
setTimeout(display, 3000); // ✅ Displays "John Doe" after 3 seconds
// ✅ Explanation:
// bind() locks this to personXY in the display function.
// Even when display is called by setTimeout, it still uses personXY as this.
// This is especially important when using methods as event handlers or callbacks.

// Bonus Tip:
// Instead of:

setTimeout(person.display, 3000); // ❌ will lose 'this'
// You can always do:

setTimeout(function () {
  person.display();
}, 3000); // ✅ keeps 'this'
// But .bind() is cleaner and more reusable.
