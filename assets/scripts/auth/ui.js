'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('.response').text('Signed up successfully!')
  // console.log(`signUpSuccess ran. Data is:`, data)
  $('form').trigger('reset')
  $('#close-modal').click()
}

const signUpFailure = function () {
  $('.response').text('Sign up failed!')
  $('.response').addClass('failure')
  // console.log(`signUpFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('.response').text('Signed in successfully!')
  // console.log(`signInSuccess ran. Data is:`, data)
  // console.log('signed in')
  store.user = data.user
  $('#first-screen, .signed-out-screen').hide()
  $('.chpwbutton, #username, .sign-out-button, .navbar-user').show()
  $('#sign-out, .sign-out-button, .theBeef').show()
  $('.navbar-user').text(`Hello ${data.user.email}`)
  $('#form').trigger('reset')
}

const signInFailure = function () {
  $('.response').text('Wrong Username or Password!')
  $('.response').addClass('failure')
  // console.log(`signInFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('.response').text('Changed password successfully!')
  // console.log(`changePasswordSuccess ran. Data is:`, data)
  $('#second-screen').hide()
  $('.chpwbutton').show()
  $('.navbar-user').show()
  $('#sign-out, .sign-out-button').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('.response').text('Change password failed!')
  $('.response').addClass('failure')
  // console.log(`changePasswordFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('.response').text('Signed out successfully')
  $('form').trigger('reset')
  // console.log('signOutSuccess ran and nothing was returned!')
  // Hide the authenticated stuff, show the unauthenticated:
  // $('#authenticated').hide()
  $('#first-screen, .signed-out-screen').show()
  $('#sign-out, .navbar-user, .chpwbutton, .theBeef').hide()
  store.user = null
}

const signOutFailure = function () {
  $('.response').text('Could not sign out, you must play forever')
  $('.response').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

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
