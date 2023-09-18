var startButton = document.querySelector("#start-button")
var questionIndex = 0
var scoreIndex = 0
var questionList = [
    {
        question: "What is the capital of France?",
        answers: [
            "London",
            "Berlin",
            "Madrid",
            "Paris"
        ],
        correctAnswer: "Paris"
    },

    {
        question: "What is the capital of England?",
        answers: [
            "London",
            "Berlin",
            "Madrid",
            "Paris"
        ],
        correctAnswer: "London"
    },

    {
        question: "What is the capital of Germany?",
        answers: [
            "London",
            "Berlin",
            "Madrid",
            "Paris"
        ],
        correctAnswer: "Berlin"
    },

    {
        question: "What is the capital of Scotland?",
        answers: [
            "London",
            "Berlin",
            "Madrid",
            "Paris"
        ],
        correctAnswer: "Madrid"
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
    var sec = 60;
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

function scoreQuiz() {
    //stop timer
    //collect score
    //display score
    //enter intials local storage
    // restart quiz button, call start quiz
}

startButton.addEventListener('click', startQuiz)