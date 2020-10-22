const btnUpper = document.getElementById("upper");
const btnLower = document.getElementById("lower");
const btnCapitalized = document.getElementById("capitalized");
const copy = document.getElementById("copy");

btnUpper.addEventListener("click", () => {
    const textarea = document.querySelector("textarea")
    let text = textarea.value;
    textarea.value = text.toUpperCase();
});

btnLower.addEventListener("click", () => {
    const textarea = document.querySelector("textarea")
    let text = textarea.value;
    textarea.value = text.toLowerCase();
});

btnCapitalized.addEventListener("click", () => {
    const textarea = document.querySelector("textarea")
    let text = textarea.value;
    textarea.value = capitalLetter(text.trim());
});

copy.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
});

function capitalLetter(str) {
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

