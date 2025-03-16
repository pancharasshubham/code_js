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

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

// this to validate enter value is between 1 - 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter a number more than 1')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
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

// to end game
function endGame(){
    //
}

// to start new game
function newGame(){
    //
}