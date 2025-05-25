var num1 = 2;

var sum = function () {
  var num2 = 3;

  return function () {
    return num1 + num2;
    //     Here:
    // num1 is declared in the global scope.
    // num2 is declared inside the sum function, so it’s in the local scope of sum.
  };
};

var myFunc = sum();
console.dir(myFunc);

//
//
function bankAccount(initialBalance) {
  var balance = initialBalance;

  return function () {
    return balance;
  };
  // This inner function remembers the variable balance, even after bankAccount() has finished running.
}

var account = bankAccount(100);
// account holds that inner function (the closure), and when you call account():
// It returns the remembered value of balance → 100.
// console.log(account());

var num3 = 4;
var num4 = 5;

var add = function () {
  return num4 + num3;
};

console.log(add()); // Output: 9 (4 + 5)
console.dir(add);

num3 = 6;
num4 = 7;

console.log(add()); // Output: 13 (6 + 7)
console.dir(add);
// Closures capture references, not values.
// The function add closes over num3 and num4 — it doesn’t store their values, just references them.
// So any changes to num3 or num4 after the function is defined will still be reflected when the function is executed.

let num5 = 6;
let num6 = 66;

var rNum = function () {
  return num5 + num6;
};

console.dir(rNum);
