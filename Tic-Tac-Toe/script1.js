let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

 //Turns of players
let turn0=true;
let count=0;

 // winning Patterns
 const winningPatterns=[
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [6,7,8]
 ]
boxes.forEach((box) => {
    
    box.addEventListener("click",()=>{
        console.log("botton was clicked.")
        if(turn0){
            box.innerText="O";
            box.style.color="white";
           turn0=false;
        }else{
           box.innerText="X";
           turn0=true;
        }
        
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            drawGame();
        }
    })
   
});

const drawGame=()=>{
      msg.innerText=`The Game is Draw.`;
      msgContainer.classList.remove("hide");
      disableBoxes();
};

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let patterns of winningPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
           if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val)
            showWinner(pos1Val);
           }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);