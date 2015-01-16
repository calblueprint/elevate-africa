# Run only if donation actually exists


donation = ->
  if $("#general-donation-container").length > 0
    # Prevents users from typing anthing but numbers
    $(".donate-amount").keypress (e)->
      if e.which != 8 and e.which != 0 and (e.which < 48 or e.which > 57)
        return false

    slider_options = {
                      start: 0,
                      step: 1,
                      connect: "lower",
                      range: {
                              'min': 10,
                              '16%': 250,
                              '32%': 500,
                              '49%': 1000,
                              '66%': 2500,
                              '83%': 5000,
                              'max': 10000
                             }
                     }

    numbers = [10, 250, 500, 1000, 2500, 5000, 10000]

    # adds tick marks
    pip_options = {
                    mode: 'values',
                    values: numbers,
                    density: 100
                  }

    # Creates slider - see http://refreshless.com/nouislider/
    slider = $("#general-donation-slider")
    dollar_input = $(".donate-amount")
    image = $("#general-donation-image-container")

    slider.noUiSlider slider_options
    slider.noUiSlider_pips pip_options

    functions = {
                  slide: ->
                    value = parseInt(slider.val())
                    dollar_input.val(value)
                    change_picture value
                }

    slider.on functions

    dollar_input.keyup (e)->
      value = parseInt(dollar_input.val())
      dollar_input.val(value)
      slider.val(value)
      change_picture value

    change_numbers = [250, 500, 1000, 5000]
    # Changes picture based on value of slider
    change_picture = (value) ->
      for num in [0...change_numbers.length]
        number = change_numbers[num]
        if value < number
          image.css "background-image", "url(/assets/donations#{num + 1}.svg)"
          break
        else if value >= change_numbers[change_numbers.length - 1]
          console.log "#{change_numbers[change_numbers.length]}"
          image.css "background-image", "url(/assets/donations4.svg)"
          break

    # Opens up modal for stripe
    $("#donate-modal-button").click (e) ->
      e.preventDefault
      # console.log("hello")
      $("#general-donation-modal-donate-container").fadeToggle()

    $("#donate-info-button").click (e) ->
      $("#general-donation-modal-info-container").fadeToggle()

    $("general-donation-modal-form-container").click (e) ->
      e.stopPropagation()

    $("#general-donation-modal-donate-container").click (e) ->
      e.preventDefault()
      $("#general-donation-modal-donate-container").fadeToggle()

    $("#general-donation-modal-info-container").click (e) ->
      e.preventDefault()
      $("#general-donation-modal-info-container").fadeToggle()

$(document).ready donation
$(document).on 'page:load', donation
