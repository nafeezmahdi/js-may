// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:
// Block scope
// Function scope
// Global scope

// Block Scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
// Example
{
  let x = 2;
}
// x can NOT be used here

// The behavior of const is very similar to let in terms of block scope, but with one key difference: const is used to declare constants (values that cannot be reassigned).
// Example
{
  const x = 10;
}
// x can NOT be used here

// Variables declared with const are block-scoped, meaning they are only accessible inside the block where they are defined.
// x is only accessible inside the block because const creates a block-scoped variable. Outside the block, x is undefined.
// Although const prevents reassignment of the variable, it doesn't make the value itself immutable. This means you can still modify the properties of an object or modify the contents of an array.

// Variables declared with the var keyword can NOT have block scope.
// Variables declared with the var keyword inside a { } block can be accessed from outside the block.

// Example
{
  var x = 2;
}
// console.log(x);
// x CAN be used here
// var doesn't support block scope — it has Function Scope
// var declared inside a block is accessible outside the block.

// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// Example
// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

// Local variables have Function Scope:
// They can only be accessed from within the function.
// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.

// Function Scope
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

function myFunction() {
  var carName2 = "Volvo"; // Function Scope
}
// console.log(carName2);

function myFunction() {
  let carName3 = "Volvo"; // Function Scope
}
function myFunction() {
  const carName4 = "Volvo"; // Function Scope
}

// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
let carName5 = "Volvo";
// code here can use carName5

function myFunction() {
  // code here can also use carName5
}

// A global variable has Global Scope:
// All scripts and functions on a web page can access it.

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have Global Scope:

// var x = 2; // Global scope
// let x = 2; // Global scope
// const x = 2; // Global scope

// JavaScript Variables
// In JavaScript, objects and functions are also variables.
// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// Automatically Global
// Example
myFunction();

// code here can use carName6
// console.log(carName6);

function myFunction() {
  carName6 = "Volvo Car";
}

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// This code example will declare a global variable carName6, even if the value is assigned inside a function.

// Strict Mode
// All modern browsers support running JavaScript in "Strict Mode".
// In "Strict Mode", undeclared variables are not automatically global.

// Global Variables in HTML
// With JavaScript, the global scope is the JavaScript environment.
// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:

// Example
var carName7 = "Volvo";
// code here can use window.carName7

// Global variables defined with the let keyword do not belong to the window object:

// Example
let carName8 = "Volvo";
// code here can not use window.carName8

// Warning
// Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions).
// Any function, including the window object, can overwrite your global variables and functions.

// The Lifetime of JavaScript Variables
// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

// Function Arguments
// Function arguments (parameters) work as local variables inside functions.
