// learning closures with stopwatch

function stopWatch() {
  var startTime = Date.now(); // Capture the current time (in ms) when stopWatch is called

  // Define a nested function that logs the elapsed time
  function getDelay() {
    console.log(Date.now() - startTime); // Calculate and print time difference
  }

  return getDelay;
}

var timer = stopWatch();
// stopWatch() is called and returns the getDelay function.
// timer now holds a reference to getDelay.
// Closure happens here: getDelay remembers the startTime even though stopWatch() has already finished running.

for (var i = 0; i < 100000000; i++) {
  var a = Math.random() * 100000;
}

timer(); // Calls the closure function: logs how much time passed since stopWatch() was first called
console.dir(timer); // Shows the inner structure of the closure function
timer = null; // Remove reference to the closure function (can be garbage collected now)

// Concept	What It Means in Your Code
// Closure	getDelay() "remembers" the startTime from stopWatch()'s scope
// Lexical Scope	Even though stopWatch() is done executing, startTime is still accessible inside getDelay()
// Garbage Collection	Setting timer = null removes the reference to the closure, allowing memory cleanup
// Delayed Execution	getDelay() only runs when explicitly called, but it keeps access to its original variables
