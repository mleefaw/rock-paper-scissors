// selecting elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const displayHumanScore = document.getElementById("display-human-score");
const displayComputerScore = document.getElementById("display-computer-score");
const displayResult = document.getElementById("display-result");
const displayHumanChoice = document.getElementById("player-choice");
const displayComputerChoice = document.getElementById("computer-choice");
const displayRound = document.getElementById("display-round");
const displayWinner = document.getElementById("display-winner");
const resetGameBtn = document.querySelector(".reset-btn");

let humanScore;
let computerScore;
let round;
let playing;

// initalize game
initalizeGame();

function initalizeGame() {
  playing = true;
  round = 0;
  humanScore = 0;
  computerScore = 0;
  displayHumanScore.textContent = humanScore;
  displayComputerScore.textContent = computerScore;
}

// generate computer move
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
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

  checkWinner();
}

// check winner
function checkWinner() {
  if (humanScore >= 5 || computerScore >= 5) {
    resetGameBtn.classList.remove("hidden");
    playing = false;
    humanScore > computerScore
      ? (displayWinner.textContent = "You win! 🏆")(
          (displayWinner.style.color = "lime")
        )
      : (displayWinner.textContent = "Computer wins! 🏆")(
          (displayWinner.style.color = "red")
        );
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
  displayWinner.textContent = "";
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
