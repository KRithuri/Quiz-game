const scoreText = document.getElementById('score'); //fetch score 
const progressBarFull = document.getElementById("progressBarFull"); //fetch progress bar

// Define questions, choices, and correct answers
   let questions = [
    {
        question: "How do you print 'Hello World!' to user in Python? ",
        choices: ["console.log('Hello World!');", "print('Hello World!')", "console.writeLine('Hello World');", "msgBox('Hello World!');"],
        correctAnswer: "print('Hello World!')",

    },
    
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        choices: [10,"'55'","5","Error"],
        correctAnswer: "'55'",
    },

    {
        question: "In JavaScript, what is the purpose of the 'typeof' operator?",
        choices: ["To determine the type of a value or variable","To check if a variable is defined","To create new variables","To assign a new type to a variable"],
        correctAnswer: "To determine the type of a value or variable",
    },

    {
        question: "Which of the following is not a programming language?",
        choices: ["Python","Java","C++","HTML"],
        correctAnswer: "HTML",
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');","alertBox('Hello World');","alert('Hello World');","msg('Hello World);"],
        correctAnswer: "alert('Hello World');",
    },

    {
        question: "Choose the correct HTML element to define emphasized text?",
        choices: ["italic","i","em","br"],
        correctAnswer: "em",
    },

    {
        question: "Which of the following is a version control system?",
        choices: ["VSCode", "JavaScript", "Git", "Browser"],
        correctAnswer: "Git",
    },

    {
        question: "Which is used to insert special character in JavaScript?",
        choices: ["&", "/","%","-"],
        correctAnswer: "/",
    },

    {
        question: "What is the file extension for Python files? ",
        choices: [".python", ".py", "no extension", ".pyt"],
        correctAnswer: ".py",

    },

    {
        question: "What is the primary function of a constructor in JavaScript?",
        choices: [" To remove properties from an object", "To create and initialize objects", "To add methods to an object","To modify the prototype of an object"],
        correctAnswer: "To create and initialize objects",
    },
];

// Add class constructor
// Initialize the quiz with an array of questions, set the initial score to 0,
// and start at the first question (currentQuestionIndex = 0).
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
        this.currentQuestionIndex = 0;
    }

    // Method to display the current question and answer choices
    displayQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const questionContainer = document.getElementById("question-container");
            questionContainer.innerHTML = `<h2>${this.questions[this.currentQuestionIndex].question}</h2>`;
            const choices = this.questions[this.currentQuestionIndex].choices;
            choices.forEach((choice, index) => {
                questionContainer.innerHTML += `<button onclick="quiz.checkAnswer(${index})">${choice}</button>`;
            });
        } else {
            this.calculateAndShowResults();
        }
      // Calling for the showProgress to display along with the corresponding questions
        this.showProgress();
    }
  
    // Method to show progress information
showProgress() {
    const currentQuestionNumber = this.currentQuestionIndex + 1;
    const totalQuestions = this.questions.length;
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentQuestionNumber} of ${totalQuestions}`;
    //update progress bar
    progressBarFull.style.width = `${(currentQuestionNumber / totalQuestions) * 100}%`;
    }

    // Method to check the user's answer and update the score
     checkAnswer(selectedIndex) {
        const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer;
        if (this.questions[this.currentQuestionIndex].choices[selectedIndex] === correctAnswer) {
            this.score++;
            scoreText.innerText = this.score;
            
        } 
        this.currentQuestionIndex++;
        this.displayQuestion();
        
    }

// Calculate the final score and show results, prompting the user to try again if needed
    
     calculateAndShowResults() {
        const resultContainer = document.getElementById("question-container");
        resultContainer.innerHTML = `<h2>You got : ${this.score}/${this.questions.length}</h2>`;
 
        // Hide the progress when the results display

        let progressContainer = document.getElementById("progress");
        progressContainer.style.display = "none";
        
        // The conditions for scores less than 5 or higher

        if (this.score < 5) {
            resultContainer.innerHTML += "<p>Please try again , harder this time.</p>";
            resultContainer.innerHTML += '<button onclick="quiz.restartQuiz()">Try Again</button>';
        } else {
            resultContainer.innerHTML += "<p>Well done! You did good.</p>";
        }
    }

    // Restart the quiz by resetting the score and question index

     restartQuiz() {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.displayQuestion();
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = ""; // Clear result container
        
    }

}

// Create a new Quiz instance with the provided questions.
// Display the first question to start the quiz.

let quiz = new Quiz(questions);
quiz.displayQuestion();
