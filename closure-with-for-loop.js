// var l;
// let k;

// for (var i = 0; i < 3; i++) {
//   const f = () => {
//     console.log(i); // `i` from outer scope (global or function)
//   };

//   f();
// }

// for (l = 6; l < 9; l++) {
//   const f = () => {
//     console.log(l); // `l` from outer scope
//   };

//   f();
// }

// for (let j = 10; j < 13; j++) {
//   const f = () => {
//     console.log(j); // `j` from outer scope
//   };

//   f();
// }

// for (k = 13; k < 16; k++) {
//   const f = () => {
//     console.log(k); // `k` from outer scope
//   };

//   f();
// }

// var vs let:
// var has function scope (or global scope if not inside a function). It is not block-scoped, so the value of i is shared across all iterations of the loop.
// let has block scope, meaning it gets a new instance for every iteration of the loop. The value of j, k, or l is tied to that specific iteration.

for (let m = 30; m < 33; m++) {
  setTimeout(() => {
    // console.log(m);
  }, 3000);
}

// let m is block-scoped, so each iteration of the loop creates a new instance of m.
// The arrow function in setTimeout forms a closure over this block-scoped m.
// Even though the timeout runs after 3 seconds, the closure "remembers" the value of m for that iteration.
// After 3 seconds, the setTimeout functions execute and print the captured values: 30 31 32

console.log("After for loop with let : ");

for (var n = 35; n < 38; n++) {
  setTimeout(() => {
    // console.log(n);
  }, 3000);
}

console.log("After for loop with var  : ", n);

// var n is function-scoped (or global). It is not block-scoped, so the same n is shared across all iterations.
// The arrow function in setTimeout forms a closure over this single n.
// By the time the timeout runs (after 3 seconds), the loop has already finished, and n has been incremented to 38.
// All closures point to the same n.
// After 3 seconds, all setTimeouts print the final value of n, which is 38: 38 38 38

for (let o = 50; o < 55; o++) {
  const myFunc = () => {
    console.log(o);
  };
  console.log(o);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log("After O : ");

for (var p = 55; p < 59; p++) {
  const myFunc = () => {
    console.log(p);
  };
  console.log(p);
  console.dir(myFunc);
  setTimeout(myFunc, 3000);
}

console.log("After P : ");
