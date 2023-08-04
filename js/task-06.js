const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
    const inputLength = input.getAttribute("data-length");
    const currentLength = input.value.length;

    if( currentLength === parseInt(inputLength)){
        input.classList.remove("valid");
        input.classList.add("valid");
    } else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
} )