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
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        scoreUpdate();
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        roundWinner = 'player win';
        scoreUpdate();
    } else {
        computerScore++;
        roundWinner = 'computer win';
        scoreUpdate();
    }
    
    if (playerScore === 5 || computerScore === 5) {
        winnerShow();
    } else {
        winnerP.innerText = '';
    }
}

//reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';
}

//updating score

function scoreUpdate() {
    document.querySelector('#scoreP').innerText = `The last result was: ${roundWinner}.\nYou: ${playerScore}, Computer: ${computerScore}.`
}

//button functions
function playRock() {
    playRound('rock');
}
function playPaper() {
    playRound('paper');
}
function playScissors() {
    playRound('scissors');
}

//button listeners
document.querySelector('#rockBtn').addEventListener('click', playRock);
document.querySelector('#paperBtn').addEventListener('click', playPaper);
document.querySelector('#scissorsBtn').addEventListener('click', playScissors);

//winner declaration
let winnerP = document.querySelector('#winnerP')
function winnerShow() {
    if (playerScore === 5) {
        winnerP.innerText = '🎉 Congratulations, you won the game! 🎉\nSimply press a button to begin another game.';
        resetGame();
    } else if (computerScore === 5) {
        winnerP.innerText = 'Unfortunately, the computer won the game.\nIf you\'d like to try again, simply press a button.';
        resetGame();
    }
}