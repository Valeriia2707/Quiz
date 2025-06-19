let charactersScalar = {}

fetch('../JavaScript/charactersScalar.json')
    .then(Response => Response.json())
    .then(data => {
        charactersScalar = data;
    })
    .catch(error => {
        console.error('Fail', error);
    });

    let markPoints = 0;
    let erikPoints = 0;
    let daniaPoints = 0;
    let liriPoints = 0;
    let romanPoints = 0;
    let dashaPoints = 0;
    let danikPoints = 0;

let questionCounter = 1;
let number = 0;
let groupCounter = 1;
let userAnswer = {};

const scale = {
    "totaly-agree": 1,
    "agree": 0.85,
    "partly-agree": 0.70,
    "neutral": 0.55,
    "partly-disagree": 0.30,
    "disagree": 0.15,
    "totaly-disagree": 0,
};

const groupIndex1 = [1, 4, 7, 11, 14]
const groupIndex2 = [2, 8, 9, 16, 20]
const groupIndex3 = [3, 5, 6, 13, 19]
const groupIndex4 = [10, 12, 15, 17, 18]

const cht = document.querySelector(".quiz-page__chart");
const chartWrap =document.querySelector(".quiz-page__chart-wrap");
