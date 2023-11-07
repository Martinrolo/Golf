//create holes
const holeWidth = 40
const holeHeight = 20

class Hole {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + holeWidth, yAxis]
        this.topLeft = [xAxis, yAxis + holeHeight]
        this.topRight = [xAxis + holeWidth, yAxis + holeHeight]
    }
}

const holes = [
    new Hole(1700, 360),
    new Hole(1200, 360),
    new Hole(1500, 360),
    new Hole(800, 360),
    new Hole(1850, 360),
    new Hole(400, 360),
    new Hole(1500, 360),
    new Hole(800, 360),
    new Hole(1700, 360),
]

const grounds = [
    holes[0].bottomRight[0],
    holes[1].bottomRight[0],
    holes[2].bottomRight[0],
    holes[3].bottomRight[0],
    holes[4].bottomRight[0],
    holes[5].bottomRight[0],
    holes[6].bottomRight[0],
    holes[7].bottomRight[0],
    holes[8].bottomRight[0],
]

const flagPoles = [
    holes[0].bottomRight[0],
    holes[1].bottomRight[0],
    holes[2].bottomRight[0],
    holes[3].bottomRight[0],
    holes[4].bottomRight[0],
    holes[5].bottomRight[0],
    holes[6].bottomRight[0],
    holes[7].bottomRight[0],
    holes[8].bottomRight[0],
]

//obstacles
class Lake {
    constructor(xAxis, yAxis, width) {
        this.topLeft = [xAxis, yAxis + holeHeight]
        this.topRight = [xAxis + width, yAxis + holeHeight]
        this.width = width
    }
}

const lakes = [
    new Lake(0, 0, 0),
    new Lake(800, 360, 100),
    new Lake(1100, 360, 300),
    new Lake(100, 360, 350),
    new Lake(800, 360, 450),
    new Lake(0, 0, 0),
    new Lake(900, 360, 300),
    new Lake(400, 360, 300),
    new Lake(800, 360, 750),
]

const hole = document.createElement('div')
hole.classList.add('hole')

const flagpole = document.createElement('div')
flagpole.classList.add('flagpole')

const flag = document.createElement('div')
flag.classList.add('flag')

const ground = document.createElement('div')
ground.classList.add('ground')

const lake = document.createElement('div')
lake.classList.add('lake')

let currentHole
function createHoleAndGround(holeNumber) {
    currentHole = holeNumber //this is for the custom ground detection
    hole.style.left = holes[holeNumber-1].bottomLeft[0] + 'px'
    hole.style.top = '360px'
    flagpole.style.left = holes[holeNumber-1].bottomLeft[0] + holeWidth/2 + 'px'
    flagpole.style.top = '300px'
    flag.style.left = holes[holeNumber-1].bottomLeft[0] -10 + 'px'
    flag.style.top = '300px'
    ground.style.left = '10px'
    ground.style.top = '360px'
    ground.style.width = grounds[holeNumber-1] + 'px'
    lake.style.left = lakes[holeNumber-1].topLeft[0] + 'px'
    lake.style.top = '360px'
    lake.style.width = lakes[holeNumber-1].width + 'px'
    game.appendChild(ground)
    game.appendChild(hole)
    game.appendChild(flagpole)
    game.appendChild(flag)
    game.appendChild(lake)
    if(holeNumber == 9) {
        const ground = document.createElement('div')
        ground.classList.add('ground')
        ground.style.left = '978px'
        ground.style.top = '360px'
        ground.style.width = '100px'
        game.appendChild(ground)
    }
}

let displayCurrentHole = document.createElement('div')
displayCurrentHole.classList.add('current-hole')
function displayHoleNumber(holeNumber) {
    game.appendChild(displayCurrentHole)
    displayCurrentHole.innerHTML = 'Trou numéro: ' + holeNumber
}


const ballStart = [20, 341]
let ballCurrentPosition = [...ballStart]
let lastBallPositionX = ballCurrentPosition[0]

//display distance left
const distance = document.createElement('div')
distance.classList.add('distance-display')

function distanceDisplay(holeNumber) {
    game.appendChild(distance)
    distance.style.left = holes[holeNumber-1].topRight[0] - 240 + 'px'
    let remainingDistance = Math.round((holes[holeNumber-1].topLeft[0] - ballCurrentPosition[0])/4)
    distance.innerHTML = 'Distance du trou: ' + remainingDistance + ' verges'
}

let strikes = 1
const strikeDisplay = document.createElement('div')
strikeDisplay.classList.add('strike-display')

function displayStrike() {
    game.appendChild(strikeDisplay)
    strikeDisplay.innerHTML = 'Coup numéro: ' + strikes
}