// Get the timer element
var timerelement = document.getElementById("timer")

// Create an average timer that starts at 0:0:0
var hours = 0;
var minutes = 0;
var seconds = 0;

function timer() {
    var time = hours + ":" + minutes + ":" + seconds;
    timerelement.innerHTML = time;
    seconds = seconds + 1;
    if(seconds > 59) {
        seconds = 0;
        minutes = minutes + 1;
    }
    if(minutes > 59) {
        minutes = 0;
        hours = hours + 1;
    }
}

// Call the timer function every second
timer()
setInterval(timer, 1000);