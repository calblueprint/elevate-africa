$(document).ready(function() {
  $(".about-process").on("mouseenter", "img", function() {
  //$(this).animate({"opacity": "0"}, "slow");
    $(this).closest(".about-process").find(".about-process-text").animate({"opacity": "0"}, "slow");
  });
  $(".about-process").on("mouseleave", "img", function() {
  //$(this).animate({"opacity": "1"}, "slow");
  	$(this).closest(".about-process").find(".about-process-text").animate({"opacity": "1"}, "slow");
  });
});