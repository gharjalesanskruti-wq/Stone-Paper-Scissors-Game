let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");     //to select or access the choice
const msg = document.querySelector("#msg");               //to access the message

const userScorePara = document.querySelector("#user-score"); //to access user score
const compScorePara = document.querySelector("#comp-score"); //to access computer score

//for computer choice
const genCompChoice = () => {                            // use to generate computer choice
    const options = ["stone", "paper", "scissors"];      //store options in array for random choice  
    const randIdx = Math.floor(Math.random() * 3);       //use to generate randomly any one choice and store in randIdx
    return options[randIdx];                             //return the selected random index of option
};

//function for game draw 
const drawGame = () =>{
    console.log("game was draw.");  
    msg.innerText = "Game was Draw. Play again.";        
    msg.style.backgroundColor = "#081b31" ;            //set background color for draw   
};

//show winning conditions 
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;                                         //update the user score
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";                 //set background color as green for win 
  } else {
    compScore++;                                         //update the computer score
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";                   //set background color as red for lose
  }
};

// playGame generate random choice from computer then compare the win from both side and update the score
const playGame = (userChoice) =>{                         // playGame knows the choice of user
    console.log("user choice =", userChoice);             // use to print user choice
    const compChoice = genCompChoice();                   //return generate choice of computer
    console.log("computer choice = ", genCompChoice);     // use to print computer choice

    //conditions to generate fight between computer and user 
    if(userChoice === compChoice){                        
        drawGame() ;                                      //call draw game function
    }else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);          //to show winner
  }
};

// for user choice
choices.forEach((choice) => {                               //use to choice individual choice
    choice.addEventListener("click",() =>{                  //use to track click events 
        const user_choice = choice.getAttribute("id");      //use to access div Id
        playGame(user_choice);                              //then call playGame where we pass user choice
    })
});