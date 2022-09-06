const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
};
const DELEY = 1000;
let intervalId = null;

refs.btnStart.addEventListener('click', onStart)
refs.btnStop.addEventListener('click', onStop)

function onStart(){
intervalId =  setInterval(() => {
refs.body.style.background =  getRandomHexColor()
}, DELEY);

refs.btnStart.setAttribute('disabled', true);
refs.btnStop.removeAttribute("disabled");
};

function onStop(){
    clearInterval(intervalId);
    
    refs.btnStop.setAttribute('disabled', true);
    refs.btnStart.removeAttribute("disabled"); 
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }