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
