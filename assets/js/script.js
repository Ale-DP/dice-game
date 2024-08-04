// Declare all constants

const result = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"];


// Get player button element

let playersbutton = document.getElementById("change-name");


// Add event listener to player button

playersbutton.addEventListener("click", function() {
    document.getElementById("firstplayer");
    document.getElementById("secondplayer");

    let firstplayer = prompt("Edit first player name");
    let secondplayer = prompt("Edit second player name");

    document.getElementById("Firstplayer").innerText = firstplayer;
    document.getElementById("Secondplayer").innerText = secondplayer;

})
  

// Get roll button element

let rollbutton = document.getElementById("play-game");


// Add event listener to roll button
document.getElementById("play-game").addEventListener("click", rollDice);


// Function to roll the dice
function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

document.getElementById("humanplayer").src = `assets/images/${result[randomNumber1]}.png`
document.getElementById("humanplayer").alt = result[randomNumber1]

document.getElementById("robotplayer").src = `assets/images/${result[randomNumber2]}.png`
document.getElementById("robotplayer").alt = result[randomNumber2]
}