const buttons = document.querySelector(".buttons");

const playaChoice = document.querySelector(".playerChoice");
const botChoice = document.querySelector(".computerChoice");
const score = document.querySelector(".score");
const roundRes = document.querySelector(".roundResult");
const outcome = document.querySelector(".outcome");

let userScore = 0;
let computerScore = 0;




buttons.addEventListener('click', (e) => {
    let buttonClicked = e.target.id;
    let computerPlayed = getComputerChoice();
    if (buttonClicked !== '') playRound(buttonClicked, computerPlayed);
});

function getComputerChoice() {
    let i = Math.floor(Math.random()*3) + 1;
    switch (i) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissor';
            break;
    }
}

function playRound(user, bot) {
    playaChoice.textContent = `You played ${user}`;
    botChoice.textContent = `Computer played ${bot}`;

    if (user === bot) {
        roundRes.textContent = "It's a tie!";
    } else if ((user === 'rock' && bot === 'scissor') || 
               (user === 'paper' && bot === 'rock') || 
               (user === 'scissor' && bot === 'paper')) {
        userScore++;
        roundRes.textContent = "You win this round!";
    } else {
        computerScore++;
        roundRes.textContent = "Computer wins this round!";
    }
    score.textContent = `Your score: ${userScore} | Computer's score: ${computerScore}`;

    checkGameOver();

}
    
function checkGameOver() {
    if (userScore === 5) {
        outcome.textContent = "You win the game!";
        buttons.style.display = 'none';
    } else if (computerScore === 5) {
        outcome.textContent = "Computer wins the game!";
        buttons.style.display = 'none';
    }
}