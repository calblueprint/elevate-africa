var ready = function() {

  $(document).ready(function() {
    $(".about-circle-container").on("mouseenter", ".about-process-icon", function() {
    	
      endProcessAnimation();

      if($(this).hasClass("deg0")) {
        $(".about-process-text").find(".hi").text("sooo");
      }
      else if($(this).hasClass("deg60")) {
        $(".about-process-text").find(".hi").text("strong");
      }
      else if($(this).hasClass("deg120")) {
        $(".about-process-text").find(".hi").text("doee");
      }

      $(".about-process-icon").not(this).each(function() {
        $(this).animate({"opacity": "0.75"}, "fast");
      });
      fadeArrows("0.75");
      
      $(".about-process-text").animate({"opacity": "1"}, "fast");
      });

    $(".about-circle-container").on("mouseleave", ".about-process-icon", function() {
    	endProcessAnimation();
      $(".about-process-icon").not(this).each(function() {
        $(this).animate({"opacity": "1"}, "fast");
      });
      fadeArrows("1");
    	$(".about-process-text").animate({"opacity": "0"}, "fast");
    });
  });

}

$(document).ready(ready);
$(document).on('page:load', ready);

function endProcessAnimation() {
  $(".about-process-text").stop([true][true]);
}

function fadeArrows(opacity) {
  $(".about-process-arrow").each(function() {
    //  $(this).css({"opacity": opacity});
      $(this).animate({"opacity": opacity}, "fast");
  });
}

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top}, 1000);
}