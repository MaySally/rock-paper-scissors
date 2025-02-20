let humanScore = 0;
let computerScore = 0;
let gameCount =0;

function getComputerChoice() {
        // Generate a random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3);

        // Return the corresponding choice
        if (randomNumber === 0) {
            return 'rock';
        } else if (randomNumber === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
}

function playGame(humanChoice) { 

    gameCount++;

    let computerChoice = getComputerChoice(); 

    // Compare choices and determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        humanScore++;
        computerScore++;
        document.getElementById("message-prompt").innerHTML = "It's a tie! Both chose " + humanChoice;

    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; // Increment humanScore
        document.getElementById("message-prompt").innerHTML = "You win! " + humanChoice + " beats " + computerChoice;
    } else {    
        document.getElementById("message-prompt").innerHTML = "Computer wins! " + computerChoice + " beats " + humanChoice;
        console.log("Computer wins!" + computerChoice + "beats" + humanChoice);
        computerScore++; // Increment computerScore
    }
    
    // Log the current scores
    console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
    document.getElementById("tally").innerHTML = "Computer: "+ computerScore + " Whoever you are: " + humanScore;
}


