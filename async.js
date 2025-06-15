// Function to simulate order processing
const processOrder = (customer) => {
  // Step 2: This gets logged first when the function is called
  console.log("Processing order for customer 1");

  // Step 3: Non-blocking asynchronous timer (handled by Web APIs)
  setTimeout(() => {
    // This part will be executed after 3000ms (3 seconds)
    // It is placed in the callback queue and waits for the call stack to be free
    console.log("Cooking completed");
  }, 3000);
  // functions like setTimeout(), fetch(), and addEventListener() are built-in asynchronous functions in JavaScript, managed by the browser or Node.js environment.
  // setTimeout(), setInterval(), setImmediate(), requestAnimationFrame(), fetch(), Promise.then(), Promise.catch(), async/await, addEventListener(), WebSocket, XMLHttpRequest, process.nextTick(), readFile()

  // Step 4: This runs immediately after setting the timer
  console.log("Order Processed for customer 1");
};

// Step 1: First synchronous log
console.log("Take order for customer 1");
// Step 2: Call the processOrder function
processOrder();
// Step 5: This runs right after processOrder finishes
console.log("Completed order for customer 1");

// Step 6: After 3 seconds, the callback from setTimeout will run:
// Output: "Cooking completed"

// Stack Trace Timeline:
// 🕒 Time	🧠 Call Stack	🧾 Notes
// Start	main()	Script starts execution
// Line 1	main() → console.log()	Logs: "Take order for customer 1"
// Line 2	main() → processOrder()	processOrder is called
// Inside func	main() → processOrder() → console.log()	Logs: "Processing order for customer 1"
// setTimeout setup	main() → processOrder() → setTimeout()	Registers async task (Web API) and sets 3s timer
// After setup	main() → processOrder() → console.log()	Logs: "Order Processed for customer 1"
// Function return	main()	processOrder() finished
// Line 3	main() → console.log()	Logs: "Completed order for customer 1"
// End of sync code	[] (empty)	Call Stack is empty
// After 3s	callback() → console.log()	Logs: "Cooking completed" (handled by Event Loop)
