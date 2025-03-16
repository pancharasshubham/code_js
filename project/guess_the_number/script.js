const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

// this to validate enter value is between 1 - 100
function validateGuess(guess){
    //
}

// to check given value is equal to random no/ high / low
function checkGuess(guess){
    //
}

// to clean prev value and update prv value in array and update guess value 
function displayGuess(guess){

}

// to print message 
function displayMessage(message){
    //
}