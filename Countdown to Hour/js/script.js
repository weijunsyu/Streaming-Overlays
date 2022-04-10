var currentDate = new Date(); // current date on load
var targetHour = currentDate.getHours() + 1; // The next hour
var targetDate = new Date(currentDate.setHours(targetHour, 0, 0, 0));

var timer = setInterval(runTimer, 1000);

function runTimer() {
    let currentTime = new Date().getTime();
    let targetTime = targetDate.getTime();

    let difference = targetTime - currentTime;
    
    // If countdown reached 0 then start counting up
    if (difference < 0) {
        difference = Math.abs(difference);
    }
    
    let min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((difference % (1000 * 60)) / 1000);

    let secStr = String(sec).padStart(2, "0");
    document.getElementById("counter").innerHTML = min + ":" + secStr;
}
