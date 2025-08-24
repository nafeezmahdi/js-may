let headerElement = document.getElementById("header");
headerElement.textContent = "To-Do Apps";
headerElement.innerText = "To-Do Apps";

// Key Difference:
// textContent → Returns/sets all the text inside the element (ignores styling, hidden text).
// innerText → Similar, but it respects CSS (hidden elements, line breaks).

console.log(headerElement.textContent);
// headerElement.textContent;
// Returns all the text content inside the element.
// Ignores styling, takes the raw text exactly as in HTML.
// Here: "To-Do App"

console.log(headerElement.innerText);
// headerElement.innerText
// Similar to textContent, but respects CSS (like display:none or visibility:hidden) and normalizes spacing/line breaks.
// innerText → is rendered text as it appears on the page, which means it applies CSS styles like text-transform: uppercase.the browser visually renders "To-Do Apps" as TO-DO APPS, and innerText picks up exactly that.

console.log(headerElement.innerHTML);
// headerElement.innerHTML
// Returns the raw HTML markup inside the element.
// Since your <h1> contains only plain text (no nested tags), the output is the same as above: "To-Do Apps"

// 📌 Key Rule of Thumb:
// textContent → raw text (ignores CSS, hidden text included).
// innerText → what you see in the browser after CSS is applied.
// innerHTML → raw HTML inside the element.

console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("img"));

console.log(document.querySelector(".header"));
console.log(document.querySelector("#new-task"));

console.log(document.querySelectorAll(".item"));
