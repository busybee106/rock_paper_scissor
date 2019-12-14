//cache the DOM
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#scoreBoard");
const result_div = document.querySelector("#results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//on click, run the following function
rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock!");
})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper!");
})

scissors_div.addEventListener('click', function() {
    console.log("hey you clicked on scissors!");
})










/**************************************************
 * ComputerPlay:
 * Randomly returns Rock, Paper, or Scissors.
 *************************************************/
function computerPlay() {
    var array = ['r', 'p', 's'];
    var pcMove = Math.floor(Math.random() * 3);
    
    if (pcMove === 0) {
        return array[0];
    }
    else if (pcMove === 1) {
        return array[1];
    }
    else
        return array[2];
    }
    





















    // /**************************************************
    //  * playRound:
    //  * Play a round of Rock, Paper, Scissors with the PC.
    //  *************************************************/
    // function playRound(playerSelection, computerPlay) {
    
    //   var computerMove = computerPlay.toLocaleLowerCase();
    //   var playerMove = playerSelection.toLocaleLowerCase();
      
           
    //   if (computerMove == playerMove) {
    //     console.log("It's a draw! " + "PC " + computerMove + " equals " + playerMove + "!");
    //   }
    //   else if (computerMove == "rock" && playerMove == "scissors") {
    //     pcScore++;
    //     if (pcScore == 5) {
    //       console.log("You lose!");
    //       return;
    //     }
    //     else {
    //     console.log("You lose! " + "PC " + computerMove + " beats " + playerMove + "!");
    //     }
    //   }
    //   else if (computerMove == "scissors" && playerMove == "paper") {
    //     pcScore++;
    //     if (pcScore == 5) {
    //       console.log("You lose!");
    //     }
    //     else {
    //     console.log("You lose! " + "PC " + computerMove + " beats " + playerMove + "!");
    //     }
    //   }
    //   else if (computerMove == "paper" && playerMove == "rock") {
    //     pcScore++;
    //     if (pcScore == 5) {
    //       console.log("You lose!");
    //     }
    //     else {
    //     console.log("You lose! " + "PC " + computerMove + " beats " + playerMove + "!");
    //     }
    //   }
    //   else {
    //     playerScore++;
    //     if (playerScore == 5) {
    //       console.log("You win!");
    //     }
    //     else {
    //     console.log("You win! " + playerMove + " beats " + "PC " + computerMove + "!");
    //     }
    //   }
    // }
    
    // //Rock button
    // document.getElementById("rock").addEventListener("click", function() {
    //   if (playerScore === 5 || pcScore === 5) {
    //     if (playerScore > pcScore) {
    //       return "You win!";
    //     }
    //     return;
    //   }
    //   playRound('rock', computerPlay());
    // });
    
    // //Paper button
    // document.getElementById("paper").addEventListener("click", function() {
    //   if (playerScore === 5 || pcScore === 5) {
    //     if (playerScore > pcScore) {
    //       return "You win!";
    //     }
    //     return;
    //   }
    //   playRound('paper', computerPlay());
    // });
    
    // //Scissors button
    // document.getElementById("scissors").addEventListener("click", function() {
    //   if (playerScore === 5 || pcScore === 5) {
    //     if (playerScore > pcScore) {
    //       return "You win!";
    //     }
    //     return;
    //   }
    //   playRound('scissors', computerPlay());
    // });