function getComputerChoice() {
    let percentage = Math.random() * 100
    if (percentage <= 33)
    {
        return "Rock"
    }
    if (percentage <= 66)
    {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper' or 'scissors'")
    if (humanChoice == "rock")
    {
        return "rock"
    }
}