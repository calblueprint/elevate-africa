startCampaignIndex = ->
  if $('#campaign-index-slider').length > 0
    start_slider()
    start_progress()

start_slider = ->
  $('.bxslider').bxSlider({
    auto: true
  });

start_progress = ->
  lineOptions = {
                  strokeWidth: 5,
                  color: "#F8991E"
                }
  animationOptions = {
                      duration: 800
                     }
  progressBar = new ProgressBar.Line '#container', lineOptions
  progressBar.animate 0.3, animationOptions, ->
    console.log 'Animation has finished'


$(document).ready startCampaignIndex
$(document).on('page:load', startCampaignIndex);
