//Step 1 - create functions: game, playRound, playerChoice, computerChoice
//Step 2 - create global const choices and set parameters
//Step 3 - return choices under computerChoice function to choose random string from global choices array
//Step 4 - create variables under playRound function, playerSelection and computerSelection
//Step 5 - create prompt for input under playerChoice function to allow playerSelection variable, force lowercase
//Step 6 - put console.log under playerSelection after input, add game() to end of code to test game
//Step 7 - add while loop under initial prompt with {} to re-prompt if player clicks cancel
//Step 8 - create function to validate input (const choices), so incorrect input will require re-entry
//Step 9 - under playerChoice, below input create a let (check) to be equal to inputValidation
//Step 10 - on the next line create an if statement where true validates correct input from player (follow with console.log in {})


const choices = ['rock', 'paper', 'scissors'];
//global variable
//array (comma seperated list)
//rock is 0, paper is 1, scissors is 2 in the computerChoice

function game(){
    playRound();
/*Play game
five rounds
play within console*/
}


function playRound() {
    //execute a round
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //creates a variable (const) from the result of arguement (return choices) from function (player/computerChoice)
}

function playerChoice() {
//get text input from player through prompt
    let input = prompt('Type Rock, Paper, or Scissors.');
    // While loop below, input = null prevents player from clicking cancel (null) and re-prompts for answer
    // While loop required to be in {}
    while (input === null) {
        input = prompt('Type Rock, Paper, or Scissors.')
    }
    input = input.toLowerCase();

    //after creating validate function, create let check to = validationInput
    //create if statement for validationInput to be true to new check (if line followed by {})
    //close off loose end with console.log after the if statement
    let check = validateInput(input)
    if (check === true) {
        console.log(input)
    }
    //console.log(input); //commented out
    //create variable for player to input into a prompt window to make selection
    // force string input to process as all lower case to make case insensitive


}

function computerChoice(){
//random input generated for computer
    return choices[Math.floor(Math.random() * choices.length)]
    //choice.length, length is the amount of parameters for const choices (3)
        //note: max index for const choices array is 2 but the length is 3
    //Math.random gives a random decimal number between 0 and 0.99...
    //random decimal number <1 * 3 will result in number <3
    //Math.floor to round down to integer
    //result will be a random integer between 0 and 2 (0, 1, or 2)
}

function validateInput(choice){
    //if statement to make input spelling accuracy raequired by using return true, else is false {} required 
    //create choice to be in the include function
    //else is between the } closing and a new {} for the return false line below (initial { is fllowed with closing } at end)
    //next is under player choice to check for valid input
    if(choices.includes(choice)) {
        return true
    } else {
        return false
    }
}

game();