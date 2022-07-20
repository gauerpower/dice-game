const player1Die = document.querySelector("#player-1-die");
const player2Die = document.querySelector("#player-2-die");
const winner = document.querySelector("#winner");
const rollDiceButton = document.querySelector("button");

function rollDice() {
    rollDiceButton.classList.add("pressed");
    let player1DiceResult = Math.floor(Math.random() * 6) + 1;
    let player2DiceResult = Math.floor(Math.random() * 6) + 1;
    player1Die.setAttribute("src", `images/dice${player1DiceResult}.png`);
    player2Die.setAttribute("src", `images/dice${player2DiceResult}.png`);
    if (player1DiceResult > player2DiceResult) {
        winner.innerHTML = "Player 1 wins";
    }
    if (player1DiceResult < player2DiceResult) {
        winner.innerHTML = "Player 2 wins";
    }
    if (player1DiceResult === player2DiceResult) {
        winner.innerHTML = "Tie";
    }
    setTimeout(() => {
        rollDiceButton.classList.remove("pressed");
    }, 100);
}

rollDiceButton.addEventListener("click", rollDice);
document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        rollDice();
    }
})