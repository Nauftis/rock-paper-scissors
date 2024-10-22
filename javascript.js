function getComputerChoice() {
    let percentage = Math.random() * 100
    if (percentage <= 33) {
        return "rock"
    }
    if (percentage <= 66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'")
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == "rock") {
        return "rock"
    }
    if (humanChoice == "paper") {
        return "paper"
    }
    if (humanChoice == "scissors") {
        return "scissors"
    }
    else {
        return null
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("Computer chose " + computerChoice)
        // rock
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore = computerScore + 1
            console.log("You lose! Paper beats rock.")
        }
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore = humanScore + 1
            console.log("You win! Rock beats scissors.")
        }
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a tie.")
        }
        // paper
        if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a tie.")
        }
        if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore = computerScore + 1
            console.log("You lose! Scissors beats paper.")
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore = humanScore + 1
            console.log("You win! Paper beats rock.")
        }
        //scissors
        if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore = humanScore + 1
            console.log("You win! Scissors beats paper.")
        }
        if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a tie.")
        }
        if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore = computerScore + 1
            console.log("You lose! Rock beats scissors.")
        }
        if (humanChoice == null) {
            console.log("You dumdum try 'rock', 'paper' or 'scissors'")
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("You win!")
    }
    if (computerScore > humanScore) {
        console.log("You lose.")
    }
    if (computerScore == humanScore) {
        console.log("It's a tie.")
    }
}