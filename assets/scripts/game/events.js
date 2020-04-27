'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
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

const onUpdate = function () {
  event.preventDefault()
  api.updateGame()
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

module.exports = {
  onCreate,
  onGameHistory,
  onUpdate
}
