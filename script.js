import questions from "/questions.js";

const startBtn = document.getElementById("start-btn");

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");

const progressElement = document.getElementById("progress");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressBarFull = document.getElementById("progress-bar-full");

let shuffledQuestions;
let totalQuestions, currentQuestionId, totalPoint;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

    totalQuestions = shuffledQuestions.length;
    currentQuestionId = 0;
    totalPoint = 0;

    nextQuestion();
}

function nextQuestion() {
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
        console.log("Your total point is: ", totalPoint);
        return;
    }
}

function resetState() {
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
}

//Update progress bar
//where 3 is current question and 14 is max question amount
progressBarFull.style.width = `${( 3 / 14 ) * 100 }%`;

