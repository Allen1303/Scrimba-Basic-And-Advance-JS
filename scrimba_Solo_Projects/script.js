"use strict";

const homeEl = document.getElementById("home");
const guestEl = document.getElementById("guest");

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


/**
 * @param {Pseudo Code}
 * the home  or guest score should update by 1, 2, or 3 and display the score amount on the board based on which of the 3 buttons is click +1, +2 or +3 button
 */
const updateHomeScore = () => {
  if (
    homeScore1.addEventListener("click", () => {
      homeScoreBoard += 1;
      homeScore.textContent = homeScoreBoard;
    })
  ) {
  } else if (
    homeScore2.addEventListener("click", () => {
      homeScoreBoard += 2;
      homeScore.textContent = homeScoreBoard;
    })
  ) {
  } else {
    homeScore3.addEventListener("click", () => {
      homeScoreBoard += 3;
      homeScore.textContent = homeScoreBoard;
    });
  }
};
updateHomeScore();
//function logic to update the Guest scoreboard
const updateGuestScore = () => {
  if (
    guestScore1.addEventListener("click", () => {
      guestScoreBoard += 1;
      guestScore.textContent = guestScoreBoard;
    })
  ) {
  } else if (
    guestScore2.addEventListener("click", () => {
      guestScoreBoard += 2;
      guestScore.textContent = guestScoreBoard;
    })
  ) {
  } else {
    guestScore3.addEventListener("click", () => {
      guestScoreBoard += 3;
      guestScore.textContent = guestScoreBoard;
    });
  }
};
updateGuestScore();

/**
 * function logic that highlights the leader of the game by checking the highest score
 */
function highlightLeader() {
  if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
    homeEl.style.color = "#73dd73";
    guestEl.style.color = "red";
  } else if (Number(homeScore.textContent) < Number(guestScore.textContent)) {
    guestEl.style.color = "#73dd73";
    homeEl.style.color = "red";
  } else {
    homeEl.style.color = "#eee";
    guestEl.style.color = "#eee";
  }
}
document.addEventListener("click", highlightLeader);

/**DEC 7th 2024
 * function and logic that updates and countdown the game clock dynamically.
 * NB: Setting interval using seconds should be in mm seconds i.e 1000 mm = 1 second.
 * @param {A named function like updateCountdown }in tandem with setInterval function() is easy to identify, reusable in other parts of the code, easier to debug with clear stack traces, and helps organize complex logic effectively.
 */

const startingMinutes = 12;
let time = startingMinutes * 60;

// setInterval(updateCountdown, 1000);
// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;
//   seconds = seconds < 10 ? "0" + seconds : seconds
//   gameClock.textContent = `${minutes}:${seconds}`;
//   time--;
// }
/**
 * @param {Updating the countdown with setInterval anonymous function},is best for smaller code base like this scoreboard project, because it reduces extra line of code for small, non-reusable tasks, and can avoid adding extra global identifiers.*/

setInterval(() => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  //Adds  ZERO (0) to each seconds once seconds is less than ten (10)
  seconds = seconds < 10 ? "0" + seconds : seconds;

  gameClock.textContent = `${minutes}:${seconds}`;
  time--;
}, 1000);
