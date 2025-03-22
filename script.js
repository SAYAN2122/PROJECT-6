let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".pic");
const msg = document.querySelector(".moveIt");
const sc1 = document.querySelector(".score1")
const sc2 = document.querySelector(".score2")
const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randmIndx = Math.floor(Math.random() * 3);
    return options[randmIndx];
};

const drawGame = () => {
    msg.innerText="Game Was Draw!!"
    msg.style.backgroundColor = "yellowgreen"
};

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        playerScore++;
        sc1.innerText = playerScore
        msg.innerText= `You Win!!  ${userChoice} beats ${compChoice}`;// innerText is used to show the desiered output in the msg
        msg.style.backgroundColor = "green"
    } else {
        computerScore++;
        sc2.innerText = computerScore
        msg.innerText=`You Lose!! ${compChoice} beats${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};

const PlayGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = getComputerChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
        return; // Stop execution since it's a draw
    }

    let userwin = true;
    if (userChoice === "rock") {
        userwin = compChoice === "paper" ? false : true;
    } 
    else if (userChoice === "paper") {
        userwin = compChoice === "scissors" ? false : true;
    } 
    else {
        userwin = compChoice === "rock" ? false : true;
    }

    showWinner(userwin,userChoice,compChoice); // Call function to display result
};

choices.forEach((image) => {
    const picId = image.getAttribute("id");
    image.addEventListener("click", () => {
        PlayGame(picId);
    });
});