const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  }
  if (computerChoice === 1) {
    return "paper";
  }

  if (computerChoice === 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer wins!";
    } else {
      return "The player wins!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer wins!";
    } else {
      return "The player wins!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer wins!";
    } else {
      return "The player wins!";
    }
  }
};

function playGame() {
  userChoice = getUserChoice("rock");
  console.log(userChoice);
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
