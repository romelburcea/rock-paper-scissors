const playerText = document.querySelector("#playerChoice");
const computerText = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");
const choiceButtons = document.querySelectorAll(".choiceButton");
let player;
let computer;

choiceButtons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `You chose: ${player}`;
    computerText.textContent = `The computer chose: ${computer}`;
    resultText.textContent = checkWinner();
}))

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "Draw!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "Good job. By sheer luck only, you beat the system!" : "You lost to an AI, too bad...";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "Good job. By sheer luck only, you beat the system!" : "You lost to an AI, too bad...";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "Good job. By sheer luck only, you beat the system!" : "You lost to an AI, too bad...";
    }
}
