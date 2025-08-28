// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// Automatically
// Example

x = 5;
y = 6;
z = x + y;
// console.log(z);
// In this first example x, y, and z are undeclared variables.
// They are automatically declared when first used:

// Example using var

var x = 5;
var y = 7;
var z = x + y;
// console.log(z);

// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

// Example using let

let a = 5;
let b = 8;
let c = a + b;
// console.log(c);

// Example using const

const aa = 5;
const bb = 9;
const ab = aa + bb;
// console.log(ab);

// Mixed Example

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
// console.log(total);

// The two variables price1 and price2 are declared with the const keyword.
// These are constant values and cannot be changed.
// The variable total is declared with the let keyword.
// The value total can be changed.

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.
// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ .
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// JavaScript Data Types
// JavaScript variables can hold numbers like 100 and text values like "John Doe".
// In programming, text values are called text strings.
// JavaScript can handle many types of data, but for now, just think of numbers and strings.
// Strings are written inside double or single quotes. Numbers are written without quotes.
// If you put a number in quotes, it will be treated as a text string.

// Example
const pi = 3.14;
let person1 = "John Doe";
let answer = "Yes I am!";

// One Statement, Many Variables
// You can declare many variables in one statement.
// Start the statement with let and separate the variables by comma:

// Example
let person2 = "John Doe",
  carName = "Volvo",
  price = 200;

// Value = undefined
// In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.
// A variable declared without a value will have the value undefined.
// The variable carName2 will have the value undefined after the execution of this statement:

// Example
let carName2;

// Re-Declaring JavaScript Variables

// Example
var carName3 = "Volvo";
var carName3;
// console.log(carName3);

// If you re-declare a JavaScript variable declared with var, it will not lose its value.
// The variable carName3 will still have the value "Volvo" after the execution of these statements:

// Note
// You cannot re-declare a variable declared with let or const.
// This will not work:

// let carName4 = "Volvo";
// let carName4;

// JavaScript Dollar Sign $
// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

// Example
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
// Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
// In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

// JavaScript Underscore (_)
// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

// Example
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
// Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
