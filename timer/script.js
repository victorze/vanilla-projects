const hours = +document.querySelector("#hours").value
const minutes = +document.querySelector("#minutes").value
const seconds = +document.querySelector("#seconds").value
const timer = document.querySelector("#timer")
const start = document.querySelector("#start")

// TODO: Corregir los segundos
start.addEventListener("click", e => {
  let totalSeconds = hours * 3600 + minutes * 60 + seconds

  timer.textContent = formatTimer(secondsToTimer(totalSeconds))
  console.log(secondsToTimer(totalSeconds))
  setInterval(() => {
    totalSeconds--
    timer.textContent = formatTimer(secondsToTimer(totalSeconds))
  }, 1000);
})

function secondsToTimer(seconds) {
  const hours = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes = Math.floor( seconds / 60)
  seconds -= minutes * 60
  return {hours, minutes, seconds}
}

// Todo: El formato debe ser hh:mm:ss
function formatTimer({hours, minutes, seconds}) {
  return `${hours}:${minutes}:${seconds}`
}
