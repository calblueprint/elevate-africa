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

ready = ->
  if $('#buzz-show').length
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
  else if $('#buzz-index').length
    $('#buzz-button').click (e) ->
      e.preventDefault()
      smoothScroll('buzz-index-container')

    # $(window).bindWithDelay 'scroll', ->
    #   done_scrolling = $(window).scrollTop() > $(document).height() - $(window).height() - 60
    #   load_more = $('.pagination .next a').attr('href')
    #   if load_more && done_scrolling
    #     $.getScript load_more
    #     console.log "hello"
    #     return
    #   else
    #     console.log "wat"
    #   return
    # , 100
    $("#buzz-load-more").click (e) ->
      $("#buzz-box-container").infinitescroll
        loading: {
          finishedMsg: "",
          msgText: "",
          selector: null,
          speed: 'fast',
          start: undefined
        }
        navSelector: "nav.pagination" # selector for the paged navigation (it will be hidden)
        nextSelector: "nav.pagination a[rel=next]" # selector for the NEXT link (to page 2)
        itemSelector: "#buzz-box-container" # selector for all items you'll retrieve
        animated: true
$(document).ready ready
$(document).on 'page:load', ready

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
