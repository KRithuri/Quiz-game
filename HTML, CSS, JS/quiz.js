const startBtn = document.querySelector('.start-btn'); //fetch start button
const popupInfo = document.querySelector('.popup-info') //fetch quiz guide 
const exitBtn = document.querySelector('.exit-btn'); //fetch exit button
const main = document.querySelector('.main') //fetch main class

//function to execute when start button is clicked
startBtn.onclick = () => {
    popupInfo.classList.add('active');
}

//function to execute when exit button is clicked
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
}