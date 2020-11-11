const message = document.getElementById("message")

let cookies = 0
const inventory = [0, 0, 0]
const cookiesProduce = [1, 2, 4]
const priceProduct = [100, 200, 400]

function clickToCookie() {
  cookies++
  message.innerHTML = ""
}

function purchase(object) {
  if (cookies >= priceProduct[object]) {
    inventory[object]++
    cookies -= priceProduct[object]
    message.innerHTML = ""
  } else {
    message.innerHTML = "No tienes suficientes galletas"
  }
}

const FPSProduce = 1
setInterval(() => {
  for (let i = 0; i < inventory.length; i++) {
    cookies += inventory[i] * cookiesProduce[i]
  }
}, 1000/FPSProduce)


const FPS = 30
setInterval(() => {
  document.getElementById("counter").innerHTML = new Intl.NumberFormat().format(cookies)
  document.getElementById("inventory").innerHTML = `Cursores: ${inventory[0]}<br>
                                                    Abuelitas: ${inventory[1]}<br>
                                                    Hornos: ${inventory[2]}`
}, 1000/FPS)
