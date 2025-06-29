// Chain Multiple .call() Calls
// Create a chain of function calls using .call() where each function adds a property to this.

function addName() {
  this.name = "Naf";
  return this;
}

function addAge() {
  this.age = 25;
  return this;
}

function addCity() {
  this.city = "Dhaka";
  return this;
}

const context = {};

// addName.call(context);
// addAge.call(context);
// addCity.call(context);

addCity.call(addAge.call(addName.call(context)));
// Step-by-Step Execution:
// ✅ Step 1: addName.call(context)
// this → refers to context
// Adds name: "Naf" to context
// Returns: the same object context
// Now: context = { name: "Naf" }

// ✅ Step 2: addAge.call(...)
// addAge.call(addName.call(context))
// The result of addName.call(context) is passed as this into addAge
// Adds age: 25
// Returns updated context
// Now: context = { name: "Naf", age: 25 }

// ✅ Step 3: addCity.call(...)
// addCity.call(addAge.call(...))
// this is still the same context
// Adds city: "Dhaka"
// addCity does not return anything (implicitly returns undefined)

console.log(context);
// Final: context = { name: "Naf", age: 25, city: "Dhaka" }
