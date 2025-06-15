const takeOrder = (customer, callback) => {
  console.log(`Take order for ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Processing order for ${customer}`);

  // Simulates cooking with a 3-second delay (asynchronous)
  setTimeout(() => {
    console.log("Cooking completed");
    console.log(`Order processed for ${customer}`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Completed order for ${customer}`);
};

takeOrder("customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

// Call Stack	Executes all functions. Only one thing at a time.
// Web APIs	Manages async tasks like setTimeout, DOM events, AJAX, etc.
// Callback Queue	Stores callbacks ready to run after async completion.
// Event Loop	Constantly checks if Call Stack is empty, and if yes, it moves callbacks from queue to stack.
