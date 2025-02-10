function playGame() { 
    let humanScore = 0;
    let computerScore = 0;

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

    function getHumanChoice() {
        // Prompt the user to enter their choice (rock, paper, or scissors)
        let userChoice = prompt('Please enter rock, paper, or scissors:').toLowerCase();

        // Validate the user input
        while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            // If input is invalid, prompt the user again
            userChoice = prompt('Invalid choice! Please enter rock, paper, or scissors:').toLowerCase();
        }

        // Return the valid user choice
        return userChoice;
    }

    function playRound(humanChoice, computerChoice) {
        // Convert humanChoice to lowercase for case insensitivity
        humanChoice = humanChoice.toLowerCase();

        // Compare choices and determine the winner
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
            humanScore++; // Increment humanScore
        } else {
            console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1));
            computerScore++; // Increment computerScore
        }
        
        // Log the current scores
        console.log("Human Score: " + humanScore + " | Computer Score: " + computerScore);
    }

    // Example of using playRound:
    let humanChoice = getHumanChoice(); // Get human's choice
    let computerChoice = getComputerChoice(); // Get computer's choice
    playRound(humanChoice, computerChoice); // Play the round

    // Play 5 rounds using a loop
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        let humanChoice = getHumanChoice(); // Get human's choice
        let computerChoice = getComputerChoice(); // Get computer's choice
        playRound(humanChoice, computerChoice); // Play the round
    }

    // Declare the overall winner at the end
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("You win the game! Final score - Human: " + humanScore + " | Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Final score - Human: " + humanScore + " | Computer: " + computerScore);
    } else {
        console.log("It's a tie game! Final score - Human: " + humanScore + " | Computer: " + computerScore);
    }
}

// Call playGame to start the game
playGame();
