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

  // $('#refresh').on('submit', function () {
  //   $('.row').trigge'reset't")
  // })
})

// $('#row').load(document. + ' #row')

// $.get('/api/mydiv', function(data) {
//   $('#mydiv').html(data);
// });
