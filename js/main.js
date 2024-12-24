'use strict'

var gSize = 100
var gFirstInterval
var gSecInterval
var gThierdInterval
var gFourthInterval

var gTimerInterval
var gStartTime
var gSecs

const gUndo = []
const gRedo = []

function onBallClick(maxDiameter, i) {

    var elBall = document.querySelector(`.ball${i}`)
    gSize = +elBall.innerText + getRandomInt(20, 61)
    if (gSize > maxDiameter) gSize = 100


    const color = getRandomColor()
    elBall.style.backgroundColor = color
    elBall.style.width = gSize + 'px'
    elBall.style.height = gSize + 'px'
    elBall.innerText = gSize
    gUndo.push({ gSize, color, i })
}

function onBallThreeClick() {

    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        var elBall = document.querySelector(`.ball${i + 1}`)
        onBallClick(400, i + 1)
    }

}

function onBallFourthClick() {

    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        var elBall = document.querySelector(`.ball${i + 1}`)

        gSize = +elBall.innerText - getRandomInt(20, 61)
        if (gSize < 100) gSize = 100


        elBall.style.backgroundColor = getRandomColor()
        elBall.style.width = gSize + 'px'
        elBall.style.height = gSize + 'px'
        elBall.innerText = gSize
    }
}

function onBallFifthClick() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}

function onBallHover() {
    startTimer()

    var count = 0
    if (count > 10) {
        stopTimer()
        clearInterval(gFirstInterval)
        clearInterval(gSecInterval)
        clearInterval(gThierdInterval)
        clearInterval(gFourthInterval)
    }

    if (count < 10) {
        gFirstInterval = setInterval(onBallClick, 2000, document.querySelector(`.ball${1}`), 500)
        gSecInterval = setInterval(onBallClick, 2000, document.querySelector(`.ball${2}`), 300)
        gThierdInterval = setInterval(onBallThreeClick, 2000)
        gFourthInterval = setInterval(onBallFourthClick, 2000)
        count++
    }
}

function leaveBall() {
    stopTimer()
    clearInterval(gFirstInterval)
    clearInterval(gSecInterval)
    clearInterval(gThierdInterval)
    clearInterval(gFourthInterval)
}

function onUndo() {
    if (gUndo.length > 0) {
        setBall('undo')
    }
}

function onRedo() {
    if (gRedo.length > 0) {
        setBall('redo')
    }
}

function setBall(action) {
    if (action === 'undo') {
        var lastPlay = gUndo.pop()
        gRedo.push(lastPlay)
    } else if (action === 'redo') {
        lastPlay = gRedo.pop()
    }
    console.log(lastPlay)
    var elBall = document.querySelector(`.ball${lastPlay.i}`)
    console.log(lastPlay.color)
    elBall.innerText = lastPlay.gSize
    elBall.style.width = lastPlay.gSize + 'px'
    elBall.style.height = lastPlay.gSize + 'px'
    elBall.style.backgroundColor = lastPlay.color
}