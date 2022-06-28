//Step 12 - Change if statement under playerChoice prompt to notify player of typo with while loop
//Step 13 - Loop needs to end when player enters correct spelling and game continues, redefine value of input
//Step 14 - Run check against input again to end loop with true
//Step 15 - Fix cancel button by adding the null loop into the new typo loop (this appears to be broken still diagnose later)
//Step 16 - Add new function checkWinner with paramets determined by the players choice and computers choice
//Step 17 - Use if statement to conclude tie game if chosenByPlayer = chosenByComputer
//Step 18 - Process all possible win scenarios for chosenByPlayer using if || statements
//Step 19 - After concluding all outcomes for tie and win, an else statement determines computer wins
//Step 20 - Create const winner to determine parameter outcome for function checkWinner, input coinsole.log after to test
//Step 21 Add return input; at the end of playerChoice because it was not receiving player input



const choices = ['rock', 'paper', 'scissors'];

function game(){
    playRound();
}


function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    console.log(winner)
    //Add new const winner to determine chosenByPlayer/Computer outcome with checkWinner
    //Make parameters playerSelection and computerSelection because --
    /* playerSelection const = playerChoice function, playerChoice function is used for input and validation to convert const choices
    string (rock, paper, scissors) into prompt, player prompt result string is converted to number to use in checkWinner function as
    chosenByPlayer/Computer parameters, chosenByP/C parameters used to determine winner and result of checkWinner function makes
    const winner = const player/computerSelection. Guarunteed you will be trippd up by 'choice' parameter and const choices.
    */
    // Close lose end with console.log
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
        input = prompt('Spelling needs to be correct! Capitalization not required. Type Rock, Paper, or Scissors') //while loop copied from above to work in both loops
        
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

    //let check = validateInput(input)
        //if (check === true) {
            //changed to while loop to check for false to change prompt notifying player of typo
    //Because new prompt will continue to loop, you need to end the loop by redefining input
    //after redefining you need to re-check validation by running check against validateInput(input) again
    //When check is no longer false, the game will continue
    //copy while loop for null (cancel button) into new loop so cancel will work before and after typo
    //moved comments below block

    //Added return input; outside of loop to enter the players input




function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
    }

function checkWinner(chosenByPlayer, chosenByComputer){
    if(chosenByPlayer === chosenByComputer){
        return 'Tie';
        //Below, using || we can create cleaner lines than if and else statements seen in notes below
        //Comparing all outcomes for chosenByPlayer to win and chosenByComputer to lose
        //Use else statement for computer to win because tie and win for player are already processed
    } else if (
        (chosenByPlayer === 'rock' && chosenByComputer === 'scissors') ||
        (chosenByPlayer === 'paper' && chosenByComputer === 'rock') ||
        (chosenByPlayer === 'scissors' && chosenByComputer === 'paper')
        ) { 
            return 'Player Win'; 
        }   else {
            return 'Computer Win';
        }
}
//added function checkWinner to determine who wins game with parameters determined by what player and computer chose
//start with tie, if chosenByPlayer is the same as computer return Tie will print
//Use else if to go through all outcomes, use && (and, not || or!) to compare player and computer to return winner/loser
/* This is that outcome:
function checkWinner(chosenByPlayer, chosenByComputer){
    if(chosenByPlayer === chosenByComputer){
        return 'Tie';
    } else if (chosenByPlayer === 'rock' && chosenByComputer === 'scissors'){
        return 'Player Win';
    } else if (chosenByPlayer === 'scissors' && chosenByComputer === 'paper'){
        return 'Player Win';
    } else if (chosenByPlayer === 'paper' && chosenByComputer === 'rock'){
        return 'Player Win';
    } else {
        return 'Computer Win';
    }
}

BUT you can use || (or) to simplyfy as seen above! */

game();
