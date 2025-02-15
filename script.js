// Function to generate a random die roll (1 to 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice roll values
function updateDiceRolls() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`die${i}`).value = rollDice();
    }
}

// Roll dice when the page is loaded
window.onload = function() {
    updateDiceRolls();
};

// Roll dice when the button is clicked
document.getElementById("rollButton").addEventListener("click", function() {
    updateDiceRolls();
});
