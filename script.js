const timer = document.querySelector('.time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let t;

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer)

function startTimer(){
    console.log("your time start now")

    if(t !== null){
        clearInterval(t);
    }
    t = setInterval(displayTimer, 10);
}

function pauseTimer(){
    clearInterval(t);
}

function resetTimer(){
    clearInterval();
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; 
    displayTimer();
}

function displayTimer(){
    miliseconds+= 1;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;

            if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let mils = miliseconds < "00" ? + miliseconds
    :miliseconds < 100 ? "0" + miliseconds
    : miliseconds;
    timer.innerHTML =`${h} : ${m} : ${s} : ${mils}`;
}