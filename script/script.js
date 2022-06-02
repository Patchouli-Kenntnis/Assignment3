// restart game after 5 rounds are finished.
while (true)
    game();

// Encoding of player move:
// rock: 0, paper: 1, scissors: 2


/**
 * Return who will win.
 * player 1 wins: 1
 * player 2 wins: -1
 * draw: 0
 * @param {The move of player 1.} x 
 * @param {The move of player 2.} y 
 */
function getResult(x, y) {
    let r = x - y;
    if (r == 2) r = -1;
    if (r == -2) r = 1;
    return r;
}

/**
 * Get the encoding of a player move.
 * @param {the string, case insensitive} str 
 */
function getEncoding(str) {
    let lowerCased = str.toString().toLowerCase();
    switch (lowerCased) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;

        default:
            console.error("Invalid player move: " + str);
    }
}

function getName(code) {
    switch (code) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.error("Invalid move encoding: " + code);
    }
}

function playRound(playerSelection, computerSelection) {
    let playerMove = getEncoding(playerSelection);
    let computerMove = getEncoding(computerSelection);
    let result = getResult(playerMove, computerMove);
    switch (result) {
        case -1:
            return "You lose! " + getName(computerMove) + " beats " + getName(playerMove);
        case 1:
            return "You win! " + getName(playerMove) + " beats " + getName(computerMove);
        default:
            return "Draw! " + getName(playerMove) + " versus " + getName(computerMove);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getResultFromStr(playerSelection, computerSelection) {
    let playerMove = getEncoding(playerSelection);
    let computerMove = getEncoding(computerSelection);
    return getResult(playerMove, computerMove);
}

function game() {
    let count = 0;
    for (let i = 0; i != 5; ++i) {
        let playerSelection = prompt("Player move: ");
        let computerSelection = getName(getRndInteger(0, 3));
        let result = getResultFromStr(playerSelection, computerSelection);
        count += result;
        console.log(playRound(playerSelection, computerSelection));
    }
    if (count > 0) console.log("*** You Win ***");
    else if (count == 0) console.log("*** Draw ***");
    else console.log("*** You Lose ***");
}