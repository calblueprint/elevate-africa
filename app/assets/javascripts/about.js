var ready = function() {
  $(document).ready(function() {
    var circle = $(".about-process-circle")
    var content = $(".about-process-text")
    circle.on("mouseenter", ".about-process-icon", function() {
      var selected = $(this);
      endProcessAnimation();
      changeCenterText(selected, content);
      fadeOthers(selected, 0.75);
      content.animate({"opacity": 1}, "fast");
    });

    circle.on("mouseleave", ".about-process-icon", function() {
    	var selected = $(this);
      endProcessAnimation();
      fadeOthers(selected, 1.0);
    	content.animate({"opacity": 0}, "fast");
    });
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function endProcessAnimation() {
  $(".about-process-text").stop([true][true]);
  $(".about-process-icon").stop([true][true]);
  $(".about-process-arrow").stop([true][true]);
}

function changeCenterText(selected, content) {
  var title = content.find(".about-process-text-title");
  var paragraph = content.find(".about-process-text-paragraph");

  if(selected.hasClass("deg0")) { title.text("strong"); }
  else if(selected.hasClass("deg60")) { title.text("doee"); }
  else if(selected.hasClass("deg120")) { title.text("super"); }
  else if(selected.hasClass("deg180")) { title.text("man"); }
  else if(selected.hasClass("deg240")) { title.text("doee"); }
  else { title.text("sooo"); }
}

function fadeOthers(selected, opacity) {
  $(".about-process-icon").not(selected).each(function() {
        $(this).animate({"opacity": opacity}, "fast");
      });
  $(".about-process-arrow").each(function() {
      $(this).animate({"opacity": opacity}, "fast");
  });
}

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top + 18}, 1000);
}

