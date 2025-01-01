"use strict";
/**
 * @param  {Working with Objects and Function}
  Create a person object that contains three keys: name, age, and county.
 Use yourself as an example to set the values for name, age, and country


 Create a function, logData(), that uses the person object to create a
 string in the following format: "Per is 35 years old and lives in Norway"
Call the logData() function to verify that it works
 */
//Solution
const person = {
  name: "Allen",
// This JavaScript code covers fundamental concepts including object creation, function definition, loop implementation, and conditional statement usage.
  age: 30,
  
  country: "Panama",
};
//Solution
const logData = function () {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old " +
      "and lives in " +
      person.country
  );
};
logData();
/**
 * @param {working with Conditional If/else Statements}

less than 6 years old -> free
6 to 17 years old     -> child discount
18 to 26 years old    -> student discount
27 to 66 years old    -> full price
over 66 years old     -> senior citizen discount
@param CHALLENGE
Create a conditional statement (if/else/else if) that logs out the discount
the passenger will get based upon the value of the age variable
 */

//SOLUTION
let age = 6;
if (age < 6) {
  console.log(" free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 67) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

/** DEC 17 2024
 * @param  {Working with loops}

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let ii = 0; ii < largeCountries.length; ii++) {
  const countries = largeCountries[ii];
  console.log(" - " + countries);
}
/**DEC 18th 2024
 *
You need to help me fixup the largeCountries array so that
 China and Pakistan are added back into their respective places
Use push() & pop() and their counterparts unshift() & shift()
Google how to use unshift() and shift()
 */
let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
//Solution
largeCountries2.pop();
largeCountries2.push("Pakistan");
largeCountries2.shift();
largeCountries2.unshift("China");
console.log(largeCountries2);

/**
 * let dayOfMonth = 31
let weekday = "Friday"
@param CHALLENGE
 If it is Friday the 13th, log out this spooky face: 😱
 Use the logical "AND operator" -> &&
 */
let dayOfMonth = 13;
let weekday = "Friday";
//Solution
if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
}
