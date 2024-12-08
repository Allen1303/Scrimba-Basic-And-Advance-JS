"use strict";
//Cache DOM Elements to Interact with
const home = document.getElementById("home");
const guest = document.getElementById("guest");

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const container = document.querySelector(".container")
const gameClock = document.getElementById("game-clock");

let homeScoreBoard = 0;
let guestScoreBoard = 0;

//Function to update both the Home and Guest scores
function updateScore(team, increment) {
  if (team === home) {
    homeScoreBoard += increment;
    homeScore.textContent = homeScoreBoard;
  } else if (team === guest) guestScoreBoard += increment;
  guestScore.textContent = guestScoreBoard;
  {
  }
  highlightLeader();
}
//Event Listener for the home buttons using callback functionality
container.addEventListener("click", (event)=>{
  const button = event.target;
  const buttonContainer = button
})
//function logic that highlights the leader of the game by checking the highest score

function highlightLeader() {
  const homeScoreValue = Number(homeScore.textContent);
  const guestScoreValue = Number(guestScore.textContent);

  //Use toggle method the add/remove the leader class
  home.classList.toggle("leader", homeScoreValue > guestScoreValue);
  guest.classList.toggle("leader", guestScoreValue > homeScoreValue);

  //Handle ties scenario explicitly
  if (homeScoreValue === guestScoreValue) {
    home.classList.remove("leader");
    guest.classList.remove("leader");
  }
}

// function and logic that updates and countdown the game clock dynamically.

function countdownTimer(initialMinutes) {
  let time = initialMinutes * 60;
  setInterval(() => {
    //calculates the number of full minutes remaining by dividing the total time (in seconds) by 60
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    //that the seconds are always displayed as two digits. If the seconds are less than 10, a leading zero is added
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //This line updates the text content of an HTML element  with ID gameClock
    gameClock.textContent = `${minutes}:${seconds}`;
    if (time > 0) time--;
  }, 1000);
}
countdownTimer(12);
