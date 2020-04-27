'use strict'

const store = require('../store')



const createGameSuccess = function (data) {
  store.game = data.game
}

const createGameFailure = function () {
  $('#response').text(`Hmm that's weird, try again`)
}

const updateSuccess = function (event) {
  $('#response').text(`Saved!`)
}

const updateFailure = function (event) {
  $('#response').text(`Hmm couldn't update, lets try again`)
}

const getGameSuccess = function () {
  $('#response').text(`Here ya go!`)
}

const getGameFailure = function () {
  $('#response').text(`I couldn't get your games :(`)
}

let gameGrid = ['', '', '', '', '', '', '', '', '']
let theWinner = ''
let gameCounter = 0

let current = 0
let xTurn = false

// refreshes the game
$('#refresh').on('submit', function (event) {
  event.preventDefault()
  xTurn = false
  gameGrid = ['', '', '', '', '', '', '', '', '']
  current = 0
  $('.box').css({
    'background-color': '',
    'pointer-events': 'auto' })
  $('#game-result').text(``)
  $('.box').text(' ')
  console.log(gameGrid, current, xTurn)
})
// this controls the box clicks
$('.box').on('click', function (event) {
  xTurn = !xTurn
  if (xTurn === true) {
    $(event.target).css({
      'background-color': 'transparent',
      'pointer-events': 'none'
    })
    current = event.target.id
    gameGrid[event.target.id] = 'x'
    $(event.target).text('x')
    dispayTurn()
  } else if (xTurn === false) {
    $(event.target).css({
      'background-color': 'transparent',
      'pointer-events': 'none'
    })
    gameGrid[event.target.id] = 'o'
    $(event.target).text('o')
    dispayTurn()
  }

  // this is what happens when there is a winner
  function gameFinish () {
    gameCounter += 1
    $('#game-result').text(`The winner is ${theWinner}!`)
    $('.box').css({
      'pointer-events': 'none'})
  }
// win checker
  function wincheck () {
    if (gameGrid[0] === 'x' && gameGrid[1] === 'x' && gameGrid[2] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[3] === 'x' && gameGrid[4] === 'x' && gameGrid[5] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[6] === 'x' && gameGrid[7] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[0] === 'x' && gameGrid[3] === 'x' && gameGrid[6] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[1] === 'x' && gameGrid[4] === 'x' && gameGrid[7] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[2] === 'x' && gameGrid[5] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[0] === 'x' && gameGrid[4] === 'x' && gameGrid[8] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[2] === 'x' && gameGrid[4] === 'x' && gameGrid[6] === 'x') {
      theWinner = 'Player X '
      gameFinish()
    } else if (gameGrid[3] === 'o' && gameGrid[4] === 'o' && gameGrid[5] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[6] === 'o' && gameGrid[7] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[0] === 'o' && gameGrid[3] === 'o' && gameGrid[6] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[1] === 'o' && gameGrid[4] === 'o' && gameGrid[7] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[2] === 'o' && gameGrid[5] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[0] === 'o' && gameGrid[4] === 'o' && gameGrid[8] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[2] === 'o' && gameGrid[4] === 'o' && gameGrid[6] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    } else if (gameGrid[0] === 'o' && gameGrid[1] === 'o' && gameGrid[2] === 'o') {
      theWinner = 'Player O '
      gameFinish()
    }
    // else {
    //   $('#game-result').text(`Its a Tie!`)
    // }
  }
  wincheck()
  console.log(theWinner, gameCounter)
})

function dispayTurn () {
  if (xTurn === false) {
    $('#currentPlayer').text(`Go Player X`)
  } else if (xTurn === true) {
    $('#currentPlayer').text(`Go Player O`)
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateFailure,
  updateSuccess,
  getGameSuccess,
  getGameFailure

}
