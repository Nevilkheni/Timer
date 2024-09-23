let time = 0;
let intervalId = null;

const display = document.getElementById('display');
const start_btn = document.getElementById('start_btn');
const stop_btn = document.getElementById('stop_btn');
const reset_btn = document.getElementById('reset_btn');
const getTime_btn = document.getElementById('getTime_btn');
const clearTime_btn = document.getElementById('clearTime_btn');

start_btn.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            time++;
            display.textContent = time;
        }, 1000);
    }
});

stop_btn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

reset_btn.addEventListener('click', () => {
    time = 0;
    display.textContent = time;
    clearInterval(intervalId);
    intervalId = null;
});

getTime_btn.addEventListener('click', () => {
    console.log('Current Time: ' + time);
    alert('Current Time: ' + time);
});

clearTime_btn.addEventListener('click', () => {
    display.textContent = '0';
});