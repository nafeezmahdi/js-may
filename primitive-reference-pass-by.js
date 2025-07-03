// pass by reference / value
// passed by value
// When you pass a primitive type to a function, the value of that variable is copied into the function’s parameter. This means the function works with a copy of the original value, not the original value itself.
let num1 = 10;

let change = (val) => {
  val = 20;
  console.log("Val in C1", val);  // Logs the local value of `val` in the function
};

change(num1); // Pass num1 by value
console.log("Num1 : ", num1); // num1 remains unchanged
// Primitive (number) is passed by value.
// When num1 is passed to change, a copy of the value 10 is passed.
// Modifying val inside the function does not affect num1 outside because only the copy was modified.
// Here, num1 is passed as a value, so a copy of the number (10) is created and assigned to the function parameter val.
// Inside the change function
// val is a copy of num1. When you modify val inside the function (e.g., set it to 20), you're only modifying the local copy of the value, not num1 itself.
// After the function call, num1 remains unchanged because the original value of `num1** wasn't modified by the function.
// JavaScript works with a copy of the value when a primitive is passed to a function. So when you call change(num1), the function gets a new copy of the value (10 in this case) stored in val. Any changes to val do not affect num1 because num1 is separate from val.
// Key point: In the function, you are modifying val, which is a local copy. The original num1 remains unaffected outside the function.

let num2 = {
  num2: 20,
};

let change2 = (val) => {
  val = {};  // Reassigning `val` to a new object
};

change2(num2); // Pass num2 by reference
console.log("Num2 : ", num2); // num2 is unchanged, because `val` was reassigned to a new object
// num2 is an object, which is passed by reference.
// Inside change2, val is assigned a new empty object, which does not affect the original num2 object outside the function.
// When you pass an object or array to a function, JavaScript passes a reference to the same object in memory, not a copy of it.
// This means that any changes to the object's properties inside the function will affect the original object.
// If you reassign the reference inside the function (i.e., assign val to a new object), the reference will now point to this new object, not the original object.
// This does not affect the original object outside the function because the reference is now pointing to something else.
// num2 points to an object in memory { num2: 20 }.
// inside the change2 function:
// val initially points to the same object as num2 (i.e., { num2: 20 }).
// But then val = {} creates a new empty object, and reassigns the val reference to this new object.
// This change only affects val, but does not affect num2 outside because val is now pointing to a new object, and num2 still points to the original object { num2: 20 }.
// Since val was reassigned to a new object inside the function, the original num2 remains unchanged.
// The key point is that val was only reassigned to a new object inside the function, while num2 remains pointing to the original object.

let change3 = (val) => {
  val.num2 = 30; // Modifying the property of the original object
};

change3(num2); // Pass num2 by reference
console.log("Num2 : ", num2);  // The original object is modified
// When you pass an object by reference and modify its properties (like val.num2 = 30), it directly modifies the original object.
// num2 is an object stored in memory, and it has a property num2 with the value 20.
// This means num2 points to a memory location where the object is stored.
// When you pass num2 to the change3 function, you are passing a reference to the original object.
// The val parameter in the change3 function is a reference to the same object that num2 points to, not a copy of the object.
// Here, you modify the num2 property of the object that both val and num2 reference.
// Since val and num2 point to the same object, the modification affects the original object in memory.
// Before: { num2: 20 }
// After: { num2: 30 }
// So when you change val.num2 = 30, it changes the original object because val and num2 are just two names (or references) pointing to the same object in memory.
// After calling change3(num2), the num2 property is changed to 30, and since both val and num2 point to the same object, the object is modified directly.
// When an object is passed to a function, what is actually passed is a reference to the object, not a copy of it.
// Modifying properties of the object inside the function modifies the original object because both the original variable (e.g., num2) and the parameter (e.g., val) point to the same object in memory.

let change4 = (val) => {
  val = val + 20; // Arithmetic operation on the passed value
  console.log("val in C4", val); // Logs the local value of `val`
};

change4(num1); // Pass num1 by value
console.log("Num1 : ", num1); // num1 remains unchanged
// Even though val is modified with an arithmetic operation (val + 20), it does not affect num1 outside the function because num1 is a primitive type passed by value.
