'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#response').text('Signed up successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`signUpSuccess ran. Data is:`, data)
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#response').text('Sign up failed!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`signUpFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#response').text('Signed in successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`signInSuccess ran. Data is:`, data)
  console.log('signed in')
  store.user = data.user
  $('#first-screen').hide()
  $('.chpwbutton, #username').show()
  $('.navbar-user').text(`Hello ${data.user.email}`)
  $('#form').trigger('reset')
}

const signInFailure = function (error) {
  $('#response').text('Wrong Username or Password!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`signInFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#response').text('Changed password successfully!')
  $('#response').removeClass()
  $('#response').addClass('success')
  console.log(`changePasswordSuccess ran. Data is:`, data)
  // $('#change-password').hide()
  $('#second-screen').hide()
  $('.chowbutton').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#response').text('Change password failed!')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.log(`changePasswordFailure ran. Error is:`, error)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#response').text('Signed out successfully')
  $('#response').removeClass()
  $('#response').addClass('success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  // Hide the authenticated stuff, show the unauthenticated:
  // $('#authenticated').hide()
  // $('#first-screen').show()
  // $('#sign-out').hide()
  store.user = null
}

const signOutFailure = function (error) {
  $('#response').text('Could not sign out, you must play forever')
  $('#response').removeClass()
  $('#response').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
