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

// one round of the game ?
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        roundWinner = 'player';
    } else {
        computerScore++;
        roundWinner = 'computer';
    }
    console.log(roundWinner);
}

//reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
}

// 5 rounds in a row
function game() {
    let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
    }
    if (playerScore > computerScore) {
        console.log(`You are the overall winner, with ${playerScore} point(s)!`);
    } else {
        console.log(`The computer is the overall winner, with ${computerScore} point(s).`)
    }
    resetGame();
}

