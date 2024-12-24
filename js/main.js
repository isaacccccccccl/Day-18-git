'use strict'

var gSize = 100

function onBallClick(onBtn) {

    var elBall = onBtn
    if (gSize < 400) gSize = +elBall.innerText + getRandomInt(20, 61)
    else gSize = 100

    elBall.style.backgroundColor = getRandomColor()
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
}