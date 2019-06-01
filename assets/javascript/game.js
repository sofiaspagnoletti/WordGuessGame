

var allWords = ["sofia", "andrew", "joe", "sveta", "felix", "helan", "monali", "devin"];
var allLettersOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var letterUsed = [];

function getRandomWord() {
    var randomNumber = Math.floor(Math.random() * allWords.length);
    var randomWord = allWords[randomNumber];
    return randomWord;
}

function wordReplacement() {
    randomWord = getRandomWord();
    currentGuess = [];
    for (var i = 0; i < randomWord.length; i++) {
        currentGuess.push("_");
    }
}

function isUserInputValid(userInput) {
    return allLettersOption.indexOf(userInput) > -1;
}

function isLetterPresentInOurWord(chosenLetter) {
    return randomWord.includes(chosenLetter);
}

function allLettersArePresent() {
    return currentGuess.join("") === randomWord;
    // return currentGuess.indexOf("_") === -1;
}

function replaceChosenLetter(chosenLetter) {
    if (isLetterPresentInOurWord(chosenLetter)) {
        var lettersInOurWord = randomWord.split("");
        // ["s", "o", "f", "i", "a"]
        // currentGuess
        // ["_", "o", "_", "_", "_"]
        // chosenLetter
        // "f"
        var index = lettersInOurWord.indexOf(chosenLetter);
        // 2
        currentGuess[index] = chosenLetter;
    }
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
    letterUsed = [];
    wordReplacement();
}

function writeGameStatus() {
    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#guesses-left').innerHTML = "Guesses left: " + numGuesses;
    document.querySelector('#letters-used').innerHTML = "Your missed letters so far: " + letterUsed;
    document.querySelector('#current-word').innerHTML = currentGuess.join(" ");
}

var randomWord = "";
var currentGuess = [];

wordReplacement();

document.onkeyup = function (event) {

    var userGuess = event.key;

    // Only calculate if the user entered a valid key.
    if (isUserInputValid(userGuess)) {

        if (isLetterPresentInOurWord(userGuess)) {
            replaceChosenLetter(userGuess);
        } else {
            numGuesses--;
            letterUsed.push(userGuess);
        }

        // if (userGuess === computerGuess) {
        //     win();
        // }

        // if (userGuess != computerGuess) {
        //     numGuesses--;
        //     guessChoices.push(userGuess);
        // }

        if (numGuesses === 0) {
            lose();
        }

        if (allLettersArePresent()) {
            win();
        }

        writeGameStatus();
    }
};
