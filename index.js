let scoreMachine = 0, scorePlayer = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3)

    switch(choice){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(computerSelection.toUpperCase()==="ROCK"){
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                return result ="Tie, both players selected rock!";
            case "PAPER":
                scorePlayer++;
                return result ="You won, paper beats rock!";
            case "SCISSORS":
                scoreMachine++;
                return result ="You lost, rock beats scissors!";
        }
    }
    if(computerSelection.toUpperCase()==="PAPER"){
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                scoreMachine++;
                return result ="You lost, paper beats rock!";
            case "PAPER":
                return result ="Tie, both players selected paper!";
            case "SCISSORS":
                scorePlayer++;
                return result ="You won, scissors beats paper!";
        }
    }
    if(computerSelection.toUpperCase()==="SCISSORS"){
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                scorePlayer++;
                return result ="You won, rock beats scissors!";
            case "PAPER":
                scoreMachine++;
                return result ="You lost, scissors beats paper!";
            case "SCISSORS":
                return result ="Tie, both players selected scissors!";
        }
    }
}

for(let i=0;i<5;i++){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Type one of the following: Rock | Paper | Scissors")
    console.log(playRound(playerSelection, computerSelection));
}

if(scoreMachine>scorePlayer){
    console.log("You lost the game, the machine scored more than you!");
} 

if(scoreMachine<scorePlayer){
    console.log("You won the game, the machine scored less than you!");
}

if(scoreMachine===scorePlayer){
    console.log("You tied the game, the machine scored the same as you!");
}

