// Manually Set this in Callback
// You have a callback function printMessage() that needs a specific this.message. Use .call() to make it work.

function printMessage() {
  console.log(this.message);
}

const context = {
  message: "Hello, from customer context!",
};

printMessage.call(context);
// printMessage is a regular function that uses this.message.
// By default, if you call printMessage() directly, this would refer to the global object (or undefined in strict mode).
// But using .call(context), you manually bind the this keyword to the context object.
