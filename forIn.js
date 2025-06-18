const myObj = {
  name: "JavaScript",
  estd: "2023",
  founder: "MM",
};

console.log("🔹 1. Basic for...in (not recommended without hasOwnProperty):");
for (let property in myObj) {
  console.log(`${property}: ${myObj[property]}`);
}
// Iterates over all enumerable properties, including those inherited from the prototype chain.
// Use this with caution — especially in large or extended objects.

console.log("\n🔹 2. for...in with hasOwnProperty():");
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(`${key}: ${myObj[key]}`);
  }
}
// hasOwnProperty(key) ensures you only access own properties of the object.
// This is safer and recommended when using for...in.

console.log("\n🔹 3. Object.entries() with for...of:");
for (const [key, value] of Object.entries(myObj)) {
  console.log(`${key}: ${value}`);
}
// Object.entries(myObj) returns an array of [key, value] pairs.
// This is a clean and modern way to get both key and value in one step.
// Only includes the object’s own enumerable properties (no inheritance issues).

console.log("\n🔹 4. Object.keys() with forEach:");
Object.keys(myObj).forEach((key) => {
  console.log(`Key: ${key}`);
});
// Object.keys() returns an array of all own property keys.
// forEach() runs a callback on each key.
// Only logs the keys, not the values.

console.log("\n🔹 5. Object.values() with forEach:");
Object.values(myObj).forEach((value) => {
  console.log(`Value: ${value}`);
});
// Object.values() returns an array of all own property values.
// forEach() runs a callback on each value.
// Only logs the values, not the keys.
