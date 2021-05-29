const binary = document.querySelector("#binary");
const decimal = document.querySelector("#decimal");

binary.addEventListener("input", e => {
  if (!e.data) return;

  if (!(e.data == "1" || e.data == "0")) {
    binary.value = binary.value.slice(0, binary.value.length - 1);
  } else {
    decimal.value = parseInt(binary.value, 2);
  }
});

decimal.addEventListener("input", () => {
  binary.value = parseInt(decimal.value).toString(2);
});
