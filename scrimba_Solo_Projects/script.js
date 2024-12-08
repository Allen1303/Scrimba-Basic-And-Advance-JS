"use strict";
//Cache DOM Elements to Interact with
const home = document.getElementById("home");
const guest = document.getElementById("guest");

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const homeScore1 = document.getElementById("home-score1");
const homeScore2 = document.getElementById("home-score2");
const homeScore3 = document.getElementById("home-score3");

const guestScore1 = document.getElementById("guest-score1");
const guestScore2 = document.getElementById("guest-score2");
const guestScore3 = document.getElementById("guest-score3");

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
homeScore1.addEventListener("click", () => updateScore(home, 1));
homeScore2.addEventListener("click", () => updateScore(home, 2));
homeScore3.addEventListener("click", () => updateScore(home, 3));

//Event Listener for the guest buttons using callback functionality
guestScore1.addEventListener("click", () => updateScore(guest, 1));
guestScore2.addEventListener("click", () => updateScore(guest, 2));
guestScore3.addEventListener("click", () => updateScore(guest, 3));

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
