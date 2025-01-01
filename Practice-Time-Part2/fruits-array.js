"use strict"


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruits() {
   for (let fruitsIndex = 0; fruitsIndex < fruit.length; fruitsIndex++) {

   if (fruit[fruitsIndex] === "🍎") {
       appleShelf.textContent += "🍎";
    
   }else if(fruit[fruitsIndex] === "🍊"){
       orangeShelf.textContent += "🍊" 
   } 
   }
}
sortFruits();