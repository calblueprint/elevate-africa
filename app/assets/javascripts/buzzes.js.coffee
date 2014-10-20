# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  url = "http://localhost:3000/buzzes"
  options =
    twitter:
      text: "Check out this awesome jQuery Social Buttons Plugin! "
      via: "Tutorialzine"

    facebook: true
    googlePlus: true

  $(".socialShare").shareButtons url, options

$(document).ready ->
  $('.share-twitter').click (e)->
    e.preventDefault()
    width = 575
    height = 400
    left = ($(window).width() -  width) / 2
    top = ($(window).height() - height) / 2
    url = this.href
    opts = "status=1, width=#{width}, height=#{height},top=#{top},left=#{left}"
    window.open(url,'twitter', opts)
    return false

  $('.share-google').click (e)->
    e.preventDefault
    window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,
                                scrollbars=yes,height=600,width=600')
    return false;

  $('.share-facebook').click (e)->
    e.preventDefault
    window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,
                                scrollbars=yes,height=600,width=600')
    return false;

#
#
# // You can also share to pinterest and tumblr:
#
# var options = {
#
#   // Pinterest requires a image to be "pinned"
#
#   pinterest: {
#     media: 'http://example.com/image.jpg',
#     description: 'My lovely picture'
#   },
#
#   // Tumblr takes a name and a description
#
#   tumblr: {
#     name: 'jQuery Social Buttons Plugin!',
#     description: 'There is a new article on tutorialzine.com page! Check out!'
#   }
# };
#
#
