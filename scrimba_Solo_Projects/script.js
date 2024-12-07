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
