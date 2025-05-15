
let humanScore = 0
let computerScore = 0



document.querySelector("#choices").addEventListener('click',function(e){

    let humanChoice = e.target.textContent.toLowerCase();
    if(humanScore < 4 && computerScore < 4){
        playRound(humanChoice,getComputerChoice());
        
    }else{
        playRound(humanChoice,getComputerChoice());
        let winner = "";
        if(humanScore > computerScore){
            winner = "You"
        }else{
            winner = "Computer"
        }
        document.querySelector("#winner-name").textContent = winner + " " + "Wins"

    }

    
});




function playRound(humanChoice,computerChoice){
    let message = "";
    if(humanChoice == computerChoice){
        message = "same";
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        message = "You Win " + humanChoice + " beat " + computerChoice;
        humanScore+=1;
    }else if(humanChoice == "rock" && computerChoice=="scissors"){
        message = "You Win " + humanChoice + " beat " + computerChoice;
        humanScore+=1;
    }else if(humanChoice == "scissors" && computerChoice=="paper"){
        message = "You Win " + humanChoice + " beat " + computerChoice;
        humanScore+=1;
    }else{
       message = "You Lose " + computerChoice + " beat " + humanChoice;
        computerScore+=1;
    }
    document.querySelector("#state-message").textContent = message;

    document.querySelector("#player-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;



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

