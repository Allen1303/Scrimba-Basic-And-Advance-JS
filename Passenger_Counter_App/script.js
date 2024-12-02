"use strict";
// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

const countEl = document.getElementById("count-el");
// 1. Grab the save-el paragraph and store it in a variable called saveEl
const saveEl = document.getElementById("save-el");
let count = 0;
const counter = () => {
  count++;
  countEl.textContent = count;
  // console.log(count);
};

// 1. Create a function, save(), which logs out the count when it's called
const save = () => {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let saveCounter = count + " - ";
  // 3. Render the variable in the saveEl using textContent
  saveEl.textContent += saveCounter;
  // NB: Make sure to not delete the existing content of the paragraph
  countEl.textContent = 0;
  count = 0;
};
