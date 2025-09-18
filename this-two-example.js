// implicit binding
// new binding
// window binding
// window binding

// implicit binding
var mahdi = {
  name: "Mahdi",
  age: 26,
  printPlayerName: function () {
    // console.log(this.name);
  },
};

mahdi.printPlayerName();
// mahdi.printPlayerName() is called as a method of the mahdi object.
// In implicit binding, this refers to the object to the left of the dot (.).
// ✅ Here, this → mahdi.

var printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    // console.log(this.name);
  };
};
// printPlayerNameFunction adds a method printPlayerName to any object passed.

var nafeez = {
  name: "Nafeez",
  age: 25,
};

var nm = {
  name: "NM",
  age: 27,
};

printPlayerNameFunction(nafeez);
printPlayerNameFunction(nm);

nafeez.printPlayerName();
nm.printPlayerName();
// The function is now a method of nafeez, so this → nafeez.
// Similarly, nm.printPlayerName() → this → nm.
// ✅ This is still implicit binding, because the object owning the function is on the left of the dot.

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      // console.log(this.name);
    },
    father: {
      name: "Mr. AU",
      printName: function () {
        // console.log(this.name);
      },
    },
  };
};

var NM = Person("Nafeez Mahdi", 28);
// NM is the object returned by Person.
NM.printName();
// printName is a method of NM.
// So, this → NM.
NM.father.printName();
// father is a nested object inside NM.
// printName is a method of father.
// So, this → NM.father (the object to the left of the dot).

// ✅ Key points about implicit binding:
// this always points to the object on the left side of the dot when a function is called as a method.
// obj.method(); // this → obj
// Each nested object has its own this.
// obj.nested.method(); // this → obj.nested
// Returning objects with methods allows you to dynamically control this.

// explicit binding
// This concept allows you to manually set the value of this using the methods .call(), .apply(), and .bind()
var printFullName = function (lastName) {
  // console.log(`${this.name} ${lastName}`);
};

var firstName = {
  name: "Nafeez",
  age: 28,
};

var lastName = "Mahdi";
var lName = [lastName];

// console.log("For Call : ");
printFullName.call(firstName, lastName);
// call() allows you to call a function and explicitly specify the value of this.
// In this case:
// this is set to the firstName object.
// The second argument (lastName) is passed directly as a function argument (not as an array).
// this.name refers to firstName.name, which is "Nafeez".
// lastName is passed as "Mahdi".
// Immediately invokes the function -> You pass arguments separately after this (the first argument).

// console.log("For Apply : ");
printFullName.apply(firstName, lName);
// apply() is similar to call(), but instead of passing the arguments individually, you pass them as an array or array-like object.
// In this case, lName is an array: ["Mahdi"].
// this.name still refers to firstName.name, which is "Nafeez".
// lName is an array containing "Mahdi", which is unpacked and passed as the second argument.
// Immediately invokes the function -> You pass arguments as an array (the second argument).

// console.log("For Bind : ");
var forBind = printFullName.bind(firstName, lastName);
forBind();
// bind() creates a new function with this explicitly set to firstName, and the lastName argument is "pre-filled" (also known as partial application).
// The function is not executed immediately. Instead, it returns a new function (forBind), which you can call later.
// The forBind() call executes the function with this referring to firstName and lastName already passed in.
// Returns a new function with this bound and some arguments preset -> The returned function is executed later when you invoke it.

// new binding
function Person2(name, age) {
  // When the Person function runs:
  // let this = Object.create(null);
  // this refers to the new object being created.
  this.name = name;
  this.age = age;
  // this.name = name; → assigns "Nafeez Mahdi" to this.name of the newly created object.
  // this.age = age; → assigns 28 to this.age of the newly created object.
  // Inside Person, this is pointing to the new object.
  // console.log(`${name} is ${age} years old`);
  // console.log(`${this.name} is ${this.age} years old`);
  // The second console.log() prints this.name and this.age — referring to the newly created object.
  // return this;
  // By default, `this` is returned, so the newly created object is returned.
}

var nAge = new Person2("Nafeez Mahdi", 28);
// The new Person(...) syntax invokes the Person constructor function.
// console.log(nAge);

// window binding
var ThisPrintName = function () {
  console.log(window === this);
  // window === this:
  // In the global context, this refers to the global object, which is window in browsers.
  // So, window === this will evaluate to true.
  console.log(this.name);
  // Since this refers to window, it tries to access window.name.
  // In a browser, window.name is a special property, which is initially an empty string (""), unless you explicitly set it.
  // this.name will therefore log the value of window.name, which is an empty string "" if not set.
};

ThisPrintName();
// ThisPrintName() is invoked globally, meaning it is called in the global scope, not as a method of an object or a class.

// Key Points:
// Window Binding: When you call a function in the global context (like ThisPrintName()), this will refer to the global object (in browsers, it's window).
// Global this: In browsers, the global object is window, so this in global code is equivalent to window.
// this.name: By default, window.name is an empty string "" unless explicitly set.

// In JavaScript, window binding occurs when a function is called in the global context (outside any object or class). In this case, this will refer to the global object.
// In browser environments, the global object is window.
// In Node.js, the global object is global.
