// JavaScript is a single-threaded programming language, meaning it has only one call stack and one main thread of execution at any time.

// JavaScript runs on one main thread, handling one task at a time — one line of code after another, sequentially.
// Think of it like a single cashier handling customers one at a time.
// No other task can start until the current one finishes.

// A single thread means the program can do only one thing at a time.
// There is only one path of execution.
// There’s no true parallelism unless using features like Web Workers or async APIs (e.g., setTimeout, fetch, etc.).

// Synchronous means each operation is executed one after another.
// Blocking means:
// If one operation takes time (e.g., 3 seconds), the next operation must wait.
// Nothing else can happen on that thread during that time.

const processOrder = (customer) => {
  // This function simulates processing an order for a customer.
  console.log("Processing order for customer 1"); // Step 2: Log before starting processing.

  // This is a blocking loop that halts the program for about 3 seconds.
  var currentTime = new Date().getTime(); // Get current time in milliseconds.

  // This while loop keeps running until 3 seconds have passed.
  // While it runs, the JavaScript thread is completely blocked — no other code can run.
  while (currentTime + 3000 >= new Date().getTime());

  console.log("Order processed for customer 1"); // Step 3: Log after blocking finishes.
};

// Step 1: Take the order — this will be printed first.
console.log("Take order for customer 1");
// Step 2 & 3: Process the order — this blocks the thread for 3 seconds.
processOrder(); // ⚠️ Blocking call
// Step 4: This line only runs after processOrder() finishes (after 3 seconds).
console.log("Completed order for customer 1");

// Stack Trace Timeline:
// Time	Call Stack
// Start	main()
// Line 1	main() → console.log()
// Line 2	main() → processOrder()
// Inside func	main() → processOrder() [BLOCKED for 3s]
// After wait	main() → console.log()
// Line 3	main() → console.log()
// End	[] (empty)
