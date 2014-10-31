var ready = function() {
  $(document).ready(function() {

    if($(".about-page").length > 0) {
      var opacity = 0.75;
      var circle = $(".about-process-circle");
      var content = $(".about-process-text");

      var first_icon = $("#first_icon");
      initialSettings(first_icon, content, opacity);

      var previous = first_icon;

      circle.on("mouseenter", ".about-process-icon", function() {
        var selected = $(this);
        if(!selected.is(previous)) {
          endProcessAnimation();
          fadeGirls();
          content.animate({opacity: 0}, function() {
            changeCenterText(selected, content);
            content.animate({opacity: 1});
          });
          selected.animate({width: "7.5em", height: "7.5em", margin: "-3.75em", opacity: 1});
          previous.animate({width: "7em", height: "7em", margin: "-3.5em", opacity: opacity});
          previous = selected;
        }
      });
    }
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function endProcessAnimation() {
  $(".about-process-text").stop(true, true);
  $(".about-process-icon").stop(true, true);
  $(".about-process-arrow").stop(true, true);
  $(".about-process-girls").stop(true, true);
}

function initialSettings(first_icon, content, opacity) {
  $(".about-process-icon").not(first_icon).each(function() {
    $(this).css({"opacity": opacity});
  });
  first_icon.css({width: "7.5em", height: "7.5em", margin: "-3.75em"});
  changeCenterText(first_icon, content);
}

function changeCenterText(selected, content) {
  var title = content.find(".about-process-text-title");
  var paragraph = content.find(".about-process-text-paragraph");

  if(selected.hasClass("icon-one")) { title.text("Inspiration"); }
  else if(selected.hasClass("icon-two")) { title.text("Ideation"); }
  else if(selected.hasClass("icon-three")) { title.text("Training"); }
  else if(selected.hasClass("icon-four")) { title.text("Funding"); }
  else if(selected.hasClass("icon-five")) { title.text("Mentoring"); }
  else if(selected.hasClass("icon-six")) { title.text("Technology"); }
  else if(selected.hasClass("icon-seven")) { title.text("Impact"); }
  else { title.text("Re-investing"); }
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
  $(".about-process-girls").animate({"opacity": 0}, function() {
    $('.about-process-girl-left').attr('src', '/assets/daughter.png');
    $('.about-process-girl-right').attr('src', '/assets/daughter.png');
    $(".about-process-girls").animate({"opacity": 1});
  });
}
