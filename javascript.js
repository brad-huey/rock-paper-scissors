//Step 22 - Create for loop to limit the amount of rounds to 5, and it will no longer stop after one round either.
//Step 23 - To log winners we need to create global const winners with an empty array, and add a function under function playRound
//to push each winner into the empty array
//Step 24 - Create a new function called logWins and add console.log(winners) to it
//Step 25 - Add new logWins() function into function game() so it counts each round
//Step 26 - Remove console.logs(winners) create the array seen, and use console.logs to print the results
//Step 27 - Add logRound within playRound function so it logs each round
//Step 28 - Pass i from function game loop into the round() so it's round(i)
//Step 29 - Change some grammar to make the results make more sense, added new console.log '---' for readability
//Step 30 - Remove game(); at end of code, added a button in html file to start game so we can get to console
//before the game begins -- fixed tie game logging bug due to grammar inconsistancy
//Step 31 - Add a play new game feature to the button, for future reference (under function game())


const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game(){
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = "Play Again?";
    logWins();
}
//To make game last 5 rounds you could copy function playRound 5x but that is not an approach you can scale easily.
//Create a for loop. For loop is *for* a set amount until loop completes, *while* is during conditions being met
//(i is the common variable used for loops) i = 0 means the counter starts at 0 so start it at 1
// and as long as it is < or = 5
//the loop will continue. i++ adds 1 to i until it reaches 5.

//Add logWins(); function to add that function into each game round

//Add for loop variable (i) into playRound. This is required for playRound to receive the round number so we can log it.

//Added function to play again to the button just for future reference

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
  
    // move console.log(winner) and place under new function logWin
    //use new const winners to push winner into empty winners array (pay attention to the plural here)
    //this is to make a log for who won

    //Add logRound from the new function to be within the playRound function

    //Add round as parameter in playRound function and round into the logRound parameters
    //playRound now has i from function game loop in it, and this will pass it through to logRound to log it
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
    //console.log(winners) remove for now
    let playerWins = winners.filter((item) => item == 'Player Wins').length;
    let computerWins = winners.filter((item) => item == 'Computer Wins').length;
    let tieGames = winners.filter((item) => item == 'Tie game this').length;
    console.log('FINAL RESULTS:');
    console.log('Player wins:', playerWins);
    console.log('Computer wins:', computerWins);
    console.log('Tie Games:', tieGames);

    //This is an array, what it will do is check over each playerWins, computerWins, tieGames
    //If player doesn't win it will not count it toward playerWins. If playerWins it will count it. etc.
    //The item is the tally, the 'Player Win' (and others) HAS to be the same as the return under checkWinner
    //because that's what this is array is looking for to add to the tally
    //.length will tell us how many times for each
    //console.log for both 'Results: ' and 'Player Wins:' playerWins (followed by computer and ties)
    //FIX- 'Time game this' needed to be matched to checkWinner function when I editted for grammar
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round: ', round);
    console.log('Player chose: ', playerChoice);
    console.log('Computer chose: ', computerChoice);
    console.log(winner, 'round');
    console.log('---------------------------------------------')

    //Create function logRound with parameters for what the player chose, the computer chose, and who won.
    //Include round number as well. This will be displayed after the game. This will be added into playRound function.
    //Add final '---' as a separator for readability in the console
}
