class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`Person is eating`);
  }
  sleep() {
    console.log(`Person is sleeping`);
  }
  play() {
    console.log(`Person is playing`);
  }
}
// The Person class is a blueprint for creating person objects.
// Constructor: The constructor method is automatically invoked when a new instance of Person is created. It initializes the name and age properties of the object.
// Methods: eat(), sleep(), and play() are instance methods that all instances of Person can call.

const naf = new Person("Naf", 26);
const mah = new Person("Mah", 25);
mah.play();

// new Person("Naf", 26) creates an object with the name "Naf" and age 26, and assigns it to naf.
// new Person("Mah", 25) creates an object with the name "Mah" and age 25, and assigns it to mah.
// These objects are instances of the Person class and have access to all the methods defined in the class.

// The Person class is defined with properties and methods.
// Two Person objects (naf and mah) are created using the new keyword.
// The play() method is called on mah, which results in logging "Person is playing" to the console.

// Class: A class defines the blueprint for creating objects. It can have a constructor (for initializing properties) and methods (to define behaviors).
// new keyword: Used to create an instance of a class.
// Instance Methods: Methods inside a class are available on instances (objects) created from that class.
