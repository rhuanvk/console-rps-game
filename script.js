const choices = ['Rock', 'Paper', 'Scissors'];
let result;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let maxScore = Number(prompt("Let's play Rock, Paper, Scissors! Do you want to play till 3 or 5 points?"));

/* if (maxScore = 3 || maxScore = 5) {
    maxScore = (prompt("Please inform a valid number of rounds that you wanna play (3 or 5)."));
    Number(maxScore);
} */

alert("If you don't want to play anymore, just type 'exit'.");

function playerPlay() {
    playerChoice = prompt("Enter your choice (rock, paper or scissors):");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
}

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    return computerChoice = choices[randomNum];
}

function playRound(playerChoice, computerChoice) {
    if (!(choices.includes(playerChoice))) {
        alert('[Error!] Please type something valid (rock, paper or scissors).');
        console.log(playerChoice);
        return;
    }

    if (playerChoice == computerChoice) {
        result = "It's a tie. Let's play again!";
        alert(result);
        return;
    }
    else if (
        (playerChoice == 'Rock' && computerChoice == 'Scissors') ||
        (playerChoice == 'Paper' && computerChoice == 'Rock') ||
        (playerChoice == 'Scissors' && computerChoice == 'Paper')) {
        result = `Computer chose ${computerChoice}. ${playerChoice} beats ${computerChoice}. You score!`;
        alert(result);
        playerScore++;
        return;
    }
    else {
        result = `Computer chose ${computerChoice}. ${computerChoice} beats ${playerChoice}. Computer score!`;
        alert(result);
        computerScore++;
        return;
    }
}

game();

function game() {
    for (; playerScore <= maxScore || computerScore <= maxScore;) {
        playerPlay();
        if (playerChoice == 'Exit') {
            alert('Exiting now!');
            return;
        }

        playRound(playerChoice, computerPlay());
        scoreboard = `Score: ${playerScore} x ${computerScore}.`;
        alert(scoreboard);
        if (playerScore == maxScore) {
            scoreboard = 'Congratulations, you win!';
            alert(scoreboard);
            return;
        }
        else if (computerScore == maxScore) {
            scoreboard = 'Game over! Computer wins.';
            alert(scoreboard);
            return;
        }
    }
}