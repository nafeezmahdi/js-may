function myFunc(a, ...params) {
  console.log(arguments);
  // arguments is an array-like object (not an actual array) that contains all the arguments passed to the function.
  console.log(params);
  // params is a rest parameter: it collects all remaining arguments after the first one (a) into a real array.
  // You cannot Use multiple ...rest parameters in one function.
  // You can only have one rest parameter and it must be the last one
  // Place any parameters after a rest parameter (...params must be last)
  // A function cannot have more than one rest parameter, and the rest parameter must be the last in the parameter list.
  console.log(a);
}

myFunc(4, 5, 6);
