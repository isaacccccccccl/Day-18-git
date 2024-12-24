'use strict'

var gSize = 100

function onBallClick() {
    var elBall = document.querySelector('.ball')
    gSize += 50
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
}