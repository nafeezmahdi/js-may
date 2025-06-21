function myFunc(x = 10) {
  return x;
}
// Here, x = 10 sets a default parameter. That means:
// If x is undefined or not passed, it will default to 10.
// If x is any other value (even null or 0), it will use that value.

console.log(myFunc(undefined));
// undefined triggers the default value.
// x = 10
console.log(myFunc(null));
// null is a valid value, not undefined.
// So x = null
console.log(myFunc(50));
// x = 50
console.log(myFunc());
// No argument passed, so it's undefined
// Uses default: x = 10
