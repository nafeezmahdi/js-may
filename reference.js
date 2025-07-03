// reference or object type/values
// --> Object, Array, Function, Date

// Importing Lodash using ES6 syntax
import _ from "lodash";

var person = { name: "Nafeez", age: 25 };
var player = person;
// Reference types (like objects) are assigned by reference.
// player and person now point to the same object.

person.name = "Mahdi";
// Modifying person.name changes both person and player because both variables point to the same object in memory.

console.log("Person : ", person); // { name: "Mahdi", age: 25 }
console.log("Player : ", player); // { name: "Mahdi", age: 25 }
person = {};
// When person = {} is assigned, person is now a new empty object, but player still refers to the original object, so player remains { name: "Mahdi", age: 25 }.
// When you reassign a variable to a new value (in this case, a new object), the reference stored in that variable changes. However, if other variables are still holding references to the original object, they won't be affected by the reassignment.
// When you do person = {};, you create a new empty object and assign it to person. This makes person now point to the new empty object, but player still holds the reference to the original object ({ name: "Mahdi", age: 25 }).

console.log("After Assign New Object");
console.log("Person : ", person); // {}
console.log("Player : ", player); // { name: "Mahdi", age: 25 }

var names = ["Nafeez", "Mahdi"];
var personName = names;
// Arrays are also reference types.
// Initially, both names and personName refer to the same array ["Nafeez", "Mahdi"].

names = [];
// After setting names = [], names points to a new empty array.
// personName still points to the original array, so it retains the values ["Nafeez", "Mahdi"].
// Arrays are reference types as well. Assigning one array to another means both variables point to the same array in memory.

console.log("After Assignment New Array");
console.log("Names : ", names);
console.log("PersonName : ", personName);

var language = {
  name: "JavaScript",
  estd: "1995",
  libraries: ["React", "Vue"],
};

var language2 = { ...language };
// language2 is a shallow copy of language using spread syntax ({ ...language }). This means it creates a new object, but the arrays (like libraries) inside are still shared.
// Shallow copy: When you use the spread syntax, nested objects or arrays are still referenced (not cloned).
// When you create a shallow copy, only the top-level properties are copied to the new object, while nested objects and arrays are shared (i.e., they are still references to the original objects).
//So, when we use the spread syntax ({ ...language }), it creates a new object with the same top-level properties, but any nested properties (like arrays or objects) are still shared between the original and copied objects.
// Top-level properties (name, estd, founder) are copied, so they are independent.
// Nested properties like the libraries array are not copied. Instead, language2.libraries is just a reference to language.libraries. So, changes to language.libraries affect language2.libraries as well.
// Shallow copy copies only the references to nested objects or arrays.
// Changes in the nested objects or arrays (like libraries) will affect both the original and copied object

var language3 = _.cloneDeep(language);
// language3 is a deep copy of language using _.cloneDeep() from Lodash. This creates a completely new object with independent nested objects and arrays.
// Deep copy: A deep copy ensures that nested objects and arrays are also copied, not just the reference.
// In a deep copy, both the top-level properties and nested objects or arrays are completely copied. This means that changes to the original object do not affect the deep-copied object, and vice versa.
// Deep copy creates a completely independent copy of the entire object, including nested objects and arrays.
//Changes in the nested properties (like libraries) in the original object do not affect the deep-copied object.

language.founder = "Brendan Eich";
language.libraries.push("JQuery");

console.log("Language 1 : ", language); // { name: "JavaScript", estd: "1995", libraries: ["React", "Vue", "JQuery"], founder: "Brendan Eich" }
console.log("Language 2 : ", language2); // { name: "JavaScript", estd: "1995", libraries: ["React", "Vue"] }
console.log("Language 3 : ", language3); // { name: "JavaScript", estd: "1995", libraries: ["React", "Vue"] }

// Reference types (Objects/Arrays) are copied by reference: Modifying one affects the other.
// Primitive types (like numbers, strings) are copied by value: Changes do not affect other variables.
// Shallow copy creates a new object, but still shares nested structures like arrays/objects.
// Deep copy creates an entirely independent copy of the object, including all nested structures.
