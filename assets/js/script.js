// Declare all constants

const result = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"];
const humanPlayerImage = document.getElementById("humanplayer");
const robotPlayerImage = document.getElementById("robotplayer");

// Get player button element

let playersbutton = document.getElementById("change-name");


// Add event listener to player button

playersbutton.addEventListener("click", function() {
    
    let firstplayer = prompt("Edit first player name");
    let secondplayer = prompt("Edit second player name");

    document.getElementById("firstplayer").innerText = firstplayer;
    document.getElementById("secondplayer").innerText = secondplayer;

})
  

// Get roll button element

let rollButton = document.getElementById("play-game");


// Add event listener to roll button

rollButton.addEventListener("click", rollDice);


// Function to roll the dice

function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);


    humanPlayerImage.src = `assets/images/${result[randomNumber1]}.png`;
    humanPlayerImage.alt = result[randomNumber1];

    robotPlayerImage.src = `assets/images/${result[randomNumber2]}.png`;
    robotPlayerImage.alt = result[randomNumber2];


// Score calculation

if (randomNumber1 > randomNumber2) {
    winningScore();
}
else if (randomNumber1 < randomNumber2) {
    loseScore();
}
else {
    drawScore()
}
}


/**
 * Increase temporaryScoreH of 1
 * and let human player win when reaching 3 points
 */

function score(player) {
    let tempScoreDisplay;
    if (player === 'human') {
        tempScoreDisplay = document.getElementById("temp-human-score");
    }
    else {
        tempScoreDisplay = document.getElementById("temp-robot-score")
    }
}
    let temporaryScore = parseInt(tempScoreDisplay.innerText);
    tempScoreDisplay.innerText = temporaryScore += 1;
    if (temporaryScore === 3) {
        winner();
    }

    else {
        loseScore()
    }

/**
 * Increase temporaryScore of 1
 * and let robot player win when reaching 3 points
 */

function loseScore() {
    const tempScoreDisplay = document.getElementById("temp-robot-score");

    let temporaryScore = parseInt(tempScoreDisplay.innerText);
    tempScoreDisplay.innerText = temporaryScore += 1;
    if (temporaryScore === 3) {
        winner();
    }
    else {
        looser()
    }
}