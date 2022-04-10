var timer = setInterval(runTimer, 1000);
var seconds = 0;

function runTimer() {
    seconds += 1;

    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - (min * 60));

    min = Math.floor(min - (hour * 60));

    let secStr = String(sec).padStart(2, "0");
    let minStr = String(min).padStart(2, "0");
    let finalStr = hour + ":" + minStr + ":" + secStr;
    if (hour === 0) {
        finalStr = min + ":" + secStr;
    }
    document.getElementById("counter").innerHTML = finalStr;
}
