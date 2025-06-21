var player1 = "NM";
var player2 = "UHM";

function modifier(strings, ...values) {
  const m = strings.reduce((prev, current) => {
    return prev + current + (values.length ? values.shift() : "");
  }, "");

  return m;
}

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
