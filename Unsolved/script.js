
var counter = 0;
var counterText = document.querySelector("#count");
var incrementBtn = document.querySelector ("#increment")
var decrementBtn = document.querySelector ("#decrement")

document.getElementById("increment").addEventListener("click", increment)
document.getElementById("decrement").addEventListener("click", decrement)

    // function setCounterText() {
    //     counterText.textContent = counter;

        function increment() {
            counter = counter + 1;
            counterText.innerHTML = counter;
        }
        function decrement() {
            if (counter > 0) {
                counter = counter -1;
            } else if (counter = 0) {
                count = 0;
            }
            counterText.innerHTML = counter;
        }
    