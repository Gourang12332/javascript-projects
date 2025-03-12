let userScore  =0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const reset = document.querySelector(".reset");
user = document.querySelector("#user");
comp = document.querySelector("#compscore");

reset.addEventListener("click",()=>{
    userScore = 0;
    user.innerText = "0";
    compscore = 0;
    comp.innerText = "0";

})




const genComputerChoice=()=>{
    const options = ["rock","paper","scissors"];
    idx =Math.floor(Math.random()*3); // [0,1);
    rand = options[idx];
    return rand;
    // rock paper scissor
}

const drawGame= () =>{
msg.innerText = "Game draw . Play again" ;

msg.style.backgroundColor = "#494b4f";
}

const playGame=(userchoice)=>{
console.log("user choice = ",userchoice);
const compchoice = genComputerChoice();
console.log("comp choice ",compchoice);

if(userchoice == compchoice){
drawGame();
} else {
let userwin = true;
if(userchoice === "rock"){
    userwin = compchoice === "paper"? false : true ;
}else if(userchoice === "paper"){
    userwin = compchoice === "scissor"? false : true ;
} else if(userchoice === "scissors") {
    userwin = compchoice === "rock"? false : true ;
}
showWinner(userwin,userchoice,compchoice);
}
}

const showWinner =(userwin,userchoice ,compchoice) =>{
    if(userwin){
        userScore++;
        user.innerText = userScore;
        // msg.classList.add("hide");
        msg.innerText = `You Win ${userchoice} beats ${compchoice}`;
        console.log("user wins");
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        comp.innerText = compscore;
        console.log("computer wins");
        msg.innerText = `You Loose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
    }



choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
   const userchoice = choice.getAttribute("id");
   
   playGame(userchoice);
    });   
});