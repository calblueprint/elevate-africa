$(document).ready(function() {
  $(".about-circle-container").on("mouseenter", ".about-process-icon", function() {
  	endProcessAnimation();
    if($(this).hasClass("deg0")) {
      $(".about-process-text").find(".hi").text("deg0");
    }
    $(".about-process-icon").not(this).each(function() {
      $(this).css({"opacity": "0.75"});
    });
    $(".about-process-text").fadeTo("0", "1");
  });

  $(".about-circle-container").on("mouseleave", ".about-process-icon", function() {
  	endProcessAnimation();
    $(".about-process-icon").not(this).each(function() {
      $(this).css({"opacity": "1"});
    });
  	$(".about-process-text").animate({"opacity": "0"}, "fast");
  });
});

function endProcessAnimation() {
  $(".about-process-text").stop([true][true]);
}

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}