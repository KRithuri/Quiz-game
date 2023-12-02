const username = document.getElementById('username'); //fetch username
const saveScoreBtn = document.getElementById('saveScoreBtn');  //fetch saveScoreBtn
const finalScore = document.getElementById('finalScore'); //fetch final score
const mostRecentScore = localStorage.getItem("mostRecentScore"); //fetch most recent score

localStorage.setItem('highScores', []);
console.log(localStorage.getItem("highScores"));

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

//function to save high score
saveHighScore = (e) => {
    console.log("Click the save button!");
    e.preventDefault();
}