
            function computerPlay (){
                let x = ["ROCK", "PAPER", "SCISSORS"];
                let randValue;
                randValue = x[Math.floor(Math.random()*x.length)];
                return randValue;
            }

            function singlePlay(playerSelection, computerSelection){
                
                
                if (playerSelection == "ROCK" && computerSelection == "PAPER"){
                    console.log("You lose! Rock is weak against Paper");
                    playerCH = "Rock";
                    pcCh = "Paper";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 0;
                }
                else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
                    console.log("You win! Rock beats Scissors ");
                    playerCH = "Rock";
                    pcCh = "Scissors";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 1;
                }
                else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
                    console.log("You both have Rock!");
                    playerCH = "Rock";
                    pcCh = "Rock";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return "tie";
                }
                else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
                    console.log("You win! Paper beats Rock");
                    playerCH = "Paper";
                    pcCh = "Rock";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 1;
                }
                else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
                    console.log("You lose! Paper is weak against Scissors");
                    playerCH = "Paper";
                    pcCh = "Scissors";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 0;
                }
                else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
                    console.log("You both have paper");
                    playerCH = "Paper";
                    pcCh = "Paper";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return "tie";
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
                    console.log("You lose! Scissors are weak against Rock");
                    playerCH = "Scissors";
                    pcCh = "Rock";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 0;
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
                    console.log("You win! Scissors beat Paper");
                    playerCH = "Scissors";
                    pcCh = "Paper";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
                    return 1;
                }
                else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
                    console.log("You both have Scissors");
                    playerCH = "Scissors";
                    pcCh = "Scissors";
                    playerChoiceText.innerHTML = playerCH;
                    pcChoiceText.innerHTML = pcCh;
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
            let playerCH = "";
            let pcCh = "";

            //Get points elements from html
            let playerPointsText = document.getElementById("playerPoints");
            let pcPointsText = document.getElementById("pcPoints");
            

            //Get choices
            let playerChoiceText = document.getElementById("playerChoice");
            let pcChoiceText = document.getElementById("pcChoice");

            //Announce winner
            let container = document.querySelector(".matchWinner");
            let para = document.createElement("p");
            

            
            const playerRock = document.querySelector("#idRock");
            playerRock.addEventListener("click", ()=>{
                if (PCPoints<5 && playerPoints<5){
                    winner = singlePlay("ROCK", computerPlay());
                    gameCounter(winner);
                    console.log("Player Points: " + playerPoints);
                    console.log("PC Points: " + PCPoints);
                    playerPointsText.innerHTML = playerPoints;
                    pcPointsText.innerHTML = PCPoints;
                    if (playerPoints == 5){
                        console.log("Congratulations! You have won the game :)");
                        para.textContent = "Congratulations! You have won the game :)";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        playerPoints=0;
                        PCPoints=0;
                    }
                    if (PCPoints==5){
                        console.log("Oops! You have lost, please try again");
                        para.textContent = "Oops! You have lost, please try again";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        PCPoints=0;
                        playerPoints=0;
                    }
                } 
            });

        
            const playerPaper = document.querySelector("#idPaper");
            playerPaper.addEventListener("click", ()=>{
                if (PCPoints<5 && playerPoints<5){
                    winner = singlePlay("PAPER", computerPlay());
                    gameCounter(winner);
                    console.log("Player Points: " + playerPoints);
                    console.log("PC Points: " + PCPoints);
                    playerPointsText.innerHTML = playerPoints;
                    pcPointsText.innerHTML = PCPoints;
                    if (playerPoints == 5){
                        console.log("Congratulations! You have won the game :)");
                        para.textContent = "Congratulations! You have won the game :)";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        playerPoints=0;
                        PCPoints=0;
                    }
                    if (PCPoints==5){
                        console.log("Oops! You have lost, please try again");
                        para.textContent = "Oops! You have lost, please try again";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        PCPoints=0;
                        playerPoints=0;
                    }
                }
            });


            const playerScissors = document.querySelector("#idScissors");
            playerScissors.addEventListener("click", ()=>{
                if (PCPoints<5 && playerPoints<5){
                    winner = singlePlay("SCISSORS", computerPlay());
                    gameCounter(winner);
                    console.log("Player Points: " + playerPoints);
                    console.log("PC Points: " + PCPoints);
                    playerPointsText.innerHTML = playerPoints;
                    pcPointsText.innerHTML = PCPoints;
                    if (playerPoints == 5){
                        console.log("Congratulations! You have won the game :)");
                        para.textContent = "Congratulations! You have won the game :)";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        playerPoints=0;
                        PCPoints=0;
                    }
                    if (PCPoints==5){
                        console.log("Oops! You have lost, please try again");
                        para.textContent = "Oops! You have lost, please try again";
                        container.appendChild(para);
                        document.getElementById('reset-button').style.display = "block";
                        PCPoints=0;
                        playerPoints=0;
                    }
                }
            });

            function reloadPage(){
                window.location.reload();
            }