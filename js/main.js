'use strict'

var gSize = 100

function onBallClick() {
    var elBall = document.querySelector('.ball')
    if (gSize < 400) gSize += 50
    else gSize = 100

    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
}