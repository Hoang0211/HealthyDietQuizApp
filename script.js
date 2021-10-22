const startBtn = document.getElementById("start-btn");
const progressBarFull = document.getElementById("progress-bar-full");

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startContainer.classList.add("hide");
    quizContainer.classList.remove("hide");

}

//Update progress bar
//where 3 is current question and 14 is max question amount
progressBarFull.style.width = `${( 3 / 14 ) * 100 }%`;

