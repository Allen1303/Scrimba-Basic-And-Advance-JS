"use strict";
/**Blackjack Game Code Logic */
// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.getElementById("cards-el");

let firstCard = 10;//TODO: Update later to dynamic value
let secondCard = 11;//TODO: Update later to dynamic value
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;

let message = "";
function startGame() {
  cardsEl.textContent = "Cards " + firstCard + " " + secondCard;
  sumEl.textContent = " Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 7;//TODO: Update Later to dynamic value
  sum += card;

  startGame();  //TODO: Name Later
}
