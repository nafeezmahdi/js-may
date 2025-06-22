// 🔶 Medium Problem: Find First Palindrome Word
// 🧪 Problem:
// Given an array of strings, find the first word that is a palindrome (reads the same backward as forward).

// 📥 Sample Input:
// const words = ["hello", "world", "level", "test", "civic"];

// 🎯 Expected Output:
// "level"
// ✅ Challenge: Use .find() to solve this. solution

const words = ["hello", "world", "level", "test", "civic"];

const isPalindrome = (word) => {
  return word === word.split("").reverse().join("");
  // word.split("")
  // What it does: Splits the string into an array of individual characters.
  // ➞ ["h", "e", "l", "l", "o"]
  //  .reverse()
  // What it does: Reverses the elements of the array in-place
  // ➞ ["o", "l", "l", "e", "h"]
  // .join("")
  // What it does: Joins all elements of the array back into a string without spaces.
  // ➞ "olleh"
};

const result = words.find(isPalindrome);

console.log(result);
