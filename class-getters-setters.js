class Person {
  constructor(name, age) {
    this._name = name; // `_name` is a private property convention
    this._age = age; // `_age` is a private property convention
  }

  // Getter for the `name` property
  get name() {
    return this._name;
  }
  // Getter: A getter allows you to access a property of an object. It provides a way to retrieve the value of an object's property.

  // Setter for the `name` property
  set name(newName) {
    if (newName === "") {
      console.log("Name cannot be empty");
    } else {
      this._name = newName;
    }
  }
  // Setter: A setter allows you to set the value of an object property. It provides a way to modify or update an object's property.

  // Getter for the `age` property
  get age() {
    return this._age;
  }

  // Setter for the `age` property
  set age(newAge) {
    if (newAge <= 0) {
      console.log("Age must be a positive number");
    } else {
      this._age = newAge;
    }
  }
}

const person = new Person("Alice", 30);

console.log(person.name); // Getter: Access the name property
console.log(person.age); // Getter: Access the age property

person.name = "Bob"; // Setter: Modify the name property
console.log(person.name); // Getter: Access the updated name

person.age = 35; // Setter: Modify the age property
console.log(person.age); // Getter: Access the updated age

person.name = ""; // This will show a warning "Name cannot be empty"
person.age = -5; // This will show a warning "Age must be a positive number"

// Why use Getters and Setters?
// Encapsulation: You can control how properties are accessed and modified. This allows you to validate the data before modifying it.
// Read-only or Write-only: You can make some properties read-only by providing only getters and not setters, or write-only by providing only setters.
// Computed properties: You can use getters to return a computed value based on other internal properties.
