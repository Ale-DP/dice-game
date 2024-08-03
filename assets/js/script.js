// Get player button element

let playersbutton = document.getElementById("change-name");

// Add event listener to player button

playersbutton.addEventListener("click", function() {
    firstplayer = prompt("Edit first player name");
    secondplayer = prompt("Edit second player name");
})
    