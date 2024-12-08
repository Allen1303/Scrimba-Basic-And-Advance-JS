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

function gameClockCounter(initialMinutes) {
  let time = initialMinutes * 60;
  setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    //Adds  ZERO (0) to each seconds once seconds is less than ten (10)
    seconds = seconds < 10 ? "0" + seconds : seconds;

    gameClock.textContent = `${minutes}:${seconds}`;
    if (time > 0) time--;
  }, 1000);
}
gameClockCounter(12);
