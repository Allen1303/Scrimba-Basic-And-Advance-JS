"use strict";
/**
 * @param  {Working with Objects  and Function}
  Create a person object that contains three keys: name, age, and county.
 Use yourself as an example to set the values for name, age, and country


 Create a function, logData(), that uses the person object to create a
 string in the following format: "Per is 35 years old and lives in Norway"
Call the logData() function to verify that it works
 */
//Solution
const person = {
  name: "Allen",
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
 * @param {working with Conditional Statements}
 
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

if(age < 6){
    console.log(" free");
    
}else if(age < 18){
    console.log("child discount")
    
}else if(age < 27){
    console.log("student discount")
    
}else if(age < 67){
    console.log("full price")
    
}else{
    console.log("senior citizen discount");
}