const textContainer = document.querySelector(".text-container")
const text = "Lorem ipsum dolor sit amet consecta dipis icing elit Omnis harum sint maiores autem"

textContainer.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("")

const chars = document.querySelectorAll(".text-container > span")
chars[0].classList.add("active")

let start
let index = 0
let errors = 0
let firstKeyPress = true
let lastPressError = false

document.body.addEventListener("keydown", handlerKeyDown)

function handlerKeyDown(e) {
  if (index == text.length - 1) {
    chars[index].classList.remove("active")
    showStatistics()
    document.body.removeEventListener("keydown" ,foo)
    return
  }
  if (e.key == chars[index].innerText) {
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
  } else if (!e.shiftKey) { // ignore shift key
    lastPressError = true
  }
}

function showStatistics() {
  const words = text.split(" ").length
  const minuts = (Date.now() - start) / 1000 / 60
  const speed = Math.round(words / minuts)

  const statistics = document.querySelector(".statistics")
  const precision = Math.round((text.length - errors) / text.length * 100)

  statistics.innerHTML = `
    <div>
      <h2>Estadísticas</h2>
      <p>Velocidad: ${speed} ppm</p>
      <p>Precisión: ${precision}%</p>
      <p>Errores: ${errors}</p>
    </div>
  `
}
