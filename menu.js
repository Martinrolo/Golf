let body = document.querySelector('body')
document.body.style.backgroundImage = "url('img/background.jpg')"
document.body.style.backgroundSize = "cover"

//Create menu button holes
const holeButton = document.createElement('button')
holeButton.classList.add('course-selector')
holeButton.innerHTML = 'Parcours 9 trous'
body.appendChild(holeButton)
holeButton.addEventListener('click', function() {
    removeMenu()
    startGame(1)
})

for (let i=0; i<9; i++) {
    const holeButton = document.createElement('button')
    holeButton.innerHTML = 'Trou ' + (i+1)
    holeButton.classList.add('hole-selector')
    body.appendChild(holeButton)
    holeButton.addEventListener('click', function() {
        removeMenu()
        startGame(i+1)
})
}

function removeMenu() {
    const allHoleButtons = document.querySelectorAll('.hole-selector')
    allHoleButtons.forEach(hole => {
        body.removeChild(hole)
    })
    const courseButton = document.querySelector('.course-selector')
    body.removeChild(courseButton)
    document.body.style.backgroundImage = "none"
}


let table = document.querySelector('#myTable')
let cellScore = table.getElementsByTagName('td')
body.removeChild(table)

function scoreBoard() {
    body.appendChild(table)
}

function updateScoreBoard(currentHole) {
    cellScore[currentHole-1].innerHTML = strikes
}

function playAudio() {
    let audio = document.querySelector('audio')
    audio.play()
}

function startGame(holeNumber) {
    createGameBoard(holeNumber)
    distanceDisplay(holeNumber)
    createHoleAndGround(holeNumber)
    createBall()
    displayButtons()
    displayStrike()
    displayHoleNumber(holeNumber)
    scoreBoard()
}