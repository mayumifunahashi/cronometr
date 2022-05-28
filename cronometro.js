var seconds = 0;
var minutes = 0;
var hours = 0;
var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start() {

    interval =  setInterval(watch,1000);
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    hours = 0;
    minutes=0;
    seconds=0;
    document.getElementById('watch').innerText='00:00:00'
}


function watch () {
    seconds++
    if (seconds ==60) {
        minutes ++ 
        seconds=0
        if (minutes == 60) {
            hours ++
            minutes = 0

        }
    }
    document.getElementById('watch').innerText = twoDigits(hours) + ':' + twoDigits(minutes)+ ':' + twoDigits(seconds);
} 