//------------------- Battleship Game

// game setup
// --- user should guess a number
//--- we need to create new ship on the board

// |x|x|0|0|0|x|x|
// |0|1|2|3|4|5|6| --- position

let guesses = 0;
let isSunk = false;
let hit = 0;
let miss = 0;

let location1 = 2;
let location2 = 3;
let location3 = 4;

// ---- game start 

while (!isSunk) {
    console.log("Game begins");

    let userGuess = Number(prompt("Give me your postion"));
    guesses = guesses + 1;
    
    miss = miss +1;
    if (guesses > 6) {
        console.log(guesses);
        break;
    }
    if (userGuess > 0 && userGuess < 7) {
        console.log(userGuess)
        if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
            hit = hit + 1;
            alert("HIT");
            if (location1 == userGuess) {
                location1 = -1;
            }
            if (location2 == userGuess) {
                location2 = -1;
            }
            if (location3 == userGuess) {
                location3 = -1;
            }
        
        } else {
            alert("MISS")
        }
        console.log(hit)
        if (hit == 3) {
            isSunk = true;
            alert("You WON!");
        }

    } else {
        alert("Give me numbers between 0 and 6");
    }
} 

//--- game loop is ended
if (guesses => 6) {
    alert("You LOST");
} else ("You LOST");

console.log("Game ends");


