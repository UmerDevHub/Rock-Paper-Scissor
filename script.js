let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const resetBtn= document.querySelector("#resetbtn");



const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice= ()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame= ()=>{
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
    console.log("game draw");

}
const showWinner= (userWin,userChoice,compChoice)=>{
    if(userWin){

        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;



    }
    else{
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
         
    }
}

const playGame= (userChoice)=>{
    const compChoice= genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin= compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin=compChoice === "Scissors" ? false : true;
        }
        else{
            userWin= compChoice === "Rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
        
    })
})

resetBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    

})