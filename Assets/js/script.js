var startButton = document.querySelector("#start-button")
var questionIndex = 0
var scoreIndex = 0
var questionList = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        correctAnswer: "Alerts"
    },

    {
        question: "The condition in an if/else state is enclosed with _____.",
        answers: [
            "Quotes",
            "Curly brackets",
            "Parentheses ",
            "Square brackets"
        ],
        correctAnswer: "Parentheses"
    },

    {
        question: "Arrays in JS can be used to store_______.",
        answers: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        correctAnswer: "All of the above"
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables?",
        answers: [
            "Commas",
            "Curly brackets",
            "Quotes",
            "Parentheses"
        ],
        correctAnswer: "Commas"
    },

]


function startQuiz() {
    var homePage = document.querySelector("#homepage")
    var quizPage = document.querySelector("#quizpage")

    startTimer()

    homePage.classList.add('hidden')
    quizPage.classList.remove('hidden')

    displayQuestion()
}

function startTimer() {
    var sec = 30;
    var timer = setInterval(function () {
        document.querySelector('#timer-display').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function displayQuestion() {
    console.log(questionIndex)
    if (questionIndex >= 4) scoreQuiz();

    var quizHead = document.querySelector("#question")
    var currentQuestion = questionList[questionIndex]
    var answerQuestion = document.querySelector('#answers')
    answerQuestion.innerHTML = ''

    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var answerBtn = document.createElement('button')
        answerBtn.textContent = currentQuestion.answers[i]
        answerQuestion.append(answerBtn)
        answerBtn.addEventListener('click', checkAnswer)
        answerBtn.style.margin = '.5em';

    }

    quizHead.textContent = currentQuestion.question //This populates HTML

}

function checkAnswer(event) {
    console.log(event.target.textContent, questionList[questionIndex].correctAnswer)
    if (event.target.textContent === questionList[questionIndex].correctAnswer) {
        console.log('correct')
        scoreIndex++
    }
    else if (event.target.textContent != questionList[questionIndex].correctAnswer) {
        console.log('incorrect')
        if (scoreIndex > 0) {
            scoreIndex--

        }
    }

    questionIndex++
    displayQuestion()
}

startButton.addEventListener('click', startQuiz)