const question = document.getElementById("question"); //get question
const choices = Array.from(document.getElementsByClassName("choice-text")); //get choice text and createlet currentQuestion = {};
const progressText = document.getElementById('progressText'); //get question counter
const scoreText = document.getElementById('score'); //fetch score 
const progressBarFull = document.getElementById("progressBarFull"); //fetch progress bar
const loader = document.getElementById('loader') //fetch loader
const game = document.getElementById('game');


let currentQuestion = {}; //empty array
let acceptingAnswers = false;
let score = 0; //score variable
let questionCounter = 0; //variable for question answer
let availableQuestions = [];

//array for questions and choices
let questions = [];

//fetch questions
fetch("questions.json").then( res => {
    return res.json();
}).then(loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions;

    //call function
    startGame();
})
.catch( err => {
    console.error(err);
})

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

//function to start game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
  
    loader.classList.add("hidden");
    game.classList.remove("hidden");
}

//funtion to get new question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("end.html");
    }

   
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} /${MAX_QUESTIONS}`;

    //update progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


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

