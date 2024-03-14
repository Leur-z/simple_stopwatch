window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    //selctor
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");

    let btnStart = document.getElementById("btn-start");
    let btnStop = document.getElementById("btn-stop");
    let btnReset = document.getElementById("btn-reset");

    let interval;
    btnStart.onclick = function () {
        interval = setInterval(startTimer, 10);
    };
    btnStop.onclick = function () {
        clearInterval(interval);
    };
    btnReset.onclick = function () {
        clearInterval(interval);

        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };
    function startTimer() {
        tens++;
        //plus 1 every 10 milliseconds
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        } else {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            //plus 1 every tens > 99
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "00";
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }
};
