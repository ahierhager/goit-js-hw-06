const counterElement = document.getElementById("value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
let counterValue = 0;

counterElement.textContent = counterValue;
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    counterElement.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
});

