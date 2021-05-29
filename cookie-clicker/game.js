const message = document.getElementById("message");

let cookies = 0;
const inventory = [0, 0, 0];
const cookiesProduce = [1, 2, 4];
const priceProduct = [100, 200, 400];

function addACookie() {
  cookies++;
  message.innerHTML = "";
}

function purchase(cursor) {
  if (cookies >= priceProduct[cursor]) {
    inventory[cursor]++;
    cookies -= priceProduct[cursor];
    message.innerHTML = "";
  } else {
    message.innerHTML = "No tienes suficientes galletas";
  }
}

const FPSProduce = 1;
setInterval(() => {
  for (let i = 0; i < inventory.length; i++) {
    cookies += inventory[i] * cookiesProduce[i];
  }
}, 1000/FPSProduce);

const FPS = 30;
setInterval(() => {
  document.querySelector("#counter").innerHTML = new Intl.NumberFormat().format(cookies);
  document.querySelector("#inventory").innerHTML = `Cursores: ${inventory[0]}<br>
                                                    Abuelitas: ${inventory[1]}<br>
                                                    Hornos: ${inventory[2]}`;
}, 1000/FPS);
