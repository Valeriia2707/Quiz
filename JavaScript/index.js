

function buttonsClick (button, type, points){
    
    if (questionCounter == 36){
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
if (questionCounter < 19){
    for( let i = 0; i <= 6; i++){
    if (charactersScalar[i].scalar[questionCounter - 1] == points){
        markPoints = (charactersScalar[i].name == "Mark") ? /*if true*/ markPoints + points :  /*if false*/ markPoints
        daniaPoints = (charactersScalar[i].name == "Dania") ? daniaPoints + points : daniaPoints
        erikPoints = (charactersScalar[i].name == "Erik") ? erikPoints + points : erikPoints
        liriPoints = (charactersScalar[i].name == "Liri") ? liriPoints + points : liriPoints
        romanPoints = (charactersScalar[i].name == "Roman") ? romanPoints + points : romanPoints
        dashaPoints = (charactersScalar[i].name == "Dasha") ? dashaPoints + points : dashaPoints
        danikPoints = (charactersScalar[i].name == "Danik") ? danikPoints + points : danikPoints
    }
    else {
        continue
        }
    }
    
}

else if ([23, 26, 28].includes(questionCounter) ) { //Mark
    markPoints += points
}
else if ([21, 25, 35].includes(questionCounter) ) { //Dania
    daniaPoints += points
}
else if ([27, 29, 30].includes(questionCounter) ) { //Erik
    erikPoints += points
}
else if ([24, 31, 32].includes(questionCounter) ) { // Liri
    liriPoints += points
}
else if ([19, 22, 34].includes(questionCounter) ) { //Roman
    romanPoints += points
}

else if ([20, 30, 338].includes(questionCounter) ) { //Danik
    danikPoints += points
}


console.log("Mark  " + markPoints);
    console.log("Dania  " + daniaPoints);
    console.log("Erik  " + erikPoints);
    console.log("Liri  " + liriPoints);
    console.log("Roman  " + romanPoints);
    console.log("Dasha  " + dashaPoints);
    console.log("Danik  " + danikPoints);

    questionCounter++;

    number += 100 / 35;
    percentElement.innerHTML = `${Math.floor(number) + "%"}`;

    percentBarFill.style.width = `${number + "%"}`;

}

function nextButton() {
    if (![6, 11, 16, 21, 26, 31, 36].includes(questionCounter)){
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
    if (groupCounter == 8){
        chartWrap.classList.add("quiz-page__chart-wrap--active");
        document.querySelector(".quiz-page__button").style.display = "none";

    //     const group1 = groupIndex1.map(i => userAnswer[i]);
    // const group2 = groupIndex2.map(i => userAnswer[i]);
    // const group3 = groupIndex3.map(i => userAnswer[i]);
    // const group4 = groupIndex4.map(i => userAnswer[i]);

    // const sum1 = group1.reduce((total, answer) => total + (scale[answer] || 0), 0);
    // const sum2 = group2.reduce((total, answer) => total + (scale[answer] || 0), 0);
    // const sum3 = group3.reduce((total, answer) => total + (scale[answer] || 0), 0);
    // const sum4 = group4.reduce((total, answer) => total + (scale[answer] || 0), 0);




    const chart = new Chart(cht, { 
    type: "radar", 
    data: {
        labels: ['Mark', 'Dania', 'Erik', 'Liri', 'Roman', 'Dasha', 'Danik' ],
        datasets: [{
            label: "You are: ", 
            data: [markPoints, daniaPoints, erikPoints, liriPoints, romanPoints, dashaPoints, danikPoints],
            backgroundColor:[
                '#033F63',
                '#28666E',
                '#7C9885',
                '#B5B682',
                '#797596',
                '#0B1D51',
                '#34344A'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        mainainAspektRadio: false,
        plugins: {
        title: {
        display: true,
        text: 'Final Results',
        font: {
          size: 22 // Заголовок
        }
        },
        legend: {
        labels: {
            font: {
            size: 16 // Легенда
            }
        }
        }
    },
    scales: {
        r: {
        pointLabels: {
            font: {
            size: 16 // Подписи по кругу
            }
        },
        ticks: {
            font: {
            size: 14 // Цифры на шкале
            }
        }
        }
    }
        }
    });
    }
}
function autoDebugClickAll() {
    // Найти все группы вопросов
    const allGroups = document.querySelectorAll('.quiz-page__group');
    let groupIndex = 0;

    function clickNextGroup() {
        if (groupIndex >= allGroups.length) return;

        const group = allGroups[groupIndex];
        const questions = group.querySelectorAll('.quiz-page__questions');
        questions.forEach(q => {
            const buttons = q.querySelectorAll('.questions__option');
            if (buttons.length > 0) {
                // Кликаем случайную кнопку
                const rand = Math.floor(Math.random() * buttons.length);
                buttons[rand].click();
            }
        });

        // Жмём "Next" если есть
        const nextBtn = document.querySelector('.next-page__button');
        if (nextBtn && nextBtn.style.display !== "none") {
            nextBtn.click();
        }

        groupIndex++;
        setTimeout(clickNextGroup, 300); // задержка между группами
    }

    clickNextGroup();
}

//autoDebugClickAll()
// Вызовите autoDebugClickAll() для запуска автотеста

const popupOverlay = document.getElementById("pisko-overlay");
const popup = document.getElementById("pisko");
    
function showPopup() {
    popupOverlay.style.display = "block";
}



