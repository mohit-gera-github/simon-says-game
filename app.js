let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let finalLevel = 0;

let hscore = document.querySelector("#hScore");
let h2 = document.querySelector("h2");

//  step 1 
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started"); 
        started = true;
        levelup();
    }
});

// step 3
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 300);
}

// step 4
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}

// step 2
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // generate random color 
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    // push random color to array 
    gameseq.push(randColor);
    console.log(gameseq)
    gameFlash(randBtn);
}

function checkAns(idx) {
    // let idx= level-1;
    if (gameseq[idx] == userseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over ! Your score was <b>${level}<b> <br> Press any key to start`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    let userColor = btn.getAttribute("id");

    // console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length - 1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    highScore();
     started = false;
     level = 0;
     gameseq = [];
     userseq = [];
}

function highScore(){
    if(level > finalLevel){
        finalLevel = level ;
    }
    hscore.innerText = `Highest score = ${finalLevel}`;
}



