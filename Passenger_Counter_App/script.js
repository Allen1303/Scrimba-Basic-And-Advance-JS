"use strict";
// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
const countEl = document.getElementById("count-el");
let count = 0;
const counter = () => {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
};
counter();
// 1. Create a function, save(), which logs out the count when it's called
const save = () => {
  console.log(count);
};

