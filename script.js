let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msgpara  = document.querySelectorAll("#msg");

const userscorepara = document.querySelector("#user-score");

const compchoicepara = document.querySelector("#comp-score");


const gemcompchoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIx = Math.floor(Math.random()*3);
    return options[randIx]
}
const drawGame =()=>{
    console.log("game is draw");
    msg.innerText = "Match is draw,play again.";
    msg.style.backgroundColor = '#081b31';
  

}
const showWinner =(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compscore++;
        compchoicepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lose. ${compChoice} bets your ${userchoice
        }`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userchoice)=>{
console.log("user choice",userchoice);
//genrate comp choice
const compChoice = gemcompchoice();
console.log("comp choice = ",compChoice);

if(compChoice === userchoice){
    //draw game
    drawGame();
}else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors,paper
        userWin  = compChoice === "paper"?false:true;
    }else if(userchoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors"?false:true;
    }else{
        //rock,paper
        userWin  = compChoice === "rock"?false:true;
    }
    showWinner(userWin,userchoice,compChoice);
}

};
choices.forEach((choice) => {
choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");

playGame(userchoice);

});
});

