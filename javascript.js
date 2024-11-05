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

    let humanScore = 0;
    let computerScore = 0;

function playGame(humanSelection) {


    function playRound(humanChoice, computerChoice) {
        showResultComputer("Computer chose " + computerChoice)
        //rock
        if (humanChoice == "rock" && computerChoice == "rock") {
            showResultPlayer("It's a tie.")
        }
        if (humanChoice == "rock" && computerChoice == "paper") {
            scoreComputer();
            showResultPlayer("You lose, paper beats rock.")
        }
        if (humanChoice == "rock" && computerChoice == "scissors") {
            scorePlayer();
            showResultPlayer("You win, rock beats scissors")
        } 
        //paper
        if (humanChoice == "paper" && computerChoice == "rock") {
            scorePlayer();
            showResultPlayer("You win, paper beats rock.")
        }
        if (humanChoice == "paper" && computerChoice == "paper") {
            showResultPlayer("It's a tie.")
        }
        if (humanChoice == "paper" && computerChoice   == "scissors") {
            scoreComputer();
            showResultPlayer("You lose, scissors beats paper.")
        }
        //scissors
        if (humanChoice == "scissors" && computerChoice == "rock") {
            scoreComputer();
            showResultPlayer("You lose, rock beats scissors.")
        }
        if (humanChoice == "scissors" &&computerChoice == "paper") {
            scorePlayer();
            showResultPlayer("You win, scissors beats paper")
        }
        if (humanChoice == "scissors" && computerChoice == "scissors") {
            showResultPlayer("It's a tie.")
        }        
    }

    

    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    // if (humanScore > computerScore) {
    //     console.log("You win!")
    // }
    // if (computerScore > humanScore) {
    //     console.log("You lose.")
    // }
    // if (computerScore == humanScore) {
    //     console.log("It's a tie.")
    // }
}

function showResultComputer(resultComputer){
    const divResultComputer = document.getElementById("resultsComputer");
    divResultComputer.textContent = resultComputer;
}

function showResultPlayer(resultPlayer){
    const divResultPlayer = document.getElementById("resultsPlayer");
    divResultPlayer.textContent = resultPlayer;
}

function scorePlayer() {
    if (humanScore < 5) {
        humanScore++;
    }
    const divScorePlayer= document.getElementById("scorePlayer");
    divScorePlayer.textContent = humanScore;
}

function scoreComputer() {
    if (computerScore < 5) {
        computerScore++;
    }
    const divScoreComputer= document.getElementById("scoreComputer");
    divScoreComputer.textContent = computerScore;
}


// UI
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => {
    playGame("rock");
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", () => {
    playGame("paper");
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
});