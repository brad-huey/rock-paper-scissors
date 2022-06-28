//Step 12 - Change if statement under playerChoice prompt to notify player of typo with while loop
//Step 13 - Loop needs to end when player enters correct spelling and game continues, redefine value of input
//Step 14 - Run check against input again to end loop with true
//Step 15 - 


const choices = ['rock', 'paper', 'scissors'];

function game(){
    playRound();
}


function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
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
        input = input.toLowerCase();
        check = validateInput(input);
    }
    //console.log(input); //commented out

    //let check = validateInput(input)
        //if (check === true) {
            //changed to while loop to check for false to change prompt notifying player of typo
    //Because new prompt will continue to loop, you need to end the loop by redefining input
    //after redefining you need to re-check validation by running check against validateInput(input) again
    //When check is no longer false, the game will continue


}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice){
    return choices.includes(choice);
    }

game();
