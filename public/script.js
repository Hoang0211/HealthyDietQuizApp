import questions from "/questions.js";

const startBtn = document.getElementById("start-btn");
const rerunBtn = document.getElementById("rerun-btn");

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const resultContainer3 = document.getElementById("result-container-3");

const progressElement = document.getElementById("progress");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
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

    // Reset show answers panel for new quiz attempt
    while (resultContainer3.firstChild) {
        resultContainer3.removeChild(resultContainer3.firstChild);
    }

    nextQuestion();
}

function restartQuiz() {
    resultContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

    totalQuestions = shuffledQuestions.length;
    currentQuestionId = 0;
    totalPoint = 0;

    // Reset show answers panel for new quiz attempt
    while (resultContainer3.firstChild) {
        resultContainer3.removeChild(resultContainer3.firstChild);
    }

    nextQuestion();
}

function nextQuestion() {
    progressBarFull.setAttribute("data-done", ((currentQuestionId + 1) * 100 / totalQuestions).toString());
    updateProgressBar();
    resetState();
    showQuestion(shuffledQuestions[currentQuestionId]);
}

function showQuestion(question) {
    progressElement.innerText = "Question " + (currentQuestionId + 1).toString() + "/" + totalQuestions.toString() + ":";
    questionElement.innerText = question.question;

    let shuffledAnswers = question.answers.sort((a, b) => 0.5 - Math.random());

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer");
        button.dataset.points = answer.points;
        button.addEventListener("click", selectAnswer);
        answersElement.appendChild(button);
    });

    // Below codes serve for show answers phase
    const resultPanel = document.createElement("div");
    resultPanel.classList.add("result-panel");

    const progressInResultPanel = document.createElement("div");
    progressInResultPanel.classList.add("progress");

    const questionInResultPanel = document.createElement("div");
    questionInResultPanel.classList.add("question");

    progressInResultPanel.innerText = (currentQuestionId + 1).toString() + "/" + totalQuestions.toString();
    questionInResultPanel.innerText = questionElement.innerText;
    resultPanel.appendChild(progressInResultPanel);
    resultPanel.appendChild(questionInResultPanel);

    shuffledAnswers.forEach(answer => {
        const answerPanel = document.createElement("div");
        answerPanel.classList.add("answer-panel");

        const answerInAnswerPanel = document.createElement("div");
        answerInAnswerPanel.classList.add("answer");

        const scoreInAnswerPanel = document.createElement("div");
        scoreInAnswerPanel.classList.add("score");

        answerInAnswerPanel.innerText = answer.text;
        scoreInAnswerPanel.innerText = answer.points + " points";
        answerPanel.appendChild(answerInAnswerPanel);
        answerPanel.appendChild(scoreInAnswerPanel);
        resultPanel.appendChild(answerPanel);
    });

    resultContainer3.appendChild(resultPanel);
}

function selectAnswer(e) {
    const selectedAnswer = e.target;
    const pointGained = selectedAnswer.dataset.points;
    totalPoint += parseInt(pointGained);
    if (currentQuestionId + 1 < totalQuestions) {
        currentQuestionId++;
        nextQuestion();
    }
    else {
        displayResult();
        showResult();
    }
}

// Reset answer panel for new question
function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
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

function showResult() {
    scoreElement.innerText = "Your score: " + totalPoint + "/37";
}
