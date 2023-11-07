const buttonSection = document.createElement('div')
buttonSection.classList.add('button-section')

const driverButton = document.createElement('button')
driverButton.innerHTML = 'Driver'
driverButton.classList.add('driver')

const ironButton = document.createElement('button')
ironButton.innerHTML = 'Fer'
ironButton.classList.add('iron')

const putterButton = document.createElement('button')
putterButton.innerHTML = 'Putter'
putterButton.classList.add('putter')

const powerButtonSection = document.createElement('div')
powerButtonSection.classList.add('power-button-section')

const powerButton50 = document.createElement('button')
powerButton50.innerHTML = '50%'
const powerButton75 = document.createElement('button')
powerButton75.innerHTML = '75%'
const powerButton100 = document.createElement('button')
powerButton100.innerHTML = '100%'

let textClubs = document.createElement('div')
textClubs.innerHTML = 'Choisir club: '
textClubs.classList.add('text-button-section')

let textPower = document.createElement('div')
textPower.innerHTML = 'Choisir puissance: '
textPower.classList.add('text-button-section')

function displayButtons() {
    //create section for buttons
    body.appendChild(buttonSection)

    //Choose club text
    buttonSection.appendChild(textClubs)

    //add club buttons
    buttonSection.appendChild(driverButton)
    buttonSection.appendChild(ironButton)
    buttonSection.appendChild(putterButton)

    //create section for power buttons
    body.appendChild(powerButtonSection)

    //choose power text
    powerButtonSection.appendChild(textPower)

    //add each power button
    powerButtonSection.appendChild(powerButton50)
    powerButtonSection.appendChild(powerButton75)
    powerButtonSection.appendChild(powerButton100)

    powerButton50.classList.add('power-button')
    powerButton75.classList.add('power-button')
    powerButton100.classList.add('power-button')
    activateButtons()
}

//activate buttons
function activateButtons() {
    // driverButton = document.querySelector('.driver')
    // ironButton = document.querySelector('.iron')
    // putterButton = document.querySelector('.putter')
    driverButton.addEventListener('click', choosePowerDriver)
    ironButton.addEventListener('click', choosePowerIron)
    putterButton.addEventListener('click', choosePowerPutter)
    driverButton.classList.add('club-button')
    ironButton.classList.add('club-button')
    putterButton.classList.add('club-button')
    driverButton.classList.remove('blocked-button')
    ironButton.classList.remove('blocked-button')
    putterButton.classList.remove('blocked-button')
}

//choose power for each club
function choosePowerDriver() {
    driverButton.removeEventListener('click', choosePowerDriver)
    powerButton50.addEventListener('click', driverHit50)
    powerButton75.addEventListener('click', driverHit75)
    powerButton100.addEventListener('click', driverHit100)
}

function choosePowerIron() {
    ironButton.removeEventListener('click', choosePowerIron)
    powerButton50.addEventListener('click', ironHit50)
    powerButton75.addEventListener('click', ironHit75)
    powerButton100.addEventListener('click', ironHit100)
}

function choosePowerPutter() {
    putterButton.removeEventListener('click', choosePowerPutter)
    powerButton50.addEventListener('click', putterHit50)
    powerButton75.addEventListener('click', putterHit75)
    powerButton100.addEventListener('click', putterHit100)
}



//remove buttons
function removeButtons() {
    powerButton50.removeEventListener('click', driverHit50)
    powerButton75.removeEventListener('click', driverHit75)
    powerButton100.removeEventListener('click', driverHit100)
    powerButton50.removeEventListener('click', ironHit50)
    powerButton75.removeEventListener('click', ironHit75)
    powerButton100.removeEventListener('click', ironHit100)
    powerButton50.removeEventListener('click', putterHit50)
    powerButton75.removeEventListener('click', putterHit75)
    powerButton100.removeEventListener('click', putterHit100)
    driverButton.classList.add('blocked-button')
    ironButton.classList.add('blocked-button')
    putterButton.classList.add('blocked-button')
    powerButton50.classList.add('blocked-button')
    powerButton75.classList.add('blocked-button')
    powerButton100.classList.add('blocked-button')
}