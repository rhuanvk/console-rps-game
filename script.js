const choices = ["rock", "paper", "scissors"];
let result;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 1;
alert(
   "Let's play Rock, Paper, Scissors! First player to get 5 points wins the game."
);
alert("If you don't want to play anymore, just type 'exit'.");

function playerPlay() {
   playerChoice = prompt(
      `Round ${round}
      Enter your choice (rock, paper or scissors):`
   );
   if (playerChoice === null) {
      alert("You canceled the prompt. Exiting now!");
      return playerPlay();
   }
   playerChoice = playerChoice.trim().toLowerCase();

   if (playerChoice == "") {
      alert("You didn't enter anything. Please try again.");
      return playerPlay();
   }
   if (!choices.includes(playerChoice)) {
      alert(
         "Invalid choice. Please enter either 'rock', 'paper', or 'scissors'."
      );
      return playerPlay();
   }
}

function computerPlay() {
   let randomNum = Math.floor(Math.random() * 3);
   return (computerChoice = choices[randomNum]);
}

function playRound(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) {
      result = "It's a tie. Let's play again!";
      alert(result);
      return;
   } else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "paper")
   ) {
      result = `Computer chose ${computerChoice}. ${playerChoice} beats ${computerChoice}. You score!`;
      alert(result);
      playerScore++;
      return;
   } else {
      result = `Computer chose ${computerChoice}. ${computerChoice} beats ${playerChoice}. Computer score!`;
      alert(result);
      computerScore++;
      return;
   }
}

game();

function game() {
   for (; playerScore <= 5 && computerScore <= 5; ) {
      playerPlay();
      if (playerChoice == "exit") {
         alert("Exiting now!");
         return;
      }
      computerPlay();
      playRound(playerChoice, computerChoice);
      if (result !== "It's a tie. Let's play again!") {
         round++;
      }
      scoreboard = `Score: ${playerScore} x ${computerScore}.`;
      alert(scoreboard);
      if (playerScore == 5) {
         scoreboard = "Congratulations, you win!";
         alert(scoreboard);
         return;
      } else if (computerScore == 5) {
         scoreboard = "Game over! Computer wins.";
         alert(scoreboard);
         return;
      }
   }
}
