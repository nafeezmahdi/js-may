class Car {
  constructor(brand) {
    this.carname = brand;
  }

  static present() {
    return "I have a " + this.carname;
  }
}
let myCar = new Car("Ford");
console.log(Car.present());
