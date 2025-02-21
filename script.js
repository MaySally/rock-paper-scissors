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
        document.getElementById("message-result").innerHTML = "It's a tie! Both chose " + humanChoice;

    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; // Increment humanScore
        document.getElementById("message-result").innerHTML = "You win! " + humanChoice + " beats " + computerChoice;
    } else {    
        document.getElementById("message-result").innerHTML = "Computer wins! " + computerChoice + " beats " + humanChoice;
        console.log("Computer wins!" + computerChoice + "beats" + humanChoice);
        computerScore++; // Increment computerScore
    }

     // Show the results container after the first play
    document.querySelector('.results-container').style.display = 'block';


    if (humanScore === 5 && computerScore === 5) {
        document.getElementById("message-result").innerHTML = "🎉TIE! Both reached 5!🏆";
        document.getElementById("tally").innerHTML = "Computer: " + computerScore + " | Whoever you are: " + humanScore;
        resetGame();
    } else if (humanScore === 5) {
        document.getElementById("message-result").innerHTML = "🎉YOU WIN! First to five!🏆";
        document.getElementById("tally").innerHTML = "Computer: " + computerScore + " | Whoever you are: " + humanScore;
        resetGame();
        // Reset scores and game count
    } else if (computerScore === 5) {
        document.getElementById("message-result").innerHTML = "COMPUTER WINS! First to five!🏆";
        document.getElementById("tally").innerHTML = "Computer: " + computerScore + " | Whoever you are: " + humanScore;
        resetGame();
        // Reset scores and game count
    } else {
    // Log the current scores
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
        document.getElementById("tally").innerHTML = "Computer: " + computerScore + " | Whoever you are: " + humanScore;
    }
}

// Add event listener for "Start Again" button
document.querySelector('.restart-button').addEventListener('click', function() {
    resetGame();
    // Reset the displayed scores and message
    document.getElementById("tally").innerHTML = "Computer: 0 | Whoever you are: 0";
    document.getElementById("message-result").innerHTML = "Game reset! Make your choice and play again.";
    console.log("Game has been reset");
});

// Reset game state
function resetGame() {
    // Reset scores and game count
    humanScore = 0;
    computerScore = 0;
    gameCount = 0;
    // Reset the displayed scores and message
}



    


