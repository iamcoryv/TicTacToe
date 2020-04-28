'use strict'

const store = require('../store')
const api = require('./api')

const createGameSuccess = function (data) {
  store.game = data.game
  $('.response').text(`Started New Game! Good Luck.`)
  // console.log('created game')
  $('.game').show()
}

const createGameFailure = function () {
  $('.response').text(`Hmm that's weird, try again`)
  // console.log('did not create game')
}

const updateSuccess = function (event) {
  $('.response').text(`Move Made`)
  // console.log('updated')
}

const updateFailure = function (event) {
  $('.response').text(`Hmm couldn't update, lets try again`)
  // console.log('did not update')
  // console.log(`did not update ${store.game.id}`)
}

const getGameSuccess = function (data) {
  let gamesPlayed = $(data.games).toArray().length
  // $('.response').text(`${gamesPlayed}`)
  $(document).ready(function () {
    $('[data-toggle="popover"]').popover()
    $('.popover1').popover({title: 'Header', content: `You have played ${gamesPlayed} game(s)!`})
  })
  // console.log(data.games)
}

const getGameFailure = function () {
  $('.response').text(`I couldn't get your games :(`)
}

let gameGrid = ['', '', '', '', '', '', '', '', '']
let theWinner = ''
let gameCounter = 0
let gameOver = false
let currentTurn = null

let current = 0
let xTurn = false

// refreshes the game
$('#refresh').on('submit', function refresh (event) {
  event.preventDefault()
  xTurn = false
  gameGrid = ['', '', '', '', '', '', '', '', '']
  current = 0
  $('.box').css({
    'background-color': '',
    'pointer-events': 'auto' })
  $('#game-result').text(``)
  $('.box').text(' ')
  gameOver = false
  let emptySpaces = 0
  // console.log(gameGrid, current, xTurn)
  api.createGame()
    .then(createGameSuccess)
    .catch(createGameFailure)
  dispayTurn()
})
// this controls the box clicks
$('.box').on('click', function clickTime (event) {
  xTurn = !xTurn
  if (xTurn === true) {
    $(event.target).css({
      'background-color': 'transparent',
      'pointer-events': 'none'
    })
    current = event.target.id
    gameGrid[event.target.id] = 'x'
    currentTurn = 'x'
    $(event.target).text('x')
    dispayTurn()
    // create object to send to API
    const data = {
      game: {
        cell: {
          index: current,
          value: currentTurn
        },
        over: gameOver
      }
    }
    // pass object to API function
    api.updateGame(data)
      .then(updateSuccess)
      .catch(updateFailure)
  } else if (xTurn === false) {
    $(event.target).css({
      'background-color': 'transparent',
      'pointer-events': 'none'
    })
    gameGrid[event.target.id] = 'o'
    currentTurn = 'o'
    $(event.target).text('o')
    dispayTurn()
  }

  // this is what happens when there is a winner
  function gameFinish () {
    gameCounter += 1
    $('#game-result').text(`The winner is ${theWinner}!`)
    $('.box').css({
      'pointer-events': 'none'})
    gameOver = true
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
    } else {
      tieCheck()
    }
  }
  wincheck()
  // console.log(theWinner, gameCounter)
})

function dispayTurn () {
  if (xTurn === false) {
    $('#currentPlayer').text(`Go Player X`)
  } else if (xTurn === true) {
    $('#currentPlayer').text(`Go Player O`)
  }
}

function tieCheck () {
  let emptySpaces = 0
  for (let i = 0; i < gameGrid.length; i++) {
    // chcek for empty spaces
    if (gameGrid[i] !== '') {
      emptySpaces += 1
    }
  }
  if (emptySpaces === 9) {
    $('#game-result').text(`It's a tie!`)
    $('.box').css({
      'pointer-events': 'none'})
    gameOver = true
  }
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateFailure,
  updateSuccess,
  getGameSuccess,
  getGameFailure,
  dispayTurn
}
