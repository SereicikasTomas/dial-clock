setInterval(runClock, 1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function rotateHand(element, angle) {
  element.style.transform = `translateX(-50%) rotate(calc(${angle * 360} * 1deg))`
}

function runClock() {
  const currentDate = new Date();
  const secondsAngle = currentDate.getSeconds() / 60;
  const minutesAngle = (secondsAngle + currentDate.getMinutes()) / 60;
  const hoursAngle = (minutesAngle + currentDate.getHours()) / 12;

  rotateHand(secondHand, secondsAngle);
  rotateHand(minuteHand, minutesAngle);
  rotateHand(hourHand, hoursAngle);
}

runClock();