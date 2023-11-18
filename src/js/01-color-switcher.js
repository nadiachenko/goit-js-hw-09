const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
console.log(refs.stopBtn)

refs.startBtn.addEventListener('click', changeColor)

function changeColor() {

    timerId = setInterval(() => {
        const randomColor =  getRandomHexColor() 
        refs.body.style.backgroundColor = randomColor;    
      }, 1000);
      refs.startBtn.disabled = true;
}
refs.stopBtn.addEventListener('click', stopColor)

function stopColor() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
}
