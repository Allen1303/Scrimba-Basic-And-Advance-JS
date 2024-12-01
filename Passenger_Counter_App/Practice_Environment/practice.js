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
