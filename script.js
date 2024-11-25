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
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("No one wins!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("No one wins!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper]") {
    console.log("You win! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("No one wins!");
  }
}

playRound(getHumanChoice().toLowerCase(), getComputerChoice());
console.log(`You: ${humanScore} | Computer: ${computerScore}`);
