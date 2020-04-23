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

  const xArray = [4,5,6,7,2,1]
  const oArray = []
  // const xArraySort = xArray.sort()
  // const oArraySort = oArray.sort()
let clickCount = 0
let current = 0

  $('.box').on('click', function (event) {
    clickCount = (clickCount === 2) ? clickCount = 0 : clickCount
    if (clickCount === 0) {
      $(event.target).css({'background-color': 'red'})
      current = event.target.id
      xArray.push(gameGrid[event.target.id])
    } else if (clickCount === 1 && current === event.target.id) {
      $(event.target).css({'background-color': 'blue', 'pointer-events': 'none'})
      oArray.push(gameGrid[event.target.id])
      xArray.pop()

    }
    clickCount++
    $('#display-result').text(`oArray is ${oArray} and xArray is ${xArray}`)
  })
  // if the string of xArray has these numbers in it
  const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  function winCheck (array) {
    for (let i = 0; i < winningCombos.length; i++) {
      if (array.includes(winningCombos[i])) {
        console.log(`x wins`)
      } else {
        console.log(`this function doesn't work`)
      }
    }
  }
  winCheck(xArray)
})
