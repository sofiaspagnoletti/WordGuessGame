var allOptions = ["Sofia", "Andrew", "Joe", "Sveta", "Felix", "Helan", "Monali", "Devin"];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var letterUsed = [];

function getRandomWord() {
    var randomNumber = Math.floor(Math.random() * allOptions.length);
    var randomWord = allOptions[randomNumber];
    return randomWord;
}

function isUserInputValid(userInput) {
    // Checks if the input is part of the allOptions array
    return allOptions.indexOf(userInput) > -1;
}

function win() {
    wins++;
    resetGame();
}

function lose() {
    losses++;
    resetGame();
}

function resetGame() {
    numGuesses = 10;
    guessChoices = [];
    randomWord = getRandomWord();
}

function writeGameStatus() {
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#guesses-left').innerHTML = "Guesses left: " + numGuesses;
    document.querySelector('#letters-used').innerHTML = "Your missed letters so far: " + letterUsed;
}

var randomWord = getRandomWord();

document.onkeyup = function (event) {

    var userGuess = event.key;

    // Only calculate if the user entered a valid key.
    if (isUserInputValid(userGuess)) {

        if (userGuess === computerGuess) {
            win();
        }

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {
            lose();
        }

        writeGameStatus();
    }
};
