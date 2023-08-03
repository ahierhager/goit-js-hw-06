const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();

  if (name !== "") {
    output.textContent = name;
  } else {
    output.textContent = "Anonymous";
  }
});