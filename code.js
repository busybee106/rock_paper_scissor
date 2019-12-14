//cache the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#scoreBoard");
const result_p = document.querySelector("#results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function main() {
//on click, run the following function
rock_div.addEventListener('click', function() {
    playGame("r");
})

paper_div.addEventListener('click', function() {
    playGame("p");
})

scissors_div.addEventListener('click', function() {
    playGame("s");
})
}

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


/************************************************
 * convertToWord:
 * Clean up results
 ***********************************************/
function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";
}

/************************************************
 * win:
 * User wins
 ***********************************************/
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoice)}  beats ${smallCompWord} ${convertToWord(computerChoice)}. you win!`;
}    

/************************************************
 * lose:
 * User loses
 ***********************************************/
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${smallCompWord} ${convertToWord(computerChoice)} beats ${smallUserWord} ${convertToWord(userChoice)}. you lose!`;
}

/************************************************
 * draw:
 * User and computer draw
 ***********************************************/
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = "It's a draw!";
}

/************************************************
 * playGame:
 * Runs a round of rock, paper, scissors
 ***********************************************/
function playGame(userChoice) {
    const computerChoice = computerPlay();
    
    switch (userChoice + computerChoice) {
        //user win
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        //user lose
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        //tie
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

main();