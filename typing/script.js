const phraseContainer = document.querySelector(".phrase")
const by = document.querySelector(".by")

const phrase = phrases[Math.floor(Math.random() * phrases.length)]

phraseContainer.innerHTML = phrase.text.split("").map(char => `<span>${char}</span>`).join("")
by.innerText = phrase.by

const chars = document.querySelectorAll(".phrase > span")
chars[0].classList.add("active")

let start
let index = 0
let errors = 0
let firstKeyPress = true
let lastPressError = false

document.body.addEventListener("keydown", handlerKeyDown)

function handlerKeyDown(e) {
  if (index == phrase.text.length - 1) {
    chars[index].classList.remove("active")
    document.body.removeEventListener("keydown", handlerKeyDown)
    showStatistics()
    return
  }
  if (e.key == chars[index].innerText || (e.key == "Enter" && chars[index].innerText == " ")) {
    if (firstKeyPress) {
      start = Date.now()
      firstKeyPress = false
    }
    chars[index].classList.remove("active")
    index++
    chars[index].classList.add("active")
    if (lastPressError) {
      lastPressError = false
      chars[index-1].classList.add("error")
      errors++
    }
  } else if (!e.shiftKey && e.key != "Dead") { // ignore shift key and accent mark
    lastPressError = true
  }
}

function showStatistics() {
  const words = phrase.text.split(" ").length
  const minutes = (Date.now() - start) / 1000 / 60
  const speed = Math.round(words / minutes)

  const statistics = document.querySelector(".statistics")
  const precision = Math.round((phrase.text.length - errors) / phrase.text.length * 100)

  statistics.innerHTML = `
    <div>
      <h2>Estadísticas</h2>
      <p>Velocidad: ${speed} ppm</p>
      <p>Precisión: ${precision}%</p>
      <p>Errores: ${errors}</p>
      <button onclick="location.reload()" class="next-phrase">OTRA FRASE</button>
    </div>
  `
}
