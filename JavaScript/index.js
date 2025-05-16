let questionCounter = 1;
let number = 0;
function buttonsClick (button, type){
    if (questionCounter == 6){
        return;
    }
    let percentElement = document.querySelector(".progress__percentage");
    let percentBarFill = document.querySelector(".progress__fill")
    let currentAnswerBox = document.getElementById(`${questionCounter}`);
    let nextAnswerBox = document.getElementById(`${questionCounter + 1}`);
    
    if (type == 'green'){
        button.style.backgroundColor = " #21978b";
    }
    else if (type == 'red'){
        button.style.backgroundColor = " #d43b3b";
    }
    else{
        button.style.backgroundColor = " #5e5e5e";
    }
    currentAnswerBox.classList.remove("quiz-page__questions--active");
    if (nextAnswerBox){
        nextAnswerBox.classList.add("quiz-page__questions--active");
    }
    questionCounter++;

    number += 20;
    percentElement.innerHTML = `${number + "%"}`;

    percentBarFill.style.width = `${number + "%"}`;
}