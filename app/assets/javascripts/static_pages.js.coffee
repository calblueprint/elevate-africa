# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

navReveal = ->
  $("#navbar-container").css "top", "0px"
  return
navHide = ->
  $("#navbar-container").css "top", "-69px"  if $(this).scrollTop() > 120
  return
$(window).scroll ->
  if $(this).scrollTop() > 120
    $("#navbar-container").css "top", "-69px"
  else
    $("#navbar-container").css "top", "0px"
  return