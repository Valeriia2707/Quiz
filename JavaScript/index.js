let questionCounter = 1;
let number = 0;
let groupCounter = 1;
let userAnswer = {}
function buttonsClick (button, type){
    
    if (questionCounter == 26){
        return;
    }
    
    let selectedValue = button.dataset.value;
    userAnswer[questionCounter] = selectedValue;
    console.log(userAnswer);

    let percentElement = document.querySelector(".progress__percentage");
    let percentBarFill = document.querySelector(".progress__fill")
    let currentAnswerBox = document.getElementById(`question-${questionCounter}`);
    let nextAnswerBox = document.getElementById(`question-${questionCounter + 1}`);
    
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

    number += 4;
    percentElement.innerHTML = `${number + "%"}`;

    percentBarFill.style.width = `${number + "%"}`;

}

function nextButton() {
    if (![6, 11, 16, 21, 26].includes(questionCounter)){
        return;
    }
    let currentAnswerGroup = document.getElementById(`group-${groupCounter}`);
    let nextAnswerGroup = document.getElementById(`group-${groupCounter + 1}`);
    currentAnswerGroup.classList.remove("quiz-page__group--active");
    if (nextAnswerGroup){
        nextAnswerGroup.classList.add("quiz-page__group--active");
    }
    groupCounter++;
    window.scrollTo({
        top: 400,
        behavior: "smooth"
    });
    
}
