function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice === 0) {
        console.log("Computer chose rock");
    }
    else if(computerChoice === 1) {
        console.log("Computer chose paper");
    }
    else {
        console.log("Computer chose scissors");
    }

    return computerChoice;
}

function decideWinner(playerSelection, computerSelection) {
    if(playerSelection === 0) {
        if(computerSelection === 0) {
            result.textContent = "Draw! Both picked rock.";
        } 
        else if(computerSelection === 1) {
            result.textContent = "You lose! Paper beats rock.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        }
        else {
            result.textContent = "You win! Rock beats scissors.";
            humanScore.textContent = parseInt(humanScore.textContent)+1;
        }
    }
    else if(playerSelection === 1) {
        if(computerSelection === 0) {
            result.textContent = "You win! Paper beats rock.";
            humanScore.textContent = parseInt(humanScore.textContent)+1;
        } 
        else if(computerSelection === 1) {
            result.textContent = "Draw! Both picked paper.";
        } 
        else {
            result.textContent = "You lose! Scissors beats paper.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        } 
    }
    else {
        if(computerSelection === 0) {
            result.textContent = "You lose! Rock beats scissors.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        }
        else if(computerSelection === 1) {
            result.textContent = "You win! Scissors beats paper.";
            humanScore.textContent = parseInt(humanScore.textContent)+1;
        }
        else {
            result.textContent = "Draw! Both picked scissors.";
        }
    }
}



const buttons = document.querySelectorAll('button');
const result = document.querySelector('.declare-winner');
const computerScore = document.querySelector('#computer-score');
const humanScore = document.querySelector('#human-score');

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        decideWinner(i, computerPlay());
    });

}

// const rockButton = document.querySelector('#rock');
// const paperButton = document.querySelector('#paper');
// const scissorsButton = document.querySelector('#scissors');

// rockButton.addEventListener('click', decideWinner(0, computerPlay()));
// paperButton.addEventListener('click', decideWinner(1, computerPlay()));

// let playerResponse = prompt("Welcome to rock-paper-scissors. Enter your choice: ");
// playerResponse = playerResponse.toLowerCase();
// console.log("You chose " + playerResponse);
// if(playerResponse === "rock") {
//     playerResponse = 0;
// }
// else if(playerResponse === "paper") {
//     playerResponse = 1;
// }
// else if(playerResponse === "scissors") {
//     playerResponse = 2;
// }
// else {
//     playerResponse = 3;
// }

// if(playerResponse != 3) {
//     console.log(decideWinner(playerResponse, computerPlay()));
// }
// else {
//     console.log("Unvalid response");
// }