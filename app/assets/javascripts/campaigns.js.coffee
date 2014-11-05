startCampaignIndex = ->
  if $('#campaign-index-slider').length > 0
    console.log gon.percentages
    start_slider()
    start_progress()

start_slider = ->
  $('.bxslider').bxSlider({
    auto: true
  });

start_progress = ->
  for campaign in gon.percentages
    [campaignId, percent] = campaign
    console.log campaignId
    lineOptions = {
                    strokeWidth: 5,
                    color: "#F8991E"
                  }
    animationOptions = {
                        duration: 800
                       }
    progressBar = new ProgressBar.Line "#bar-#{campaignId}", lineOptions
    progressBar.animate 0.3, animationOptions


$(document).ready startCampaignIndex
$(document).on('page:load', startCampaignIndex);
