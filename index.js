const choices = ["Rock", "Papper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice ){
        result = "IT'S A TIE";
    }
    
    else {
        switch(playerChoice){
        case "Rock": 
            result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "Papper": 
            result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE";
            break;
        case "Scissors": 
            result = (computerChoice === "Papper") ? "YOU WIN!" : "YOU LOSE";
            break;
    }
}
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;

switch(result){
    case "YOU WIN!":
        resultDisplay.style.color = "green";
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        break;
    case "YOU LOSE":
        resultDisplay.style.color = "red";
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    default:
        resultDisplay.style.color = "black";
}
}
