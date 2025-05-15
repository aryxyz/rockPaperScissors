
let humanScore = 0
let computerScore = 0
playGame()

function playGame(){
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    console.log("---Finish---")

}


function playRound(humanChoice,computerChoice){
    console.log("----------------   ")
    if(humanChoice == computerChoice){
        console.log("same")
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win " + humanChoice + " beat " + computerChoice)
        humanScore+=1;
    }else if(humanChoice == "rock" && computerChoice=="scissors"){
        console.log("You Win " + humanChoice + " beat " + computerChoice)
        humanScore+=1;
    }else if(humanChoice == "scissors" && computerChoice=="paper"){
        console.log("You Win " + humanChoice + " beat " + computerChoice)
        humanScore+=1;
    }else{
        console.log("You Lose " + computerChoice + " beat " + humanChoice)
        computerScore+=1;
    }

    console.log("Computer "+computerScore)
    console.log("You " + computerScore)



}






function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return "rock"
        case 1:
            return "paper"

        case 2:
            return "scissors"

        default:
            return "Error"
    }
}

function getHumanChoice(){
    // let choice = prompt("rock or paper  or scissors ? ")
    return choice.toLowerCase()
}