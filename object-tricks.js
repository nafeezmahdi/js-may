var nm = 1;

var myObj = {
  name: "JavaScript",
  founder: "JS",
  estd: "1995",
  ranking: 1,
  nm,
  // This shorthand only works when:
  // The variable is already declared
  // You want the key to have the same name as the variable
};

var keys = Object.keys(myObj);
//  Object.keys(myObj)
// Returns an array of property names (keys):
var values = Object.values(myObj);
//  Object.values(myObj)
// Returns an array of property values:
var entries = Object.entries(myObj);
// Object.entries(myObj)
// Returns an array of [key, value] pairs:

console.log(keys);
console.log(values);
console.log(entries);
