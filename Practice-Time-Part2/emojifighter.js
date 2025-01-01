"use strict";

/**DEC 20th 2024
 * @param {Working with Math.random and Arrays}
@param CHALLENGE
// Create a function that returns a random item from the array
 */
let hands = ["rock", "paper", "scissor"];
//Solution
const randomHands = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
console.log(randomHands(hands));
/**DEC 21 2024
 *@param Challenge:
When the user clicks on the "Pick Fighters" button, pick two random
 emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
 */

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

let fighters = [
  "🐉",
  "🐥",
  "🐊", 
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

fightButton.addEventListener("click", function() {
  let emojiFighter1 = fighters[Math.floor(Math.random() * fighters.length)];
  let emojiFighter2 = fighters[Math.floor(Math.random() * fighters.length)];
  stageEl.textContent = emojiFighter1 + " " + "vs" + " " + emojiFighter2;
});
