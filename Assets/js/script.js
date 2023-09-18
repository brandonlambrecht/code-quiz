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

// Write question object


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
            // call scorepage function
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

    }
    // Grab the rest of the HTML
    // console.log(question[i].question)
    quizHead.textContent = currentQuestion.question //This populates HTML
    // Call checkAnswer function
    // Populate HTML
    // Get click value 
    // Time out to next question
    // If no more questions, display quiz page/none, display score page/flex
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

    // Check if value is correct
    // Update Score
    // Clear question/answers
    questionIndex++
    displayQuestion()
}

startButton.addEventListener('click', startQuiz)