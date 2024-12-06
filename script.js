// selecting elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const choiceButtons = document.querySelectorAll(".btn");
const displayHumanScore = document.getElementById("display-human-score");
const displayComputerScore = document.getElementById("display-computer-score");
const displayResult = document.getElementById("display-result");
const displayHumanChoice = document.getElementById("player-choice");
const displayComputerChoice = document.getElementById("computer-choice");
const displayRound = document.getElementById("display-round");
const displayOver = document.getElementById("display-over");
const resetGameBtn = document.querySelector(".reset-btn");

// initalize game
let humanScore;
let computerScore;
let round;
let playing;

function initalizeGame() {
  playing = true;
  round = 0;
  humanScore = 0;
  computerScore = 0;
  displayHumanScore.textContent = humanScore;
  displayComputerScore.textContent = computerScore;
}

initalizeGame();

// generate computer move
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

// play game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    displayResult.textContent = "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    displayResult.textContent = "Computer wins!";
    computerScore++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    displayResult.textContent = "You win!";
    humanScore++;
  }

  round++;
  displayRound.textContent = round;

  displayComputerChoice.textContent = computerChoice;
  displayHumanChoice.textContent = humanChoice;
  displayHumanScore.textContent = humanScore;
  displayComputerScore.textContent = computerScore;

  checkMoves();
}

// check winner / end game
function checkMoves() {
  if (round >= 5) {
    resetGameBtn.classList.remove("hidden");
    playing = false;
  }
}

// reset game
resetGameBtn.addEventListener("click", () => {
  initalizeGame();
  resetGameBtn.classList.add("hidden");
  displayRound.textContent = "";
  displayResult.textContent = "";
  displayComputerChoice.textContent = "";
  displayHumanChoice.textContent = "";
});

// game buttons
rockButton.addEventListener("click", () => {
  if (playing) playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  if (playing) playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  if (playing) playRound("scissors", getComputerChoice());
});
