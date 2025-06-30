function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}
// Object.create(Person.prototype) creates an object that inherits from Person.prototype.
// The name and age properties are set on the newly created object.
// The object is returned explicitly.

function PersonNew(name, age) {
  //   let person = Object.create(PersonNew.prototype);
  this.name = name;
  this.age = age;

  //   return this;
}
// PersonNew uses the new keyword, which automatically does the following:
// Creates an empty object.
// Sets this to that object.
// Links the new object to the constructor's prototype.
// Returns the newly created object implicitly (even though return this is not needed in this case).

//  The Key Difference:
// Person uses manual object creation (Object.create()), while PersonNew uses constructor function syntax with the new keyword.

Person.prototype = {
  eat() {
    console.log(`Person is eating`);
  },
  sleep() {
    console.log(`Person is sleeping`);
  },
  play() {
    console.log(`Person is playing`);
  },
};

// Both Person and PersonNew have prototypes that contain the shared methods (eat, sleep, play). When you create a new object using either function, the object inherits from these prototypes.

PersonNew.prototype = {
  eat() {
    console.log(`Person is eating`);
  },
  sleep() {
    console.log(`Person is sleeping`);
  },
  play() {
    console.log(`Person is playing`);
  },
};

const naf = Person("Naf", 25);
naf.sleep();
const mah = Person("Mah", 26);
// naf = Person("Naf", 25) creates an object using Object.create() and sets properties name and age but doesn’t use the new keyword.
// Calling naf.sleep() works because naf inherits from Person.prototype.

const newNaf = new PersonNew("Naf", 26);
const newMah = new PersonNew("Mah", 25);
newMah.play();
// newNaf and newMah are created using the new keyword, so they are instances of PersonNew and inherit from PersonNew.prototype.
// Calling newMah.play() works because newMah is properly set up as an object that inherits from PersonNew.prototype.
