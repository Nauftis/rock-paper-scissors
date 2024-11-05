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
    let computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors") {
            showResult("It's a tie, you both chose " + humanChoice)
        }
        if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
            scoreComputer();
            showResult("You lose, " + computerChoice + " beats " + humanChoice)
        }
        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            scorePlayer();
            showResult("You win, " + humanChoice + " beats " + computerChoice)
        }

    }
    playRound(humanSelection, computerSelection);
}

function showResult(resultRound) {
    const divResult = document.getElementById("result");
    divResult.textContent = resultRound;
}

function scorePlayer() {
    if (humanScore < 5) {
        humanScore++;
    }
    if (humanScore == 5) {
        announceWinner();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    };

    const divScorePlayer = document.getElementById("scorePlayer");
    divScorePlayer.textContent = humanScore;
}

function scoreComputer() {
    if (computerScore < 5) {
        computerScore++;
    }
    if (computerScore == 5) {
        announceWinner();
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    };

    const divScoreComputer = document.getElementById("scoreComputer");
    divScoreComputer.textContent = computerScore;
}


function announceWinner() {
    let winner = ""
    if (humanScore == 5) {
        winner = "Congrats, you won!";
    }
    if (computerScore == 5) {
        winner = "Bummer, you lost.";
    };
    const pWinner = document.getElementById("winner");
    pWinner.textContent = winner;
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
