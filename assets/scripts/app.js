'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  $('#change-password, #sign-out, #chpw').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#chpw').on('submit', authEvents.showChpw)

  const gameGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  // const co0 = document.querySelector('.co0')
  // const co1 = document.querySelector('.co1')
  // const co2 = document.querySelector('.co2')
  // const co3 = document.querySelector('.co3')
  // const co4 = document.querySelector('.co5')
  // const co6 = document.querySelector('.co6')
  // const co7 = document.querySelector('.co7')
  // const co8 = document.querySelector('.co8')
  const xString = []
  const oString = []

  let clickCount = 0

  $('.box').on('click', function (event) {
    clickCount = (clickCount === 2) ? clickCount = 0 : clickCount
    if (clickCount === 0) {
      $(event.target).css({'background-color': 'red'})
      xString.push(gameGrid[event.target.id])

    } else if (clickCount === 1) {
      $(event.target).css({'background-color': 'blue'})
      oString.push(gameGrid[event.target.id])
      xString.pop()
    }
    clickCount++
    $('#display-result').text(`ostring is currently ${oString}`)
    $('#display-result').text(`xstring is currently ${xString}`)

  })
})
