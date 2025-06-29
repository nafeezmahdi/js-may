let number = () => 10;
// let number = () => return 10; not working
let print = () => console.log(20);
let addNumber = (a, b) => a + b;

console.log(number());
print();
console.log(addNumber(25, 5));

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    var self = this;
    this.libraries.forEach(function (a) {
      console.log(`${self.name} loves ${a}`);
    });
  },
};
// self = this is used to preserve the outer context.
// Because function (a) {} inside forEach has its own this, so we store the correct one in self.

javascript.printLibraries();

var typescript = {
  name: "TypeScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    // var self = this;
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};
// Arrow functions do not have their own this.
// So this inside the arrow callback refers to typescript object.
// Cleaner and more modern way to access outer this.

typescript.printLibraries();
