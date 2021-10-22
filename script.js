const startBtn = document.getElementById("start-btn");

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startContainer.classList.add("hide");
    quizContainer.classList.remove("hide");
}