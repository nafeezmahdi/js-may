function myFunc(x = 10) {
  return x;
}
// Default Parameter Value: In the function myFunc(x = 10), the parameter x has a default value of 10. This means that if x is not provided when the function is called, x will be assigned the value 10.

console.log(myFunc(5)); // Output: 5
// The argument 5 is passed, so x is set to 5.
// Since x is provided, the default value of 10 is ignored, and the function returns 5.

console.log(myFunc(undefined)); // Output: 10
// When undefined is explicitly passed to the function, JavaScript treats it as if the argument is missing.
// As a result, the default value of 10 will be used because undefined is treated as a "missing argument".
// The function sees undefined as an indicator that no value was provided for x, so it defaults to 10.

console.log(myFunc(null)); // Output: null
// When null is passed, it is not treated as an "undefined" value. null is an actual value, so x will be assigned the value null.
// The default value of 10 is not used because null is explicitly provided, and it's considered a valid argument.
// null is passed explicitly, and since it’s a valid value, it overrides the default parameter value of 10.

//  Key Points:
// The default value is used when no argument is passed or if undefined is explicitly passed.
// null is a valid value, and passing it will override the default value, unlike undefined, which causes the default value to be used.
