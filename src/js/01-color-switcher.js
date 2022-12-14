
const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId;
btnStartRef.addEventListener('click', () => { 
    timerId = setInterval(() => {
        const bgnColor = getRandomHexColor()
        bodyRef.style.backgroundColor = bgnColor;
    }, 1000)
    btnStartRef.disabled = true;
})

btnStopRef.addEventListener('click', () => { 
    clearInterval(timerId);
    btnStartRef.disabled = false;
})