$(document).ready(function() {
  $(".about-process").on("mouseenter", "img", function() {
  	console.log("syke");
  	$(this).animate({"opacity": "0"}, "slow");
  });
  $(".about-process").on("mouseleave", "img", function() {
  	console.log("syke");
  	$(this).animate({"opacity": "1"}, "slow");
  });
});