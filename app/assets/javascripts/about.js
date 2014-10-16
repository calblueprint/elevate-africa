$(document).ready(function() {
  $(".about-circle-container").on("mouseenter", ".about-process-icon", function() {
  	endProcessAnimation();
    if($(this).hasClass("deg0")) {
      console.log("deg0 doeeeeee")
      $(".about-process-text").find(".hi").text("deg0");
    }
    $(".about-process-text").animate({"opacity": "1"}, "slow");
  });
  
  $(".about-circle-container").on("mouseleave", ".about-process-icon", function() {
  	endProcessAnimation();
  	$(".about-process-text").animate({"opacity": "0"}, "slow");
  });
});

function endProcessAnimation() {
  $(".about-process-text").stop([true][true]);
}

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}