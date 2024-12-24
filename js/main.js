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

function onBallThreeClick() {

    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        var elBall = document.querySelector(`.ball${i+1}`)
        onBallClick(elBall, 400)
    }

}

function onBallFourthClick() {

    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        var elBall = document.querySelector(`.ball${i+1}`)

        gSize = +elBall.innerText - getRandomInt(20, 61)
    if (gSize < 100) gSize = 100


    elBall.style.backgroundColor = getRandomColor()
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
    } 
}