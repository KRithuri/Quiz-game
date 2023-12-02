const username = document.getElementById('username'); //fetch username
const saveScoreBtn = document.getElementById('saveScoreBtn');  //fetch saveScoreBtn
const finalScore = document.getElementById('finalScore'); //fetch final score
const mostRecentScore = localStorage.getItem("mostRecentScore"); //fetch most recent score

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

//function to save high score
saveHighScore = (e) => {
    console.log("Click the save button!");
    e.preventDefault();
    
    const score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    };
    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score);
   
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}