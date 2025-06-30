// Borrow Array Methods for arguments with .call()
// Use .call() to borrow Array.prototype.join and apply it on the arguments object inside a function.

function joinArguments() {
  const result = Array.prototype.join.call(arguments, " - ");
  // call sets the value of this to arguments.
  // join treats arguments like an array.
  // The elements "Apple", "Banana", and "Charry" are joined with " - " in between.
  console.log(result);
}

joinArguments("Apple", "Banana", "Charry");

// arguments is not a real array — it lacks array methods like .join().
// Array.prototype.join.call(arguments, separator) allows you to treat it like an array.
// You can use any other array method similarly (e.g., slice, map, forEach).
