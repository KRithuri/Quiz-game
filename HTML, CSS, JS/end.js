const username = document.getElementById('username'); //fetch username
const saveScoreBtn = document.getElementById('saveScoreBtn');  //fetch saveScoreBtn
const mostRecentScore = localStorage.getItem('mostRecentScore'); //fetch most recent score
const finalScore = document.getElementById('finalScore'); //fetch final score

username.addEventListener('keyup', () =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

//function to save high score
saveHighScore = (e) => {
    console.log("Click the save button!");
    e.preventDefault();
}