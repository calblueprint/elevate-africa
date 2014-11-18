startCampaignIndex = ->
  if $('#campaign-index').length > 0
    start_progress()
    # start_typed()
    # start_slider()

# start_slider = ->
#   $('.bxslider').bxSlider({
#     auto: true
#   });

start_progress = ->
  for campaign in gon.percentages
    [campaignId, percent] = campaign
    lineOptions = {
                    strokeWidth: 5,
                    color: "#F8991E"
                  }
    animationOptions = {
                        duration: 800
                       }
    progressBar = new ProgressBar.Line "#bar-#{campaignId}", lineOptions
    progressBar.animate percent, animationOptions

# start_typed = ->
#   sentences = ["things...", "stuff...", "events..."]
#   options = {
#               strings: sentences,
#               typeSpeed: 10
#               backDelay: 3000,
#               loop: true,
#               showCursor: true,
#             }
#   $("#campaign-index-search").typed options
$(document).ready startCampaignIndex
$(document).on 'page:load', startCampaignIndex
