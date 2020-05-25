
//Define the counter value to its starting point. 
var counter = 0;
//Define what HTML element to change using the id.
var counterText = document.querySelector("#count");
var incrementBtn = document.querySelector ("#increment")
var decrementBtn = document.querySelector ("#decrement")

//Define what will prompt each of the HTML elements to change when the specified code is run.
document.getElementById("increment").addEventListener("click", increment)
document.getElementById("decrement").addEventListener("click", decrement)

        //Process called "increment" that will increase the counter by 1 when the button is clicked.
        function increment() {
            counter = counter + 1;
            counterText.innerHTML = counter;
        }
        //Process called "decrement" that will decrease the counter by 1 when the button is clicked.
        function decrement() {
            if (counter > 0) {
                counter = counter -1;
            //If the value of the counter is at 0, the counter will not decrease further.
            } else if (counter = 0) {
                count = 0;
            }
            counterText.innerHTML = counter;
        }
