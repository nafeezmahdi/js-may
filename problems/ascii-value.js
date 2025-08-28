let nam = "Mahdi";

for (let i = 0; i < nam.length; i++) {
  console.log(nam[i], " : ", nam.charCodeAt(i));
  // charCodeAt(index) is a string method in JavaScript that returns the Unicode (ASCII for basic characters) value of the character at a given position in a string.
}

// nam.charCodeAt(i)
// Returns the ASCII/Unicode value of the character at index i.

// For "Mahdi":
// nam.charCodeAt(0) = 77 (M)
// nam.charCodeAt(1) = 97 (a)
// nam.charCodeAt(2) = 104 (h)
// nam.charCodeAt(3) = 100 (d)
// nam.charCodeAt(4) = 105 (i)
