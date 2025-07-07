class Car {
  constructor(name, year) {
    this.name = name; // Set the name property of the object
    this.year = year; // Set the age property of the object
  }
  // A class is defined using the class keyword, followed by the class name, and it typically contains:
  // A constructor method: This is used to initialize the object's properties.
  // Instance methods: Functions that belong to the object, and can access and modify the object’s properties.

  run() {
    console.log(this.name + " is running");
  }

  speed(km) {
    console.log(this.name + " is running" + km);
  }
  // You can also pass arguments to class methods and access them using this
}

const bmw = new Car("BMW", 1999);
console.log(bmw);
bmw.run();
bmw.speed("100 km per hour");
