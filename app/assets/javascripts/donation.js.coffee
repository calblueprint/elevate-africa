# Run only if donation actually exists
TEXT = ["Help aspiring entrepreneurs take the first step to overcoming poverty
         with a multi-week business training program that teaches them how to start
         and manage a business, evaluate opportunities and risks, create product
         differentiation, manage profits, and invest savings.",
         "Most of our business owners don’t have running water or power in
         their homes, but they do have cell phones. Your donation helps us
         develop innovative mobile technology that empowers them to
         manage their businesses from anywhere. It also equips our
         coaches with tablet computers and cloud apps to analyze
         data and mentor entrepreneurs.",
         "Your donation of $500 - $1000 will fund a new loan for an entrepreneur
          who has graduated from our training program and had their business plan
          approved. A single business can change the lives of entire families and
          communities by providing healthcare, clean water, education and jobs."]

donation = ->
  if $("#general-donation-container").length > 0
    primary_color = "#FFC953"
    $("#range-1").css({"background-color": primary_color})

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
                    change_elements value
                }

    slider.on functions

    # Changing inputs

    dollar_input.keyup (e)->
      value = parseInt(dollar_input.val())
      if value >= 0
        change_elements value

    change_numbers = [250, 500, 1000, 5000]
    # Changes picture based on value of slider
    change_elements = (value) ->
      dollar_input.val(value)
      slider.val(value)
      for num in [0...change_numbers.length]
        number = change_numbers[num]
        if value < number
          image.css "background-image", "url(/assets/donations#{num + 1}.svg)"
          setRange $("#range-#{num + 1}").attr("id")
          setText num, value
          break
        else if value >= change_numbers[change_numbers.length - 1]
          image.css "background-image", "url(/assets/donations4.svg)"
          setRange $("#range-4").attr("id")
          setText num, value
          break

    ranges = $(".general-donation-range-container")

    # If you click on a range box
    ranges.click (e) ->
      id = $(this).attr "id"
      amount = $(this).data "amt"
      console.log(amount)
      change_elements amount
      setRange id

    setRange = (id) ->
      for element in ranges
        if $(element).attr("id") == id
          $(element).css({ "background-color": primary_color })
        else
          $(element).css({ "background-color": "white" })

    textBox = $("#general-donation-donate-description")
    wowAlotBox = $("#general-donation-donate-extra")

    setText = (num, value) ->
      console.log value
      if value > 6000
        wowAlotBox.show()
        textBox.hide()
      else
        wowAlotBox.hide()
        textBox.text(TEXT[num])
        textBox.show()


    # Opens up modal for stripe
    $("#donate-modal-button").click (e) ->
      e.preventDefault
      if parseInt(dollar_input.val()) > 0
        $("#general-donation-modal-donate-container").fadeToggle()
      else
        toastr.error("You entered an invalid amount!")

    # Opens the check donation info box
    $("#donate-info-button").click (e) ->
      $("#general-donation-modal-info-container").fadeToggle()

    # Stops clicking inside form to trigger modal hiding
    $(".general-donation-modal-form-container").click (e) ->
      e.stopPropagation()

    $("#general-donation-modal-donate-container").click (e) ->
      e.preventDefault()
      $("#general-donation-modal-donate-container").fadeToggle()

    $("#general-donation-modal-info-container").click (e) ->
      e.preventDefault()
      $("#general-donation-modal-info-container").fadeToggle()



$(document).ready donation
$(document).on 'page:load', donation
