//variables
let userScore = 0 ;
let computerScore = 0 ;

const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");

const result_p = document.querySelector(".result p");


//eventListeners

eventListeners();
function eventListeners() {
    rock_div.addEventListener("click" , ()=>{
        game("r");
    });
    paper_div.addEventListener("click" , ()=>{
        game("p");
    });
    scissor_div.addEventListener("click" , ()=>{
        game("s");
    });
}




//functions

//getting computer choice from random array
function getComputerChoice() {
    const choices = ["r" ,"p" , "s"];
    let randomChoices = Math.floor(Math.random()*3);
    return choices[randomChoices];
}




//get choice from user and computer and comper them
function game(userChoice) {
    const computerChoice = getComputerChoice();

    //compare computerChoice and UserChoice
    switch (userChoice + computerChoice) {
        case"pr":
        case"rs":
        case"sp":
            win(userChoice ,computerChoice);
            break;
        case"rp":
        case"sr":
        case"ps":
            lose(userChoice ,computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            draw(userChoice ,computerChoice);
            break;

        default:
            break;
    }
}

//convert the letters to the word

function convertToWord(letter) {
    if (letter === "r"){
        return  "سنگ";
    }else if (letter === "p"){
        return "کاغذ";
    }
    return "قیچی";
}

//if user win
function win(userChoice ,computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;

    //show messages in to the result div
    result_p.innerHTML = `
    برنده شدید!!!
    شما ${convertToWord(userChoice)}
    و
   کامپیوتر ${convertToWord(computerChoice)}
    را انتخاب کرد
    `

    //add green border class to the div
    document.getElementById(userChoice).classList.add("green");
    //remove class after 500ms
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove("green");
    },500);

}
function lose(userChoice ,computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;

    //show messages in to the result div
    result_p.innerHTML = `
    بازنده شدید!!!
    شما ${convertToWord(userChoice)}
    و
   کامپیوتر ${convertToWord(computerChoice)}
    را انتخاب کرد
    `

    //add red border class to the div
    document.getElementById(userChoice).classList.add("red");
    //remove class after 500ms
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove("red");
    },500);
}
function draw(userChoice ,computerChoice) {
    //show messages in to the result div
    result_p.innerHTML = `
    مساوی شدید!!!
    شما ${convertToWord(userChoice)}
    و
   کامپیوتر ${convertToWord(computerChoice)}
    را انتخاب کرد
    `

    //add gray border class to the div
    document.getElementById(userChoice).classList.add("gray");
    //remove class after 500ms
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove("gray");
    },500);

}
