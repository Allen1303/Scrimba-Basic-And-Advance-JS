"use strict";
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

//EXERCISE 1 if Statements
let age = 22;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome!");
}

//EXERCISE 2 if statements
// Check if the person is eligible for a birthday card from the King! (100)

let age2 = 100;

// if less than 100    -> "Not eligible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not eligible, you have already gotten one"

if (age2 < 100) {
  console.log("Not eligible");
} else if (age2 === 100) {
  console.log("Here is your birthday card from the King!");
} else {
  console.log("Not eligible, you have already gotten one");
}
//EXERCISE 3 Arrays

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let personalBio = [
  "Design web applications using JavaScript",
  "Bachelor of Science in Computer Science",
  "Google UX Design Certificate",
];
console.log(personalBio);

//EXERCISE 4 Arrays
let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
console.log(experience[1]);
console.log(experience[2]);
console.log(experience[0]);

/**
 * @param {Exercise 5 using the push() method on arrays}
 * @param Task
 * Push the newMessage to the messages array, and then log out the array
 */

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";
//Solution
messages.push(newMessage);

console.log(messages);

// 3. Log it out to check that you're doing it right
//EXERCISE 6
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let ii = 10; ii < 101; ii += 10) {
  console.log(ii);
}
//EXERCISE 7
let cards = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
let cards = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (let cardsIndex = 0; cardsIndex < cards.length; cardsIndex++) {
  const cardsArr = cards[cardsIndex];
  console.log(cardsArr);
}

/**DEC 15TH 2024
 * @param
 * @param Challenge
 *  Render the sentence in the greetingEl paragraph using a for loop and .textContent
 */
let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let greetingEl = document.getElementById("greeting-el");

//SOLUTION
for (let sentenceIndex = 0; sentenceIndex < sentence.length; sentenceIndex++) {
  greetingEl.textContent += sentence[sentenceIndex];
  console.log(greetingEl.textContent);
}
/** 
 * @param {Creating functions and Conditional Statements}
 
let fastestRace = getFastestRaceTime(console.log(fastestRace)
Write a function that returns the total race time
Call/invoke the function and store the returned value in a new variable
Finally, log the variable out
cmd+d - ctrl+d use to select multiple words at once.
 */
let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

function totalRaceTime() {
  return player1Time + player2Time;
}
let raceTimes = totalRaceTime();
console.log(raceTimes);
/**
 *@param  {Understanding Math.random(), Math.floor() object}
  
 @param What does Math.random() do?
@param Your answer: Math.random() is a JavaScript function method that helps us to generate random numbers and it includes 0 but does not include the number 1 completely. This is because computer logic will never fully count up to 1 as whole number there will always be decimal points.

 @param What does Math.floor() do to positive numbers?

 @param Your answer: Math.floor simply rounds down a number with extra decimal places down to the closest whole number, i.e. Math.floor(3.45632) will become the whole number 3 when we use the Math.floor()function method to it.

 @param Task  
 Create a function, rollDice(), that returns a random number between 1 and 6
 */
//SOLUTION
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  console.log(randomNumber);
}
rollDice();
/**
  * @param {Logical && (and) Operator}

@param Task
Create an if statement that checks that both variables are false.  If so, run the showSolution() function
 */
let hasSolvedChallenge = false;
let hasHintsLeft = false;
//Solution to Task
if (hasSolvedChallenge && hasHintsLeft) {
  showSolution();
}
const showSolution = () => {
  console.log("Showing solution...");
};
/**
 * @param {Logical || (or) Operator}

  @param Challenge
 Create two boolean variables, likesDocumentaries and likesStartups
 Use an OR statement (||) to call recommendMovie() if either of those variables are true
 */
let likesDocumentaries = false;
let  likesStartups = false;
//Challenge Solution
if(likesDocumentaries || likesStartups){
    recommendMovie();
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
/**
 * @param {Working With Objects}
 @param Challenge
 Create an object that represents an airbnb castle listing.
 It should contain at least one boolean, one string, one number, and one array
log out at least two of the keys using the dot notation
 */
//CHALLENGE SOLUTION
const castleObj = {
  ["super host"]: true,
 location: "Galway, Ireland",
 ["cost per night"] : 190,
rooms: ["1 bedroom","2 beds","Private half-bath", ],
 
}
console.log(castleObj.location)
console.log(castleObj["cost per night"]);