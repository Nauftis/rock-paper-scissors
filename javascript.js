const WATER = "water";
const GRASS = "grass";
const FIRE = "fire";

"https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"

function getComputerChoice() {
    let percentage = Math.random() * 100
    if (percentage <= 33) {
        return WATER
    }
    if (percentage <= 66) {
        return GRASS
    }
    else {
        return FIRE
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanSelection) {
    let computerSelection = getComputerChoice();
    // change pictures to selections
    changeImg(playerChoiceImg,humanSelection)
    changeImg(computerChoiceImg,computerSelection)

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == WATER && computerChoice == WATER || humanChoice == GRASS && computerChoice == GRASS || humanChoice == FIRE && computerChoice == FIRE) {
            showResult("It's a tie, you both chose " + humanChoice)
        }
        if (humanChoice == WATER && computerChoice == GRASS || humanChoice == GRASS && computerChoice == FIRE || humanChoice == FIRE && computerChoice == WATER) {
            scoreComputer();
            showResult("You lose, " + computerChoice + " is super effective against " + humanChoice)
        }
        if (humanChoice == WATER && computerChoice == FIRE || humanChoice == GRASS && computerChoice == WATER || humanChoice == FIRE && computerChoice == GRASS) {
            scorePlayer();
            showResult("You win, " + humanChoice + " is super effective against " + computerChoice)
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

function changeImg(imgElement, choice){
    if (choice == FIRE) {
        imgElement.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif";
    }
    if (choice == WATER) {
        imgElement.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif";
    }
    if (choice == GRASS) {
        imgElement.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif";
    }
}

// UI
const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => {
    playGame(WATER);
});

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", () => {
    playGame(GRASS);
});

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playGame(FIRE);
});

const playerChoiceImg = document.getElementById("playerChoice");

const computerChoiceImg = document.getElementById("computerChoice");
