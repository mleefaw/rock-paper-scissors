function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else computerChoice === 3;
  return "scissors";
}

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore = 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore = 1;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("No one wins!");
  }
}

playRound(getHumanChoice().toLowerCase(), getComputerChoice());
console.log(`You: ${humanScore} | Computer: ${computerScore}`);
