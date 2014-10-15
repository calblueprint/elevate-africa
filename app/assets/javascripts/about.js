$(document).ready(function() {
  $(".about-circle-icons").on("mouseenter", "img", function() {
  //$(this).animate({"opacity": "0"}, "slow");
  	console.log("hello");
  	$(".about-process-text").stop([false][true]);
    $(".about-process-text").animate({"opacity": "0"}, "slow");
  });
  $(".about-circle-icons").on("mouseleave", "img", function() {
  //$(this).animate({"opacity": "1"}, "slow");
  	$(".about-process-text").stop([false][true]);
  	$(".about-process-text").animate({"opacity": "1"}, "slow");
  });
});

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}