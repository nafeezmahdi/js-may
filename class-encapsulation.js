class Player {
  #monthlySalary;
  #noOfMonths;
  // JavaScript private class fields (introduced in ES2022) allow you to define variables that are only accessible within the class.
  // These fields are marked with #, and they cannot be accessed or modified outside of the class.
  // In this example, #monthlySalary and #noOfMonths are private fields that store the player's salary and the number of months worked, respectively.

  constructor(name, birthday, monthlySalary, noOfMonths) {
    this.name = name;
    this.birthday = birthday;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }
  // name and birthday are public properties (accessible outside the class).
  // #monthlySalary and #noOfMonths are private fields, only accessible within the class.

  calculate_age() {
    const diff_ms = Date.now() - new Date(this.birthday).getTime();
    const age_dt = new Date(diff_ms);
    // console.log(age_dt);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  // new Date(this.birthday).getTime():
  // this.birthday is a string representing the person's birthday (e.g., "1989-02-21").
  // new Date(this.birthday) creates a Date object for that specific birthday. // 1989-02-21T00:00:00.000Z
  // .getTime() returns the timestamp (in milliseconds) for that date, i.e., the number of milliseconds that have passed since January 1, 1970 (known as the Unix Epoch). // 602592000000
  // Date.now() returns the current time (timestamp) in milliseconds since the Unix Epoch.
  // Date.now();  // e.g., returns 1655398400000 (current timestamp)
  // diff_ms = Date.now() - new Date(this.birthday).getTime():
  // This calculates the difference in milliseconds between the current time and the person's birthday.
  // diff_ms will be the number of milliseconds between the current date and the person's birthdate.

  // const age_dt = new Date(diff_ms):
  // This converts the difference in milliseconds (diff_ms) back to a Date object.
  // The Date constructor interprets the milliseconds difference as a duration, not as an actual date.
  // So, age_dt will represent a duration from the Unix Epoch, but we are only interested in the years.

  // age_dt.getUTCFullYear():
  // age_dt.getUTCFullYear() gives the full year of the Date object. However, since we're working with a duration in milliseconds, this will essentially give us the number of years in the diff_ms duration.
  // Example: if diff_ms represents the difference between 1989-02-21 and today, this will return 34 (if the person is 34 years old).

  // Math.abs(age_dt.getUTCFullYear() - 1970):
  // We subtract 1970 because the Date object interprets 1970 as the start of the Unix Epoch.
  // age_dt.getUTCFullYear() will be the number of years since 1970.
  // Math.abs() ensures the result is positive (in case the calculation somehow returns a negative year)

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const mash = new Player("Mash", "1989-02-21", 200000, 12);
const tom = new Player("Tom", "1985-04-12", 160000, 12);

console.log(mash.calculate_age());
console.log(mash.getSalary());
console.log(mash.name);
console.log(tom.calculate_age());
console.log(tom.getSalary());
console.log(tom.birthday);
//mash.name and tom.name are public properties, so they are directly accessible.
// #monthlySalary and #noOfMonths are private and cannot be accessed outside the class
