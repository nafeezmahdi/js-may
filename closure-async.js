var a;

function async() {
  a = 20;

  var myFunc = () => {
    console.log(a);
    // Closure here: myFunc “remembers” it should read a from its surrounding scope (global scope)
  };

  setTimeout(myFunc, 4000);
  // → schedules myFunc to run after 4 seconds.
  // → Importantly, setTimeout stores a reference to the function, not its value at this moment.

  console.dir(myFunc);
}

// When myFunc finally runs:
// myFunc doesn’t have its own a.
// It looks into its closure scope → finds a in the global scope.
// At this point, a = 50.
// So it prints: 50

async();

a = 50;
