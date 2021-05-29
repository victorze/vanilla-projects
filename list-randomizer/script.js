const textarea = document.querySelector("textarea");

function randomize() {
  if (textarea.value.trim() == "") {
    window.alert("You must enter items");
    textarea.focus();
    return;
  }

  const items = textarea.value
                  .split("\n")
                  .map(item => item.trim())
                  .filter(item => item != "");

  shuffle(items);
  textarea.value = items
                     .map((item, i) => `${i + 1}. ${item}`)
                     .join("\n");
}

function resetForm() {
  textarea.value = "";
  textarea.focus();
}

function shuffle(array) {
  for (let i = array.length -1 ; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
