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
  let humanChoice = prompt("Rock, Paper or Scissors?");
  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} vs ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper]") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  }
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score: You ${humanScore} | Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You are the winner of this game!");
  } else {
    console.log("You've lost this game!");
  }
}

playGame();

console.log("branch test");
