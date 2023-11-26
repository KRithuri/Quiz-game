const startBtn = document.querySelector('.start-btn'); //fetch start button
const popupInfo = document.querySelector('.popup-info') //fetch quiz guide 

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}