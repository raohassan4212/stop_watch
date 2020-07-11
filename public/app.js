var min = 0;
var sec = 0;
var msec = 0;
var minH = document.getElementById("min");
var secH = document.getElementById("sec");
var msecH = document.getElementById("msec");
var interval;
function timer() {
    msec++
    msecH.innerHTML = msec;

    if (msec >= 100) {
        sec++
        secH.innerHTML = sec;
        msec = 0;
    }else if (sec >= 60) {
        min++
        minH.innerHTML = min
        sec = 0
    }

}

function unread() {
    document.getElementById("btnst").disabled = true; 
} 

function read() {
    document.getElementById("btnst").disabled = false; 
} 

function start()  {
interval = setInterval(timer,10)
unread()
}


function stop() {
    clearInterval(interval, 100)
    read()
    
}

function reset() {
    msecH.innerHTML = 0;
    secH.innerHTML = 0;
    minH.innerHTML = 0;
    stop();
    read()
}