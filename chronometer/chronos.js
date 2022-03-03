let chronos = ''
let timer = ''
let currentTimer = {
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
  if (currentTimer.seconds == 60) {
    currentTimer.minutes++
    currentTimer.seconds = 0
  }
  
  if (currentTimer.minutes.toString().length == 1) {
    currentTimer.minutes = currentTimer.minutes.toString().padStart(2, '0')
  }
  
  if (currentTimer.seconds.toString().length == 1) {
    currentTimer.seconds = currentTimer.seconds.toString().padStart(2, '0')
  }

  chronos.innerText = `${currentTimer.minutes}:${currentTimer.seconds}`
}

function clock(state) {
  if (state) {
    timer = setInterval(() => {
      currentTimer.seconds++
      update()
    }, 1000);
  }
}