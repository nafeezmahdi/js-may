function divisibleByOthers(num1, num2) {
  if (Math.max(num1, num2) % Math.min(num1, num2) === 0) {
    console.log(
      Math.max(num1, num2),
      " is divisible by ",
      Math.min(num1, num2)
    );
  } else {
    console.log("None of them are divisible by the other.");
  }
}

divisibleByOthers(13, 39);
divisibleByOthers(13, 38);
divisibleByOthers(0, 0);
