"use strict";
/**
 * @param {Variable Exercise}
 */
// Create two variables, firstName and lastName
let firstName = "Allen";
let lastName = "Archer";

// Concatenate the two variables into a third variable called fullName
let fullName = firstName + " " + lastName;
// Log fullName to the console
console.log(fullName);

/** 
 * @param {Function Exercise}
 * @param Challenge
 *  Create a function that logs out "Hi there, Linda!" when called
 */
let name = "Linda";
let greeting = "Hi there";
//SOLUTION
function greet() {
  console.log(greeting + " " + name + "!");
}
greet();
//////////////////////////////////////////////////////////////////////////////////////
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(){
    myPoints+= 3;
}
add3Points()
add3Points()
add3Points()

const remove1Point = () =>{
    myPoints--;
}
remove1Point()
remove1Point()
// Call the functions to that the line below logs out 10
console.log(myPoints)
