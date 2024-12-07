// Countdown logic
let countdown = 6; // Starting time
const timerElement = document.getElementById("timer");

const interval = setInterval(() => {
    countdown--;
    timerElement.textContent = countdown; // Update countdown display
    if (countdown <= 0) {
        clearInterval(interval); // Stop timer when it reaches 0
    }
}, 1000); // Update every second