const question = document.getElementById("question"); //get question
const choices = Array.from(document.getElementsByClassName("choice-text")); //get choice text and createlet currentQuestion = {};
const progressText = document.getElementById('progressText'); //get question counter
const scoreText = document.getElementById('score'); //fetch score 
const progressBarFull = document.getElementById("progressBarFull"); //fetch progress bar

let currentQuestion = {}; //empty array
let acceptingAnswers = false;
let score = 0; //score variable
let questionCounter = 0; //variable for question answer
let availableQuestions = [];

//array for questions and choices
let questions = [
    {
        question: "What is the file extension for Python files? ",
        choice1: ".python",
        choice2: ".py",
        choice3: "no extension",
        choice4: ".pyt",
        answer: 2
    },
    {
        question: "How do you print 'Hello World!' to user in Python? ",
        choice1: "console.log('Hello World!');",
        choice2: "print('Hello World!')",
        choice3: "msgBox('Hello World!');",
        choice4: "console.writeLine('Hello World');",
        answer: 2
    },
    {
        question: "What is the correct syntax for referencing to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: "Inside which HTML element do we the JavaScript? ",
        choice1: "<script>",
        choice2: "<javascript",
        choice3: "<js>",
        choice4: "<scripting",
        answer: 1
    },
    {
        question: "How do you write 'Hello World' in an alert box? ",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "alert('Hello World');",
        choice4: "msg('Hello World);",
        answer: 3
    }

]

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

//function to start game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion()
}

//funtion to get new question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        return window.location.assign('/end.html');
    }

   
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} /${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //grab choices
    choices.forEach(choice => {
        const number = choice.dataset["number"]; //access attributes
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        //call increment function
        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //delay for displaying color
        setTimeout( () =>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
     
        
    })
})

//function to increment score
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

//call function
startGame();