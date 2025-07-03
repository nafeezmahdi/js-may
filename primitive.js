// primitive type/value
// --> String, Number, Boolean, Null, Undefined, Symbol
// These are stored by value, which means they are copied directly when assigned to another variable. Any change to the original variable does not affect the copy.

var num1 = 10;
var num2 = num1; // num2 gets a copy of num1's value
num1 = 11; // num1 is changed, but num2 is unaffected
console.log("Num1 : ", num1); // 11
console.log("Num2 : ", num2); // 10
// num2 gets a copy of num1's value (10).
// When num1 is changed to 11, it does not affect num2 because numbers are primitive values.
// Result: num1 is 11, num2 remains 10.

var string1 = "Mahdi";
var string2 = "Nafeez " + string1; // Concatenate string1 with "Nafeez"
string1 = "Nafeez"; // string1 is reassigned
console.log("String1 : ", string1); // "Nafeez"
console.log("String2 : ", string2); // "Nafeez Mahdi"
// String concatenation creates a new string and assigns it to string2.
// Reassigning string1 to "Nafeez" does not change string2, because strings are immutable and primitive values in JavaScript.
// Result: string1 is "Nafeez", string2 is still "Nafeez Mahdi".

var name1 = "Nafeez";
name1.test = "Mahdi"; // Attempt to add a property to a string

console.log(name1); // "Nafeez"
console.dir(name1.charAt(2)); // "f"
// Primitive strings like name1 are immutable.
// When you attempt to add a property (test = "Mahdi") to name1, it does not work because name1 is a primitive value.
// Even though name1 is reassigned, its value remains a string, and trying to add a property to it has no effect.
// name1.charAt(2) is valid and returns the character at index 2 of the string "Nafeez", which is "f".

// Key Takeaways:
// Primitive values are immutable and copied by value.
// When assigning a primitive type (e.g., string, number), the value is copied.
// Changing one variable does not affect the other.
// Strings in JavaScript are primitive types. They cannot have properties or methods added to them, unlike objects.
// When you attempt to add properties to strings (or other primitive types), the operation has no effect because primitive values are immutable.
