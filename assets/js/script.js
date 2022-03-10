//Setting the user and AI default scores to 0 //
let userScore = 0;
let aiScore = 0;

// Storing HTML elements and ID's into variables to access quickly //
let userScoreDisplay = document.getElementById('userScore');
let aiScoreDisplay = document.getElementById('aiScore');
let scores = document.getElementsByClassName('score-area');
let result = document.getElementById('result');

// choices //
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

//reset button//
let reset = document.getElementById('reset');



// create choices for AI //
 function aiChoices() {
    let choices = ['rock', 'paper', 'scissors'];
    // Use Math.floor(Math.random()) to make the choices a interger//
    let interger = Math.floor(Math.random(choices) * 3);
    return choices[interger];
}

// convert words to button images on the result section//
function textToImage(text) {
    if (text === 'rock') return '<i class="fa-regular fa-hand-back-fist"></i>'
    if (text === 'paper') return '<i class="fa-regular fa-hand"></i>'
    if (text === 'scissors') return '<i class="fa-regular fa-hand-scissors"></i>'

}

/* Actions to screen when user wins, loses or draws (score incrementation and visual represantion
on the sceen).*/
function userWin(userChoice, aiChoice) {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    aiScoreDisplay.innerHTML = aiScore;
    result.innerHTML = textToImage(userChoice)  + " beats " + textToImage(aiChoice) ;

}

function aiWin(userChoice, aiChoice) {
    aiScore++;
    aiScoreDisplay.innerHTML = aiScore;
    userScoreDisplay.innerHTML = userScore;
    result.innerHTML = textToImage(aiChoice)  + " beats " + textToImage(userChoice) ;

}

function tie() {

}

// function to define what choices wins or ties, //
function startGame(userChoice) {

    let aiChoice = aiChoices();
    if ((userChoice === 'rock' && aiChoice === 'scissors')
       || (userChoice === 'paper' && aiChoice === "rock")
       || (userChoice === "scissors" && aiChoice === "paper")) {
        return userWin(userChoice, aiChoice);
    } 
    else if ((userChoice === 'rock' && aiChoice === 'paper')
        || (userChoice === 'paper' && aiChoice === 'scissors')
        || (userChoice === 'scissors' && aiChoice === 'rock')){
            return aiWin(userChoice, aiChoice);
        }
        else if (userChoice === aiChoice){
            return tie(userChoice, aiChoice);
        }
}

// create a function so that when you click on one of the choices the game will start//
function main() {
    rock.addEventListener('click', function() {
        startGame('rock')
        
    })
    paper.addEventListener('click', function() {
        startGame('paper')
    })
    scissors.addEventListener('click', function() {
        startGame('scissors')
    })
}

main();







