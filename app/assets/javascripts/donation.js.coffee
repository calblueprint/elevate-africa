# Run only if donation actually exists

donation = ->
  if $("#general-donation-container").length > 0

    # Creates slider - see http://refreshless.com/nouislider/
    slider = $("#general-donation-slider")
    slider_options = {
                       start: 0,
                       step: 1,
                       connect: "lower",
                       range: {
                                'min': 5,
                                'max': 10000
                              }
                     }
    slider.noUiSlider slider_options
    slider.Link('lower').to($("#donate-amount"))

    # Prevents users from typing anthing but numbers
    $("#donate-amount").keypress (e)->
      if e.which != 8 and e.which != 0 and (e.which < 48 or e.which > 57)
        return false

$(document).ready donation
$(document).on 'page:load', donation
