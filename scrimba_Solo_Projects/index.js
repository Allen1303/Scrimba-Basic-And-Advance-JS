"use strict";

// Cache DOM Elements for Scores and Game Clock
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const gameClock = document.getElementById("game-clock");
const container = document.querySelector(".container");

let homeScoreBoard = 0;
let guestScoreBoard = 0;

// Update the Score Based on Team and Increment
function updateScore(team, increment) {
  if (team === "home") {
    homeScoreBoard += increment;
    homeScore.textContent = homeScoreBoard;
  } else if (team === "guest") {
    guestScoreBoard += increment;
    guestScore.textContent = guestScoreBoard;
  }
  highlightLeader();
}

// Highlight the Leading Team
function highlightLeader() {
  const homeScoreValue = Number(homeScore.textContent);
  const guestScoreValue = Number(guestScore.textContent);

  // Add or Remove Leader Class
  document.getElementById("home").classList.toggle("leader", homeScoreValue > guestScoreValue);
  document.getElementById("guest").classList.toggle("leader", guestScoreValue > homeScoreValue);

  // Remove Leader Class for a Tie
  if (homeScoreValue === guestScoreValue) {
    document.getElementById("home").classList.remove("leader");
    document.getElementById("guest").classList.remove("leader");
  }
}

// Countdown Timer Functionality
function countdownTimer(initialMinutes) {
  let time = initialMinutes * 60;

  setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    gameClock.textContent = `${minutes}:${seconds}`;
    if (time > 0) time--;
  }, 1000);
}

// Event Delegation to Handle Button Clicks
container.addEventListener("click", (event) => {
  const button = event.target;

  // Ensure Clicked Element is a Button
  if (button.tagName === "BUTTON") {
    // Access the parent button-container's data-team attribute
    const team = button.parentElement.dataset.team;
    const increment = Number(button.dataset.increment);
    updateScore(team, increment);
  }
});

// Initialize Countdown Timer
countdownTimer(12);
