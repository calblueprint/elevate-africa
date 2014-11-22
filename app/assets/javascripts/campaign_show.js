$(document).ready(function() {
  $(".campaign-active a").css("background-color", "#ffc953");
  $(".campaign-active a").css("color", "#fff");
  $(".campaign-tabs .campaign-tab-links a").on("click", function(e) {
    var currentAttrValue = $(this).attr("href");

    //show and hide tabs
    //jQuery(".campaign-tabs " + currentAttrValue).show().siblings().hide();

    // slide animation
    $(".campaign-tabs " + currentAttrValue).siblings().slideUp(400);
    $(".campaign-tabs " + currentAttrValue).delay(400).slideDown(400);
    
    //change/remove current tab to active
    $(".campaign-active a").css("background-color", "#fff");
    $(".campaign-active a").css("color", "#666666");
    $(this).css("background-color", "#ffc953");
    $(this).css("color", "#fff");
    $(this).parent("li").addClass("campaign-active").siblings().removeClass("campaign-active");
    e.preventDefault();
  })
  $(window).scroll(function() {
    var campaignBottom = $("#campaign-show-footer").offset().top - 540;
    if($(window).scrollTop() > 200 && $(window).scrollTop() <= campaignBottom) {
      $(".campaign-info").addClass("campaign-info-scroll");
    } else {
      $(".campaign-info").removeClass("campaign-info-scroll");
    }
    if ($(window).scrollTop() > campaignBottom) {
      $(".campaign-info").addClass("campaign-info-bottom");
    } else {
      $(".campaign-info").removeClass("campaign-info-bottom");
    }
  })

  var campaignProgress = new ProgressBar.Line("#campaign-show-bar", {
    color: "#F8991E",
    strokeWidth: 10
  })

  campaignProgress.animate(1, {
    duration: 800
  })
});
