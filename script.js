function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondss = seconds < 10 ? "0" + seconds : seconds;

  const hoursElememt = document.getElementById("hours");
  const minutesElememt = document.getElementById("minutes");
  const secondsElememt = document.getElementById("seconds");

  hoursElememt.textContent = hours;
  minutesElememt.textContent = minutes;
  secondsElememt.textContent = seconds;
}

setInterval(updateClock, 1000);
