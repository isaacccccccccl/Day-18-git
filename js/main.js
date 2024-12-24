'use strict'

var gSize = 100

function onBallClick(onBtn, maxDiameter) {

    var elBall = onBtn
    gSize = +elBall.innerText + getRandomInt(20, 61)
    if (gSize > maxDiameter) gSize = 100
    

    elBall.style.backgroundColor = getRandomColor()
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
}