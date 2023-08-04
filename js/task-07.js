const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

input.addEventListener("input", (e) => {
const fontSize = input.value + "px";
output.style.fontSize = fontSize;
});