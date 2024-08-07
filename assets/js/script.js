// Declare all constants
const result = ["dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"];
const humanPlayerImage = document.getElementById("humanplayer");
const robotPlayerImage = document.getElementById("robotplayer");


// Get player button element
let playersbutton = document.getElementById("change-name");

// Get roll button element
let rollButton = document.getElementById("play-game");

// Add event listener to roll button
rollButton.addEventListener("click", rollDice);

/**
 * Main button to play the game
 * and allow to roll dices to both players
 * that get points based on that
 */
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
}

/**
 * Increase temporaryScoreH of 1
 * and let human player win when reaching 3 points
 */
function winningScore() {
    let temporaryScoreH = parseInt(document.getElementById("temp-human-score").innerText);
    document.getElementById("temp-human-score").innerText = temporaryScoreH += 1;
    if (temporaryScoreH === 3) {
        winner();
    }   
}

// Add alert when winning the game
function winner() {
    document.getElementById("endgame").classList.remove("hide");
    
    const endGame = document.createElement("p");
    endGame.setAttribute("id","humanWin");
    endGame.innerHTML = "You Win !";
    document.getElementById("endgame").innerHTML = ""
    document.getElementById("endgame").appendChild(endGame)
    retryRoll()
}

/**
 * Additional button in the alert when ending the game
 * and allows player to play again
 */
function retryRoll() {
    let button = document.createElement("button");
    button.setAttribute("id","retry-roll");
    button.innerHTML = "Try to roll again!"

    button.addEventListener("click",function() {
    document.getElementById("endgame").classList.add("hide");
    // Reset score to o
    document.getElementById("temp-human-score").innerText = "0";
    document.getElementById("temp-robot-score").innerText = "0";
    rollDice()
    }) 
    document.getElementById("endgame").appendChild(button)
}

/**
 * Increase temporaryScoreR of 1
 * and let robot player win when reaching 3 points
 */
function loseScore() {
    let temporaryScoreR = parseInt(document.getElementById("temp-robot-score").innerText);
    document.getElementById("temp-robot-score").innerText = temporaryScoreR += 1;
    if (temporaryScoreR === 3) {
        loser();
    }    
}

// Add alert when losing the game and robot win
function loser() {
    document.getElementById("endgame").classList.remove("hide");
    
    const endGame = document.createElement("p");
    endGame.setAttribute("id","robotWin");
    endGame.innerHTML = "You Lose !";
    document.getElementById("endgame").innerHTML = ""
    document.getElementById("endgame").appendChild(endGame)
    retryRoll()
}
