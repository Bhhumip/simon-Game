let gameSeq =[];
let userSeq =[];
let btns = ["red","yellow","green","blue"];
let started = false;
let highestScore = 10;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}
function levelUp(){
    userSeq=[];
    if(level<highestScore){
            level++;
            h2.innerHTML=`Level ${level} <br> <b> Highest Score is ${highestScore}</b>`;
    }else{
        h2.innerHTML=`Congratulations!! You Won and Reached the Highest Score <br> Press Any Key To restart`;
        reset();
    }
  
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColour = btns[randIdx];
    let randBtn = document.querySelector(`.${randColour}`);
    gameSeq.push(randColour);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkCorrBtn(idx){
    //console.log("curr level:",level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            
               setTimeout(levelUp(),1000);
        }
       
    }
    else{
         h2.innerHTML =`Game Over ! Yor Score was <b>${level}...</b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },250);
        reset();
    }
   
}

function butnPress(){
    //console.log("button pressed");
    let btn = this ;
    userFlash(btn);
    userColour = btn.getAttribute("id");
    userSeq.push(userColour);
    checkCorrBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",butnPress);
}

function reset(){
    started=false;
    level = 0;
    gameSeq=[];
    userSeq=[];
}
