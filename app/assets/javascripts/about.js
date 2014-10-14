$(document).ready(function() {
  $(".about-process-container").on("mouseenter", "img", function() {
  //$(this).animate({"opacity": "0"}, "slow");
  	console.log("hello");
    $(".about-process-text").animate({"opacity": "1"}, "fast");
  });
  $(".about-process-container").on("mouseleave", "img", function() {
  //$(this).animate({"opacity": "1"}, "slow");
  	$(".about-process-text").animate({"opacity": "0"}, "fast");
  });
});

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}