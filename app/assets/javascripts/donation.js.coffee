# Run only if donation actually exists

donation = ->
  if $("#general-donation-container").length > 0

    # Creates slider - see http://refreshless.com/nouislider/
    slider = $("#general-donation-slider")
    dollar_input = $("#donate-amount")
    image_tag = $("#general-donation-image")

    slider_options = {
                       start: 0,
                       step: 1,
                       connect: "lower",
                       range: {
                                'min': 5,
                                'max': 2500
                              }
                     }
    slider.noUiSlider slider_options

    change_numbers = [5, 250, 500, 1000, 1500, 2000, 2500]

    # adds tick marks
    pip_options = {
                    mode: 'values',
                    values: change_numbers,
                    density: 100
                  }

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
      slider.val(value)
      change_picture value

    # Changes picture based on value of slider
    change_picture = (value) ->
      for num in [0...change_numbers.length]
        number = change_numbers[num]
        if value < number
          image_tag.attr { src: "donation#{num}.svg" }
          break
        else if value >= change_numbers[change_numbers.length - 1]
          image_tag.attr { src: "donation7.svg" }


    # Prevents users from typing anthing but numbers
    $("#donate-amount").keypress (e)->
      if e.which != 8 and e.which != 0 and (e.which < 48 or e.which > 57)
        return false

$(document).ready donation
$(document).on 'page:load', donation
