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
});
