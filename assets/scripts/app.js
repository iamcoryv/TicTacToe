'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#change-password, #second-screen, .chpwbutton, .sign-out-button, .theBeef, .game').hide()
  $('#sign-up-confirm').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#chpw').on('submit', authEvents.showChpw)
  $('.chpwbutton').click(function () {
    $('#second-screen').show()
    $('.navbar-user').hide()
  })

  $('#get-games').on('click', gameEvents.onGameHistory)
  $('.stats').on('click', gameEvents.onGameHistory)

  $('[data-toggle="popover"]').popover()
  $('.alert').alert()
})
