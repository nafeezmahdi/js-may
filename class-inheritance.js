class Car {
  constructor(brand) {
    this.carname = brand; // Initialize the `carname` property
  }

  present() {
    return "I have a " + this.carname; // Method to return a string with carname
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Call the parent class's constructor (Car) and initialize `carname`
    this.model = mod; // Initialize `model` property specific to `Model` class
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
  // The show() method calls the inherited present() method from the Car class and adds the model property to the returned string.
}
// Inheritance:
// The Model class extends the Car class, which means Model inherits the properties and methods of Car.
// super(brand): The super keyword calls the constructor of the parent class (Car), initializing the carname property of the Car class with the passed argument brand.

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Calls the show() method from the Model class
console.log(myCar.present()); // Calls the present() method from the Car class

// myCar.show(): This calls the show() method from the Model class.
// The show() method internally calls present(), which comes from the Car class, and appends the model name.
// Output: "I have a Ford, it is a Mustang".

// myCar.present(): This calls the present() method from the Car class, which simply returns "I have a Ford".
// Output: "I have a Ford".
