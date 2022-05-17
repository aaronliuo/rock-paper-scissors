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
        if(computerSelection === 0) return "Draw! Both picked rock.";
        else if(computerSelection === 1) return "You lose! Paper beats rock.";
        else return "You win! Rock beats scissors.";
    }
    else if(playerSelection === 1) {
        if(computerSelection === 0) return "You win! Paper beats rock.";
        else if(computerSelection === 1) return "Draw! Both picked paper.";
        else return "You lose! Scissors beats paper.";
    }
    else {
        if(computerSelection === 0) return "You lose! Rock beats scissors.";
        else if(computerSelection === 1) return "You win! Scissors beats paper.";
        else return "Draw! Both picked scissors.";
    }
}

let playerResponse = prompt("Welcome to rock-paper-scissors. Enter your choice: ");
playerResponse = playerResponse.toLowerCase();
console.log("You chose " + playerResponse);
if(playerResponse === "rock") {
    playerResponse = 0;
}
else if(playerResponse === "paper") {
    playerResponse = 1;
}
else if(playerResponse === "scissors") {
    playerResponse = 2;
}
else {
    playerResponse = 3;
}

if(playerResponse != 3) {
    console.log(decideWinner(playerResponse, computerPlay()));
}
else {
    console.log("Unvalid response");
}