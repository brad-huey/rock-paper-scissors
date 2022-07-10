const selectionButtons = document.querySelectorAll('[data-selection');
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-you-score]')
const winnerSpan = document.querySelector('[data-winner]')
const playerWins = 'You win the round!'
const computerWins = 'You lost this round!'
const noWin = 'DRAW!'
const SELECTED = [
    {
        name: 'rock',
        text: 'ROCK!',
        beats: 'scissors'
    },
    {
        name: 'paper',
        text: 'PAPER!',
        beats: 'rock'
    },
    {
        name: 'scissors',
        text: 'SCISSORS!',
        beats: 'paper'
    },
]

selectionButtons.forEach(selectedButton => {
    selectedButton.addEventListener('click', e => {
        const selectionName = selectedButton.dataset.selection
        const selection = SELECTED.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})
// in the days before datasets, developers would set all kinds of attributes 
// on html elements to add extra information to the element. 
// But it was so random and it was hard to maintain, so datasets were introduced. 
// Basically, if you want to add a custom attribute that doesn't exist, 
// you write data- followed by whatever you want to call it. 
// Then in js you can access it with htmlElement.dataset.nameYouGaveIt.

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const youWin = theWinner(selection, computerSelection);
    const computerWin = theWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWin);
    addSelectionResult(selection, youWin);

    if (youWin) {
        incrementScore(playerScoreSpan);
        document.getElementById("winner-text").innerText = playerWins;

    } else if (computerWin) {
        incrementScore(computerScoreSpan);
        document.getElementById("winner-text").innerText = computerWins;

    } else {
        document.getElementById("winner-text").innerText = noWin;
    }

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection) {
     const div = document.createElement('div')
     div.innerText = selection.text
     div.classList.add('result-selection')
 }

 function displayWinnerText(youWin, computerWin) {
    const div = document.createElement('div')
    div.innerText = selection.text
    div.classList.add('result-selection')
}

function theWinner(selection, oppositionSelection) {
    return selection.beats === oppositionSelection.name
}

function randomSelection(){
    const randomChoice = Math.floor(Math.random() * SELECTED.length)
    return SELECTED[randomChoice]
}

// Text for using an alert 
// const computerTurn = computerChoice()
// let newLine = '\r\n'
// function computerChoice(){
//     return choices[Math.floor(Math.random() * choices.length)]
// }








/* OLD TEXT-BASED with LOOP
function chooseRock(){
    let messageRock = ('Player shoots rock!');

    //messageRock += newLine;
    //messageRock += ('Computer shoots ' + computerTurn + '!')
    let (choicesHeadline.textContent) = messageRock
    return messageRock
}
const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', chooseRock);


function alertPaper(){
    let messagePaper = ('Player shoots paper!');
    messagePaper += newLine;
    messagePaper += ('Computer shoots ' + computerTurn + '!')
    alert(messagePaper) //function connected to paper button click
}
const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', alertPaper);


function alertScissors(){
    let messageScissors = ('Player shoots scissors!');
    messageScissors += newLine;
    messageScissors += ('Computer shoots ' + computerTurn + '!')
    alert(messageScissors) //function connected to scissors button click
}
const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', alertScissors);
*/






/*
const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game(){
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = "Play Again?";
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors.');
    while (input === null) {
        input = prompt('Type Rock, Paper, or Scissors.')
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check === false) {
       input = prompt('Spelling needs to be correct! Capitalization not required. Type Rock, Paper, or Scissors');
        while (input === null) {
        input = prompt('Spelling needs to be correct! Capitalization not required. Type Rock, Paper, or Scissors')
        
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}




function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
    }

function checkWinner(chosenByPlayer, chosenByComputer){
    if(chosenByPlayer === chosenByComputer){
        return 'Tie game this';
    } else if (
        (chosenByPlayer === 'rock' && chosenByComputer === 'scissors') ||
        (chosenByPlayer === 'paper' && chosenByComputer === 'rock') ||
        (chosenByPlayer === 'scissors' && chosenByComputer === 'paper')
        ) { 
            return 'Player Wins'; 
        }   else {
            return 'Computer Wins';
        }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player Wins').length;
    let computerWins = winners.filter((item) => item == 'Computer Wins').length;
    let tieGames = winners.filter((item) => item == 'Tie game this').length;
    console.log('FINAL RESULTS:');
    console.log('Player wins:', playerWins);
    console.log('Computer wins:', computerWins);
    console.log('Tie Games:', tieGames);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round: ', round);
    console.log('Player chose: ', playerChoice);
    console.log('Computer chose: ', computerChoice);
    console.log(winner, 'round');
    console.log('---------------------------------------------')
}
*/