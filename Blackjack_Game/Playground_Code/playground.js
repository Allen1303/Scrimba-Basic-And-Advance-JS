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

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

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
  "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
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
