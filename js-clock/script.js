const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const clock = document.querySelector(".clock");

const clockIntervalTime = 1000;
const startingDegree = 90;

const noop = () => {};

function setTimeOnClock(callback = noop) {
  const now = new Date();

  const secondsNow = now.getSeconds();

  if (secondsNow === 0) {
    secondHand.style.transition = "all 0.00s";
  }
  if (secondsNow === 1) {
    secondHand.style.transition = "all 0.05s";
  }

  const secondsDegrees = (secondsNow / 60) * 360 + startingDegree;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsNow = now.getMinutes();
  const minsDegrees =
    (minsNow / 60) * 360 + (secondsNow / 60) * 6 + startingDegree;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourNow = now.getHours();
  const hourDegrees =
    (hourNow / 12) * 360 + (minsNow / 60) * 30 + startingDegree;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  callback();
}

setInterval(setTimeOnClock, clockIntervalTime);

function showHands() {
  clock.style.display = "block";
}

setTimeOnClock(showHands);
