var player1 = "NM";
var player2 = "UHM";

function modifier(strings, ...values) {
  const m = strings.reduce((prev, current) => {
    return prev + current + (values.length ? values.shift() : "");
  }, "");
  // It builds the full string by looping through the strings array and inserting the corresponding values from values using shift() (which removes the first value each time).

  return m;
}

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
// Template Literal
// Used a tagged template with the modifier function:
// modifier`We have ${player1} and ${player2} in our cricket team.`
// This automatically breaks the template into:
// strings: An array of string literals around the expressions
// → ["We have ", " and ", " in our cricket team."]
// values: An array of expressions (variables) used in the template
// → ["NM", "UHM"]
