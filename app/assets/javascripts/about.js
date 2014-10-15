$(document).ready(function() {
  $(".about-circle-container").on("mouseenter", ".about-process-icon", function() {
  //$(this).animate({"opacity": "0"}, "slow");
  	console.log("hello");
  	$(".about-process-text").stop([true][true]);
    $(".about-process-text").animate({"opacity": "0"}, "slow");
  });
  $(".about-circle-container").on("mouseleave", ".about-process-icon", function() {
  //$(this).animate({"opacity": "1"}, "slow");
  	$(".about-process-text").stop([true][true]);
  	$(".about-process-text").animate({"opacity": "1"}, "slow");
  });
});

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}