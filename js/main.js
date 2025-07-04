const buttons = document.querySelector(".buttons");

const playaChoice = document.querySelector(".playerChoice");
const botChoice = document.querySelector(".computerChoice");
const score = document.querySelector(".score");
const roundRes = document.querySelector(".roundResult");
const outcoem = document.querySelector(".outcome");

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

        
}