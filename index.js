let durationElement = document.querySelector('#duration-id');
let shortBreakElement = document.querySelector('#short-break-id');
let longBreakElement = document.querySelector('#long-break-id');
let pomodoroInBlockElement = document.querySelector('#Pomodoro-in-block-id');
let blockCountElement = document.querySelector('#block-count-id');
let breakTimeElement = document.querySelector('#break-time-id');
let workTimeElement = document.querySelector('#work-time-id');
let resultElement = document.querySelector('#result-id');

const calculate = () => {

  const convertTime = (timeInMinutes) => {
    let minutes = timeInMinutes % 60;
    const hours = (timeInMinutes - minutes) / 60;

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`
  };

  const breakTime = (pomodoroInBlockElement.value - 1) * shortBreakElement.value
  * blockCountElement.value
  + (blockCountElement.value - 1) * longBreakElement.value;

  const workTime = durationElement.value * pomodoroInBlockElement.value
  * blockCountElement.value;

  breakTimeElement.value = convertTime(breakTime);
  workTimeElement.value = convertTime(workTime);
  resultElement.value = convertTime(breakTime + workTime);

};

calculate();

durationElement.oninput = calculate;
shortBreakElement.oninput = calculate;
longBreakElement.oninput = calculate;
pomodoroInBlockElement.oninput = calculate;
blockCountElement.oninput = calculate;
