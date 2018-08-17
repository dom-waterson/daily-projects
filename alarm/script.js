const alarmButtons = document.querySelectorAll('[data-time]');
const timeLeft = document.querySelector('.display-time-left');
const endTime = document.querySelector('.display-end-time');
const alarmAudio = document.querySelector('audio');
let countDown;

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timeLeft.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Alarm will go off at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function timer(seconds) {
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      alarmAudio.play();
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time, 0);
  timer(seconds);
}

function startCustomTimer(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

alarmButtons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', startCustomTimer);
