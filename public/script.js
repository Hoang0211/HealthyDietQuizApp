import questions from "/questions.js";

const startBtn = document.getElementById("start-btn");
const rerunBtn = document.getElementById("restart-btn");

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const answersContainer = document.getElementById("answers-container");

const progressElement = document.getElementById("progress");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options-container");
const progressBarFull = document.getElementById("progress-bar-full");
const scoreElement = document.getElementById("score");


let shuffledQuestions;
let totalQuestions, currentQuestionId, totalPoint;

startBtn.addEventListener("click", startQuiz);
rerunBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    startContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

    totalQuestions = shuffledQuestions.length;
    currentQuestionId = 0;
    totalPoint = 0;

    resetAnswersContainer();
    nextQuestion();
}

function restartQuiz() {
    resultContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

    totalQuestions = shuffledQuestions.length;
    currentQuestionId = 0;
    totalPoint = 0;

    resetAnswersContainer();
    nextQuestion();
}

function nextQuestion() {
    progressBarFull.setAttribute("data-done", ((currentQuestionId + 1) * 100 / totalQuestions).toString());
    updateProgressBar();
    resetOptions();
    showQuestion(shuffledQuestions[currentQuestionId]);
}

function showQuestion(question) {
    let progress = (currentQuestionId + 1).toString() + "/" + totalQuestions.toString();
    progressElement.innerText = "Question " + progress + ":";
    questionElement.innerText = question.question;

    let shuffledOptions = question.options.sort((a, b) => 0.5 - Math.random());

    shuffledOptions.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.innerText = option.text;
        optionElement.classList.add("option");
        optionElement.dataset.points = option.points;
        optionElement.addEventListener("click", selectOption);
        optionsElement.appendChild(optionElement);
    });

    updateAnswers(progress, questionElement.innerText, shuffledOptions);
}

function selectOption(e) {
    const selectedOption = e.target;
    const pointGained = selectedOption.dataset.points;
    totalPoint += parseInt(pointGained);
    if (currentQuestionId + 1 < totalQuestions) {
        currentQuestionId++;
        nextQuestion();
    }
    else {
        displayResult();
        showScore();
    }
}

function resetOptions() {
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

function resetAnswersContainer() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function updateProgressBar() {
    setTimeout(() => {
        progressBarFull.style.width = progressBarFull.getAttribute("data-done") + "%";
    }, 100);
}

function displayResult() {
    quizContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
}

function showScore() {
    scoreElement.innerText = "Your score: " + totalPoint + "/37";
}

function updateAnswers(progress, question, options) {
    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    const answerContainerProgress = document.createElement("p");
    answerContainerProgress.classList.add("progress");

    const answerContainerQuestion = document.createElement("p");
    answerContainerQuestion.classList.add("question");

    const answerContainerOptions = document.createElement("div");
    answerContainerOptions.classList.add("options");

    answerContainerProgress.innerText = progress;
    answerContainerQuestion.innerText = question;
    answerContainer.appendChild(answerContainerProgress);
    answerContainer.appendChild(answerContainerQuestion);
    answerContainer.appendChild(answerContainerOptions);

    options.forEach(option => {
        const optionElem = document.createElement("div");
        optionElem.classList.add("option");

        const optionElemAnswer = document.createElement("p");
        optionElemAnswer.classList.add("answer");

        const optionElemScore = document.createElement("p");
        optionElemScore.classList.add("score");

        optionElemAnswer.innerText = option.text;
        optionElemScore.innerText = option.points + " points";
        optionElem.appendChild(optionElemAnswer);
        optionElem.appendChild(optionElemScore);
        answerContainerOptions.appendChild(optionElem);
    });

    answersContainer.appendChild(answerContainer);
}
