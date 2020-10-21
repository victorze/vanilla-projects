const binary = document.querySelector("#binary")
const decimal = document.querySelector("#decimal")
const notification = document.querySelector("#notification")

binary.addEventListener("input", e => {
  if (isBinary(binary.value)) {
    notification.textContent = ""
    decimal.value = parseInt(binary.value, 2)
  } else {
    decimal.value = ""
    notification.textContent = "El número debe ser binario"
  }
})

function isBinary(text) {
  if (text == "") return false
  return text.split("").every(digit => digit == "1" || digit == "0")
}
