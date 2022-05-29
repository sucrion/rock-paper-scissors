// setup
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// computer's outcome
function computerPlay() {
    const compNr = Math.ceil(Math.random() * 3);
    if (compNr == 1) {
        return 'rock';
    } else if (compNr == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// one round of the game
function playRound() {
    let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        return 'That\'s a tie!'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `You win! It was your ${playerSelection} vs ${computerSelection}.`;
    } else {
        return `You lost! It was your ${playerSelection} vs ${computerSelection}.`;
    }
}

// 5 rounds in a row
function game() {
    
}