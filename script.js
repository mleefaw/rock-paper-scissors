const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const choiceButtons = document.querySelectorAll(".btn");
const displayHumanScore = document.getElementById("display-human-score");
const displayComputerScore = document.getElementById("display-computer-score");
const displayResult = document.getElementById("display-result");
const displayHumanChoice = document.getElementById("player-choice");
const displayComputerChoice = document.getElementById("computer-choice");
const displayMoves = document.getElementById("display-moves");
const displayOver = document.getElementById("display-over");
const resetGameBtn = document.querySelector(".reset-btn");

let humanScore = 0;
let computerScore = 0;
let round = 1;

// random move for computer
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    // computerChoice must be 2
    computerChoice = "scissors";
  }
  return computerChoice;
}

// check for winner
function checkMoves() {
  if (round >= 6) {
    resetGameBtn.classList.remove("hidden");
  }
}

// play game
function playRound(humanChoice, computerChoice) {
  displayComputerChoice.textContent = computerChoice;
  displayHumanChoice.textContent = humanChoice;
  displayMoves.textContent = round;

  round++;

  if (humanChoice === computerChoice) {
    displayResult.textContent = `Tie! ${humanChoice} vs ${computerChoice}`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    displayResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper]") {
    displayResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  }

  displayHumanScore.textContent = `${humanScore}`;
  displayComputerScore.textContent = `${computerScore}`;

  checkMoves();
}

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
