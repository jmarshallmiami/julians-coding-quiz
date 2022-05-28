
var startButton = document.querySelector(".start-btn");
var orderedListEl = document.querySelector(".question-choices");
var timer;

// array of {questions and answers}
var questionArray = [
    {
        question: "What is Julian's favorite color?",
        choices: ["red", "blue", "black", "yellow"],
        answer: "red"
    },
    {
        question: "What is Julian's favorite color?",
        choices: ["red", "blue", "black", "yellow"],
        answer: "red"
    },
    {
        question: "What is Julian's favorite color?",
        choices: ["red", "blue", "black", "yellow"],
        answer: "red"
    },
    {
        question: "What is Julian's favorite color?",
        choices: ["red", "blue", "black", "yellow"],
        answer: "red"
    },
    {
        question: "What is Julian's favorite color?",
        choices: ["red", "blue", "black", "yellow"],
        answer: "red"
    }
];

//timer function
function startQuiz() {
    timer = setInterval(scoreCalc, 1000);
};

//starting quiz starts timer
var startingTime = 60;
function scoreCalc() {
    
    startingTime--;
    console.log(startingTime);
    if (startingTime === 0) {
        clearInterval(timer);
    }
};



var questionNumber = 0


// add event listener to my start button
startButton.addEventListener("click", startQuiz);

// event cb starts the quiz


// when we select a choice we check for true or false (if TRUE submit score if FALSE reduce time)
var evaluateAnswer = function (event) {
    console.log(event.target);
    //check if answer in
};
// load next question

//imput for your name to save your score to localStorage

// STRETCH GOAL: replace old high scores with new high scores

orderedListEl.addEventListener("click", evaluateAnswer);
