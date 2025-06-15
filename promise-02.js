const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

console.log("Promise-02.js");

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});
// Promise.all waits for both promises to resolve.
// It returns a new Promise that resolves to an array of values when all input promises are resolved.

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
// Promise.race returns the result of the first settled promise (resolved or rejected).
// Since promise1 resolves immediately, this fires almost instantly:
