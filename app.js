let timerID
let clubHit = ''

//speeds
let ballSpeedX = 0
let ballSpeedY = 0
const driverSpeedX = 4
const driverSpeedY = -1.5
const ironSpeedX = 2
const ironSpeedY = -2.5
const putterSpeedX = 1.8

const gravity = -0.02
let airFriction
let hitWater = false

let ball = document.createElement('div')
ball.classList.add('ball')

let game = document.createElement('div')
game.classList.add('game')

function createGameBoard(holeNumber) {
    body.style.alignItems = 'flex-start'
    game.style.width = holes[holeNumber-1].bottomRight[0] + 'px'
    body.appendChild(game)
}

function createBall() {
    drawBall()
    game.appendChild(ball)
}

//draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.top = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall(speed) {
    if (clubHit == 'driver') {
        lastBallPositionX = ballCurrentPosition[0]
        ballCurrentPosition[1] = 341
        ballSpeedX = driverSpeedX*speed
        ballSpeedY = driverSpeedY*speed
        playAudio()
    }
    else if (clubHit == 'iron') {
        lastBallPositionX = ballCurrentPosition[0]
        ballCurrentPosition[1] = 341
        ballSpeedX = ironSpeedX*speed
        ballSpeedY = ironSpeedY*speed
        playAudio()
    }
    else if (clubHit == 'putter') {
        lastBallPositionX = ballCurrentPosition[0]
        ballCurrentPosition[1] = 341
        ballSpeedX = putterSpeedX*speed
        playAudio()
    }
    clubHit = ''
    ballCurrentPosition[0] += ballSpeedX
    ballCurrentPosition[1] += ballSpeedY
    ballSpeedY -= gravity
    airFriction = 0.003*ballSpeedX
    ballSpeedX -= airFriction
    drawBall()
    checkForCollisions()
    hitWall()
    stopBall()
    distanceDisplay(currentHole)
    checkIfBottomHole()
    if (ballSpeedX == 0 && ballSpeedY == 0) {
        clearInterval(timerID)
        activateButtons()
        if (hitWater) {
            strikes += 1
            alert('C\'est dans l\'eau! +1 coup.')
            hitWater = false
            ballCurrentPosition[0] = lastBallPositionX
            drawBall()
        }
        if(ballCurrentPosition[1] >= holes[currentHole-1].bottomLeft[1]) {
            removeButtons()
            alert('Tu as gagné!')
            updateScoreBoard(currentHole)
            strikes = 1
            currentHole +=1
            ballCurrentPosition = [...ballStart]
            console.log(ballStart)
            startGame(currentHole)
        } else {
        strikes+=1
        displayStrike()
        }
    }
}

//CHECK for collisions
function checkForCollisions() {
    //check for ground
    if (
       ballCurrentPosition[1] >= 341 
       ) {
       changeDirectionY()
   }
}

function changeDirectionY() {
    if (ballSpeedY < 0.4 && 
        ballCurrentPosition[1] >= 341 &&
        (ballCurrentPosition[0] <= holes[currentHole-1].topLeft[0]-10 ||
        ballCurrentPosition[0] >= holes[currentHole-1].topRight[0])) {
            ballSpeedY = 0
            // ballCurrentPosition[1] = 341
    } else if(ballCurrentPosition[0] > holes[currentHole-1].topLeft[0] - 10 &&
        ballCurrentPosition[0] < holes[currentHole-1].topRight[0] &&
        ballCurrentPosition[1] > 341) {
            ballSpeedY = ballSpeedY-gravity
    } else {
     ballSpeedY = -ballSpeedY+0.8
    } if (ballCurrentPosition[0] >= lakes[currentHole-1].topLeft[0]-7 && 
        ballCurrentPosition[0] <= lakes[currentHole-1].topRight[0]-7) { //check for lake collision
            // ballCurrentPosition[1] = 341
            if (currentHole == 9) {
                if (ballCurrentPosition[0] >= 968 && ballCurrentPosition[0] <= 1078) {
                } 
            }else {
            ballSpeedX = 0
            ballSpeedY = 0
            hitWater = true
            }
    }

}

function checkIfBottomHole() {
    if(ballCurrentPosition[1] > 363) {
        ballSpeedX = 0
        ballSpeedY = 0
    }
}

function hitWall() {
    if (ballSpeedX > 0 && ballCurrentPosition[0] > holes[currentHole-1].bottomRight[0]-5 ) {
        ballSpeedX = -ballSpeedX
    //hole wall detection
    } else if (ballSpeedX > 0 && ballCurrentPosition[0] >= holes[currentHole-1].bottomRight[0]-15 &&
    ballCurrentPosition[1] > 342 ) {
            ballSpeedX = -ballSpeedX
    } else if (ballSpeedX < 0 && ballCurrentPosition[0] <= holes[currentHole-1].bottomLeft[0] &&
    ballCurrentPosition[1] > 342 ) {
        ballSpeedX = -ballSpeedX
    }
}

function stopBall() {
    if (ballSpeedX < 0.1 && ballSpeedX > 0 && ballCurrentPosition[1] >= 341 ) {
     ballSpeedX = 0
    } 
    if (ballSpeedX < 0) {
        ballSpeedX = ballSpeedX - airFriction
    }
    if (ballSpeedY === 0 && ballSpeedX > 0) {
        ballSpeedX -= 0.02
    } 
    if (ballSpeedY === 0 && ballSpeedX < 0) {
        ballSpeedX += 0.04
    } 
}

//Driver hit
function driverHit50() {
    clubHit = 'driver'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.50);
    }, 15);
}
function driverHit75() {
    clubHit = 'driver'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.75);
    }, 15);
}
function driverHit100() {
    clubHit = 'driver'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(1);
    }, 15);
}

//Iron hit
function ironHit50() {
    clubHit = 'iron'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.5);
    }, 15);
}
function ironHit75() {
    clubHit = 'iron'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.75);
    }, 15);
}
function ironHit100() {
    clubHit = 'iron'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(1);
    }, 15);
}

//Putter hit
function putterHit50() {
    clubHit = 'putter'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.5);
    }, 15);
}
function putterHit75() {
    clubHit = 'putter'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(0.75);
    }, 15);
}
function putterHit100() {
    clubHit = 'putter'
    removeButtons()
    timerID = setInterval(function() {
        moveBall(1);
    }, 15);
}



