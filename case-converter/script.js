const textarea = document.querySelector("textarea")

function upper() {
  textarea.value = textarea.value.toUpperCase();
}

function lower() {
  textarea.value = textarea.value.toLowerCase();
}

function capitalize() {
  textarea.value = capitalLetter(textarea.value)
}

function copy() {
  textarea.select();
  document.execCommand("copy");
}

function capitalLetter(str) {
  return str
           .split(" ")
           .map(str => str[0].toUpperCase() + str.slice(1))
           .join(" ")
}
