// Simple Greeting with .call()
// Create a function greet() that prints "Hi, I am [this.name]".
// Call this function using .call() on an object like:

// const person = { name: "Alice" };

function greet() {
  return "Hi, I am " + this.name;
}

const person = { name: "Alice" };

console.log(greet.call(person));
