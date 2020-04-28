'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreate = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameHistory = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}
//
// const onUpdate = function (data) {
//   event.preventDefault()
//   console.log('game updated')
//   api.updateGame(data)
//     .then(ui.updateSuccess)
//     .catch(ui.updateFailure)
// }

module.exports = {
  onCreate,
  onGameHistory
  // onUpdate
}
