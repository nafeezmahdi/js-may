// Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.
var num1 = 2;
var num12 = 5; // This is a new global variable
// Global Scope
// Any variable declared in the global scope can be accessed from anywhere in your code — inside functions, blocks, or other scopes.
// Think of it like a variable that lives “on the top of the world”, visible to everything.

var sum = function () {
  var num2 = 3;
  var num3 = 4;

  return function () {
    return num1 + num2;
    // Here:
    // num1 is declared in the global scope.
    // num2 is declared inside the sum function, so it’s in the local scope of sum.
  };
};

var myFunc = sum();
console.dir(myFunc);
// When you call sum(), it executes and creates num2 and num3.
// Normally, local variables like num2 should disappear after sum() finishes.
// Then it returns the inner function, which references num1 (global) and num2 (local to sum).
// So instead of destroying num2, JavaScript stores it in a special hidden object attached to the inner function’s [[Scopes]].
// 👉 That preserved environment = closure.

//
//
function bankAccount(initialBalance) {
  var balance = initialBalance;

  return function () {
    return balance;
  };
  // This inner function remembers the variable balance, even after bankAccount() has finished running.
  // This inner function references balance from the outer function.
  // Normally, balance would disappear once bankAccount finishes.
  // But because the inner function still needs balance, JavaScript keeps it alive → closure.
}

var account = bankAccount(100);
// account holds that inner function (the closure), and when you call account():
// It returns the remembered value of balance → 100.

console.log(account());

var num3 = 4;
var num4 = 5;

var add = function () {
  return num4 + num3;
};

console.log(add()); // Output: 9 (4 + 5)
console.dir(add); // here  num3=6, num4=7
// DevTools shows a live scope reference to the global object, so expanding it always reveals the latest values. Closures are different — they preserve a specific environment ([[Scopes]] → Closure) even after the outer function ends.

num3 = 6;
num4 = 7;

console.log(add()); // Output: 13 (6 + 7)
console.dir(add); //
// Closures capture references, not values.
// The function add closes over num3 and num4 — it doesn’t store their values, just references them.
// So any changes to num3 or num4 after the function is defined will still be reflected when the function is executed.

let num5 = 6;
let num6 = 66;

var rNum = function () {
  return num5 + num6;
};

console.dir(rNum);

// var globals
// Variables declared with var at the top level become properties of the global object (window in browsers, global in Node.js).
// var → attaches to the global object → [[Scopes]]: Global.

// let and const globals
// Variables declared with let or const at the top level do NOT become properties of the global object.
// Instead, they are stored in a special scope called the Script scope (sometimes called “global lexical environment”).
// let/const → stored in a separate Script scope → [[Scopes]]: Script.
