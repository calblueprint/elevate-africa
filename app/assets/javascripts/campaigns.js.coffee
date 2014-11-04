startCampaignIndex = ->
  if $('#campaign-index-slider').length > 0
    start_slider()

start_slider = ->
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true
  });

$(document).ready startCampaignIndex
$(document).on('page:load', startCampaignIndex);
