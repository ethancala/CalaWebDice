// API URL (Switch between local and deployed)
const API_URL = "http://localhost:3000/api/roll-dice"; // Use local API for testing
// const API_URL = "https://your-api.azurewebsites.net/api/roll-dice"; // Use this after deploying

// Function to get a random die roll from the API
async function rollDice() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API Error");

        const data = await response.json();
        return data.roll; // Return the dice roll from API
    } catch (error) {
        console.error("Error calling API!", error);
        return "Error"; // Show an error message instead of a number
    }
}

// Function to update the dice roll values
async function updateDiceRolls() {
    for (let i = 1; i <= 5; i++) {
        const rollValue = await rollDice(); // Get dice roll from API
        document.getElementById(`die${i}`).value = rollValue; // Update UI
    }
}

// Roll dice when the page is loaded
window.onload = function () {
    updateDiceRolls();
};

// Roll dice when the button is clicked
document.getElementById("rollButton").addEventListener("click", function () {
    updateDiceRolls();
});
