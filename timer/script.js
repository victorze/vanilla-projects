const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const timer = document.querySelector("#timer")
const start = document.querySelector("#start")
const reset = document.querySelector("#reset")
const pause = document.querySelector("#pause")
let startInterval
let totalSeconds = inputToSeconds()

start.addEventListener("click", () => {
  reset.disabled = true
  start.style.zIndex = "0"
  pause.style.zIndex = "10"


  timer.textContent = formatTimer(secondsToTimer(totalSeconds))

  startInterval = setInterval(() => {
    timer.textContent = formatTimer(secondsToTimer(--totalSeconds))
    if (totalSeconds === 0) {
      document.getElementById("tictac").play()
      clearInterval(startInterval)
    }
  }, 1000);
})

pause.addEventListener("click", () => {
  start.style.zIndex = "10"
  pause.style.zIndex = "0"
  reset.disabled = false
  clearInterval(startInterval)
})


reset.addEventListener("click", () => {
  totalSeconds = inputToSeconds()
  timer.textContent = formatTimer(secondsToTimer(totalSeconds))
})

function inputToSeconds() {
  return parseInt(hours.value) * 3600 + parseInt(minutes.value) * 60 + parseInt(seconds.value)
}

function secondsToTimer(seconds) {
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  return {hours, minutes, seconds}
}

function formatTimer({hours, minutes, seconds}) {
  hours = hours.toString().padStart(2, "0")
  minutes = minutes.toString().padStart(2, "0")
  seconds = seconds.toString().padStart(2, "0")
  return `${hours}:${minutes}:${seconds}`
}
