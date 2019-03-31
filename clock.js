const handSecond = document.getElementById("clock-hand_second");
const handMinute = document.getElementById("clock-hand_minute");
const handHour = document.getElementById("clock-hand_hour");

function setDate() {
  const now = new Date();
  //second
  const second = now.getSeconds();
  const secondToDegrees = (second / 60) * 360 + 90;
  handSecond.style.transform = `rotate(${secondToDegrees}deg)`;

  //minute
  const minute = now.getMinutes();
  const minuteToDegrees = (minute / 60) * 360 + 90;
  handMinute.style.transform = `rotate(${minuteToDegrees}deg)`;

  //hour
  const hour = now.getHours();
  const hourToDegrees = (hour / 12) * 360 + 90;
  handHour.style.transform = `rotate(${hourToDegrees}deg)`;
  console.log(now);
}
setInterval(setDate, 1000);
