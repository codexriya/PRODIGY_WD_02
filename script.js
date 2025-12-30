let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
    running = true;
  } else {
    clearInterval(timerInterval);
    running = false;
  }
}

function updateTime() {
  elapsedTime = Date.now() - startTime;

  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  document.getElementById("display").textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!running) return;

  const lapTime = document.getElementById("display").textContent;
  const li = document.createElement("li");
  li.textContent = lapTime;
  document.getElementById("laps").appendChild(li);
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
