const username = document.getElementById('username'); //fetch username
const saveScoreBtn = document.getElementById('saveScoreBtn');  //fetch saveScoreBtn

username.addEventListener('keyup', () =>{
    console.log(username.value);
})

//function to save high score
saveHighScore = (e) => {
    console.log("Click the save button!");
    e.preventDefault();
}