let chronos = ''
let timer = ''
const currentTimer = {
  minutes: 00,
  seconds: 00
}

function init() {
  chronos = document.getElementById('timer')
  chronos.innerText = '00:00'
}

function start() {
  clock(true)
}

function update() {
  addMinute()
  validateTimer()
  chronos.innerText = `${currentTimer.minutes}:${currentTimer.seconds}`
}

function addMinute() {
  if (currentTimer.seconds == 60) {
    currentTimer.minutes++
    currentTimer.seconds = 0
  }
}

function validateTimer() {
  if (currentTimer.minutes.toString().length == 1) {
    currentTimer.minutes = currentTimer.minutes.toString().padStart(2, '0')
  }
  
  if (currentTimer.seconds.toString().length == 1) {
    currentTimer.seconds = currentTimer.seconds.toString().padStart(2, '0')
  }
}


function clock(state) {
  timer = setInterval(() => {
    currentTimer.seconds++
    update()
    }, 1000);
}

function pause() {
  clearInterval(timer)
}


function reset() { 
  clearInterval(timer)
  currentTimer.minutes = 0
  currentTimer.seconds = 0
  update()
}