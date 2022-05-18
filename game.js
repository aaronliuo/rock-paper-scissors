function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3);

    return computerChoice;
}

function decideWinner(playerSelection, computerSelection) {
    if(playerSelection === 0) {
        if(computerSelection === 0) {
            result.textContent = "Draw! Both picked rock.";
        } 
        else if(computerSelection === 1) {
            result.textContent = "You lose! You picked rock and computer picked paper.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        }
        else {
            result.textContent = "You win! You picked rock and computer picked scissors.";
            humanScore.textContent = parseInt(humanScore.textContent)+1;
        }
    }
    else if(playerSelection === 1) {
        if(computerSelection === 0) {
            result.textContent = "You win! You picked paper and computer picked rock.";
            humanScore.textContent = parseInt(humanScore.textContent)+1;
        } 
        else if(computerSelection === 1) {
            result.textContent = "Draw! Both picked paper.";
        } 
        else {
            result.textContent = "You lose! You picked paper and computer picked scissors.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        } 
    }
    else {
        if(computerSelection === 0) {
            result.textContent = "You lose! You picked scissors and computer picked rock.";
            computerScore.textContent = parseInt(computerScore.textContent)+1;
        }
        else if(computerSelection === 1) {
            result.textContent = "You win! You picked scissors and computer picked paper.";
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

