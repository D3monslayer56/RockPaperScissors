let userScore = 0;
let computerScore = 0;

//* Gets computer choice
function getComputerChoice() {
  //const rock = "rock";
  //const paper = "paper";
  //const scissors = "scissors";
  let computerChoice = "";

  let randomGen = Math.floor(Math.random() * 3) + 1;
  if (randomGen == 1) {
    computerChoice = "rock";
  } else if (randomGen == 2) {
    computerChoice = "paper";
  } else if (randomGen == 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
}
//console.log(getComputerChoice());

//* Gets user choice
function getUserChoice() {
  userChoice = prompt("Please pick between Rock, Paper, and Scissors: ");
  return userChoice.toLowerCase();
}
//console.log(getUserChoice());

//* Plays a single round
function playRound(userChoice, computerChoice) {
  let outcome = "";
  if (userChoice == "paper" && computerChoice == "rock") {
    outcome = "Congrats! You've beat the computer";
    userScore++;
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    outcome = "Congrats! You've beat the computer";
    userScore++;
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    outcome = "Congrats! You've beat the computer";
    userScore++;
  } else if (userChoice == "rock" && computerChoice == "paper") {
    outcome = "OUCH! You've lost to the computer";
    computerScore++;
  } else if (userChoice == "paper" && computerChoice == "scissors") {
    outcome = "OUCH! You've lost to the computer";
    computerScore++;
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    outcome = "OUCH! You've lost to the computer";
    computerScore++;
  } else if (userChoice == computerChoice) {
    outcome = "You and the computer tied";
  }
  alert(outcome);
}

const computerSelection = getComputerChoice();
const userSelection = getUserChoice();

alert("Your score: " + userScore + " | Computer score: " + computerScore);
function playGame() {
  let gamesPlayed = 0;
  while (gamesPlayed > 5) {
    playRound(userSelection, computerSelection);
    gamesPlayed++;
  }
}
