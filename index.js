
            function computerPlay (){
                let x = ["ROCK", "PAPER", "SCISSORS"];
                let randValue;
                randValue = x[Math.floor(Math.random()*x.length)];
                return randValue;
            }

            function singlePlay(playerSelection, computerSelection){
                
                if (playerSelection == "ROCK" && computerSelection == "PAPER"){
                    console.log("You lose! Rock is weak against Paper");
                    return 0;
                }
                else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
                    console.log("You win! Rock beats Scissors ");
                    return 1;
                }
                else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
                    console.log("You both have Rock!");
                    return "tie";
                }
                else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
                    console.log("You win! Paper beats Rock");
                    return 1;
                }
                else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
                    console.log("You lose! Paper is weak against Scissors");
                    return 0;
                }
                else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
                    console.log("You both have paper");
                    return "tie";
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
                    console.log("You lose! Scissors are weak against Rock");
                    return 0;
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
                    console.log("You win! Scissors beat Paper");
                    return 1;
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
                    console.log("You both have Scissors");
                    return "tie";
                }
            }

            function gameCounter(winner){
                if (winner == 1){
                    playerPoints++;
                }
                else if (winner == 0){
                    PCPoints++;
                }
            }
        
            let PC;
            let Player;
            let winner;
            let counter = 0;
            let playerPoints = 0;
            let PCPoints = 0;

            //*****You are working here
            const playerRock = document.querySelector("#idRock");
            playerRock.addEventListener("click", ()=>{
                singlePlay("ROCK", computerPlay());
            });
            const playerPaper = document.querySelector("#idPaper");
            const playerScissors = document.querySelector("#idScissors");



            if (playerPoints>PCPoints){
                console.log("Congratulations, you are the winner of this session");
            }
            else if (playerPoints==PCPoints){
                console.log("You both have had a tied game!")
            }
            else
            console.log("Bad luck, try next time");


            

