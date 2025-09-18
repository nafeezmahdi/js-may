function apiFunction(url) {
  // here its like var url = url
  fetch(url).then((res) => {
    console.log(res);
    console.log(url);
  });

  // url in the then() function is a closure.
  // The inner function (the one inside .then()) doesn't have access to url directly within its own scope.
  // But, it "remembers" the url value from the outer apiFunction function. This is closure behavior.
  // Even after apiFunction finishes executing, the inner function still has access to the url variable because it has been captured in the closure.
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");

console.log("Closure With Fetch");

// Visualizing the Closure
// When apiFunction("https://jsonplaceholder.typicode.com/todos/1") is called, the following happens:
// The outer function apiFunction starts executing, and url is stored in its scope.
// The inner function (the one inside .then()) gets created, and it remembers the url from its outer scope (due to the closure).
// When the fetch resolves and the .then() function runs, the inner function still has access to the url value.
