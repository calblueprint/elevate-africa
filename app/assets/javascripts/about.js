var ready = function() {
  $(document).ready(function() {
    var circle = $(".about-process-circle");
    var content = $(".about-process-text");

    var first_icon = $("#first_icon");
    initialSettings(first_icon, content, 0.75);

    circle.on("mouseenter", ".about-process-icon", function() {
      var selected = $(this);
      endProcessAnimation();
      fadeOthers(selected, 0.75);
      fadeGirls();
      content.animate({opacity: 0}, function() {
        changeCenterText(selected, content);
        content.animate({opacity: 1});
      });
      selected.animate({width: "7.5em", height: "7.5em", margin: "-3.75em"});
    });

    // circle.on("mouseleave", ".about-process-icon", function() {
    //   var selected = $(this);
    //   endProcessAnimation();
    //   fadeOthers(selected, 1.0);
    //   selected.animate({width: "7em", height: "7em", margin: "-3.5em"});
    // });
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function endProcessAnimation() {
  $(".about-process-text").stop(true, true);
  $(".about-process-icon").stop(true, true);
  $(".about-process-arrow").stop(true, true);
  $(".about-process-girl-left").stop(true, true);
  $(".about-process-girl-right").stop(true, true);
}

function initialSettings(first_icon, content, opacity) {
  $(".about-process-icon").not(first_icon).each(function() {
        $(this).css({"opacity": opacity});
      });
  $(".about-process-arrow").each(function() {
      $(this).css({"opacity": opacity});
  });
  first_icon.css({width: "7.5em", height: "7.5em", margin: "-3.75em"});
  changeCenterText(first_icon, content);
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
        $(this).animate({"opacity": opacity});
      });
  $(".about-process-arrow").each(function() {
      $(this).animate({"opacity": opacity});
  });
}

function fadeGirls() {
  $(".about-process-girl-left").animate({"opacity": 0});
  $(".about-process-girl-right").animate({"opacity": 0}, function() {
    $(".about-process-girl-left").animate({"opacity": 1});
    $(".about-process-girl-right").animate({"opacity": 1});
  });
}

function smoothScroll(section) {
  $('html, body').animate({scrollTop: $('#' + section).offset().top + 18}, 1000);
}

// var ready = function() {
//   $(document).ready(function() {
//     var circle = $(".about-process-circle")
//     var content = $(".about-process-text")
//     circle.on("mouseenter", ".about-process-icon", function() {
//       var selected = $(this);
//       endProcessAnimation();
//       changeCenterText(selected, content);
//       fadeOthers(selected, 0.75);
//       content.animate({opacity: 1}, "fast");
//       $(".about-process-girl-left").animate({"opacity": 1}, "fast");
//       $(".about-process-girl-right").animate({"opacity": 1}, "fast");
//       selected.animate({width: "7.5em", height: "7.5em", margin: "-3.75em"}, "fast");
//     });

//     circle.on("mouseleave", ".about-process-icon", function() {
//     	var selected = $(this);
//       endProcessAnimation();
//       fadeOthers(selected, 1.0);
//     	content.animate({"opacity": 0}, "fast");
//       $(".about-process-girl-left").animate({"opacity": 0}, "fast");
//       $(".about-process-girl-right").animate({"opacity": 0}, "fast");

//       selected.animate({width: "7em", height: "7em", margin: "-3.5em"}, "fast");
//     });
//   });
// }

// $(document).ready(ready);
// $(document).on('page:load', ready);

// function endProcessAnimation() {
//   $(".about-process-text").stop(true, true);
//   $(".about-process-icon").stop(true, true);
//   $(".about-process-arrow").stop(true, true);
//   $(".about-process-girl-left").stop(true, true);
//   $(".about-process-girl-right").stop(true, true);
// }

// function changeCenterText(selected, content) {
//   var title = content.find(".about-process-text-title");
//   var paragraph = content.find(".about-process-text-paragraph");

//   if(selected.hasClass("deg0")) { title.text("strong"); }
//   else if(selected.hasClass("deg60")) { title.text("doee"); }
//   else if(selected.hasClass("deg120")) { title.text("super"); }
//   else if(selected.hasClass("deg180")) { title.text("man"); }
//   else if(selected.hasClass("deg240")) { title.text("doee"); }
//   else { title.text("sooo"); }
// }

// function fadeOthers(selected, opacity) {
//   $(".about-process-icon").not(selected).each(function() {
//         $(this).animate({"opacity": opacity}, "fast");
//       });
//   $(".about-process-arrow").each(function() {
//       $(this).animate({"opacity": opacity}, "fast");
//   });
// }

// function smoothScroll(section) {
//   $('html, body').animate({scrollTop: $('#' + section).offset().top + 18}, 1000);
// }

