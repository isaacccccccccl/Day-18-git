'use strict'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function startTimer(){
    gStartTime = Date.now()
    clearInterval(gTimerInterval)
    gTimerInterval = setInterval(timerTick, 67)
}

function stopTimer(){
    gStartTime = 0
    clearInterval(gTimerInterval)
    document.querySelector('.timer').innerHTML = '00 : 00'
}

function timerTick() {
    var timePassed = Date.now() - gStartTime
    // var millisecs = String(timePassed % 1000).padStart(3, '0')
    var secs = parseInt(timePassed / 1000)
    gSecs = secs
    
    var strToDisplay = `${secs}`
    document.querySelector('.timer').innerHTML = '' + strToDisplay
}