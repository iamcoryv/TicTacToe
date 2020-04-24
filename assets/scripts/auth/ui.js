'use strict'

const store = require('../store')

const signUpSuccess = function(data) {
  $('#response').text('Signed up successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`signUpSuccess ran. Data is:`, data)
  $('#sign-up-screen, #sign-out, #change-password').hide()
  $('form').trigger('reset')
}

const signUpFailure = function(error) {
  $('#response').text('Sign up failed!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`signUpFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signInSuccess = function(data) {
  $('#response').text('Signed in successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`signInSuccess ran. Data is:`, data)
  store.user = data.user

  $('#first-screen, #sign-up-screen, #change-password').hide()
  $('#sign-out, #chpw').show()
  $('#form').trigger('reset')
}

const signInFailure = function(error) {
  $('#response').text('Wrong Username or Password!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`signInFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function(data) {
  $('#response').text('Changed password successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`changePasswordSuccess ran. Data is:`, data)
  $('#change-password').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function(error) {
  $('#response').text('Change password failed!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`changePasswordFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signOutSuccess = function() {
  $('#response').text('Signed out successfully')
  $('#response').removeClass()
  $('#response').addClass('success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  // Hide the authenticated stuff, show the unauthenticated:
  // $('#authenticated').hide()
  $('#first-screen').show()
  $('#sign-out').hide()
  store.user = null
}

const signOutFailure = function(error) {
  $('#response').text('Could not sign out, you must play forever')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

let gameGrid = ['', '', '', '', '', '', '', '', '']
let theWinner = ''
let gameCounter = 0

let clickCount = 0
let current = 0
let xTurn = true


$('#refresh').on('submit', function (event ) {
  event.preventDefault()
  xTurn = true
  gameGrid = ['', '', '', '', '', '', '', '', '']
  current = 0
  console.log(gameGrid, current, xTurn)
})


// X= blue and red = O for now
$('.box').on('click', function (event) {
  xTurn = !xTurn
  if (xTurn === true) {
    $(event.target).css({
      'background-color': 'red',
      'pointer-events': 'none'
    })
    current = event.target.id
    gameGrid[event.target.id] = 'x'
  } else if (xTurn === false) {
    $(event.target).css({
      'background-color': 'blue',
      'pointer-events': 'none'
    })
    gameGrid[event.target.id] = 'o'
  }
  $('#display-result').text(`${gameGrid}`)

  function wincheck () {
    if (gameGrid[0] === 'x' && gameGrid[1] === 'x' && gameGrid[2] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[3] === 'x' && gameGrid[4] === 'x' && gameGrid[5] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[6] === 'x' && gameGrid[7] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[0] === 'x' && gameGrid[3] === 'x' && gameGrid[6] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[1] === 'x' && gameGrid[4] === 'x' && gameGrid[7] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[2] === 'x' && gameGrid[5] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[0] === 'x' && gameGrid[4] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[2] === 'x' && gameGrid[4] === 'x' && gameGrid[6] === 'x') {
      theWinner = 'Player X '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[3] === 'o' && gameGrid[4] === 'o' && gameGrid[5] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[6] === 'o' && gameGrid[7] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[0] === 'o' && gameGrid[3] === 'o' && gameGrid[6] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[1] === 'o' && gameGrid[4] === 'o' && gameGrid[7] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[2] === 'o' && gameGrid[5] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[0] === 'o' && gameGrid[4] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[2] === 'o' && gameGrid[4] === 'o' && gameGrid[6] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    } else if (gameGrid[0] === 'o' && gameGrid[1] === 'o' && gameGrid[2] === 'o') {
      theWinner = 'Player O '
      gameCounter += 1
      $('#game-result').text(`The winner is ${theWinner}!`)
    }
    // else {
    //   $('#game-result').text(`Its a Tie!`)
    // }
  }
  wincheck()
  console.log(theWinner, gameCounter)
})

// check for draw
// $('.box').on('click', function (event) {
//   clickCount = (clickCount === 2) ? clickCount = 0 : clickCount
//   if (clickCount === 0) {
//     $(event.target).css({'background-color': 'red'})
//     current = event.target.id
//     xArray.push(gameGrid[event.target.id])
//   } else if (clickCount === 1 && current === event.target.id) {
//     $(event.target).css({'background-color': 'blue', 'pointer-events': 'none'})
//     oArray.push(gameGrid[event.target.id])
//     xArray.pop()
//
//   }
//   clickCount++
//   $('#display-result').text(`oArray is ${oArray} and xArray is ${xArray}`)
// })
// const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// function winCheck (array) {
//   for (let i = 0; i < winningCombos.length; i++) {
//     if (array.includes(winningCombos[i])) {
//       console.log(`x wins`)
//     } else {
//       console.log(`this function doesn't work`)
//     }
//   }
// }
// // winCheck(xArray)

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
