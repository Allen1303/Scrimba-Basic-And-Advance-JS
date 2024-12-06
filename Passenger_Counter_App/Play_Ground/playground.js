"use strict";

// let x = "Practice Environment"
// console.log(x);
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
const numberLog = () => {
  console.log(42);
};
numberLog();

// Create a function that logs out the sum of all the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;
//SOLUTION
function lapTime() {
  let totalLapTime = lap1 + lap2 + lap3;
  console.log(totalLapTime);
}
lapTime();

let lapsCompleted = 0;
// Create a function that increments the lapsCompleted variable with one
// Run it three times
//SOLUTION
const lapIncrementor = () => {
  lapsCompleted++;
};
lapIncrementor();
lapIncrementor();
lapIncrementor();
console.log(lapsCompleted);

/** Dec 1st 2024 Exercise
 * @param 
 *  Create two variables, name and greeting. The name variable should store your name,
and the greeting should store e.g. "Hi, my name is "

Create a third variable, myGreeting, that concatenates the two strings
 Log myGreeting to the console
 */
//SOLUTION
let name = "Allen";
let greeting = "Hi, my name is";

let myGreeting = greeting + " " + name + ".";

console.log(myGreeting);
/////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(4 + 5);
console.log("2" + "4");
console.log("5" + 1);
console.log(100 + "100");
//////////////////////////////////////////////////////////////////////////////////////////////////

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
const welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let welcomeName = "Allen";
let welcomeGreeting = "Welcome back ";
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = welcomeGreeting + welcomeName;
console.log(welcomeEl.innerText +="👋🏽" );
//////////////////////////////////////////////////////////////////////////////////////////////////
