# Run only if donation actually exists

donation = ->
  if $("#general-donation-container").length > 0

    # Prevents users from typing anthing but numbers
    $("#donate-amount").keypress (e)->
      if e.which != 8 and e.which != 0 and (e.which < 48 or e.which > 57)
        return false

$(document).ready donation
$(document).on 'page:load', donation
