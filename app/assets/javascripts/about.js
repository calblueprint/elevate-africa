var ready = function() {
  $(document).ready(function() {

    if($(".about-page").length > 0) {

      var hash_icons = new Object();
      hash_icons["icon-one"] = 1;
      hash_icons["icon-two"] = 2;
      hash_icons["icon-three"] = 3;
      hash_icons["icon-four"] = 4;
      hash_icons["icon-five"] = 5;
      hash_icons["icon-six"] = 6;
      hash_icons["icon-seven"] = 7;
      hash_icons["icon-eight"] = 8;

      var opacity = 0.75;
      var circle = $(".about-process-circle");
      var content = $(".about-process-text");

      var first_icon = $("#icon-one");
      initialSettings(first_icon, content, opacity);

      var previous = first_icon;
      var previous_figure = first_icon;

      circle.on("mouseenter", ".about-process-icon", function() {
        var selected = $(this);

        if(!selected.is(previous)) {
          endProcessAnimation();
          content.animate({opacity: 0}, function() {
            changeCenterText(selected, content);
            content.animate({opacity: 1});
          });
          selected.animate({width: "7.5em", height: "7.5em", margin: "-3.75em", opacity: 1});
          previous.animate({width: "7em", height: "7em", margin: "-3.5em", opacity: opacity});
          previous = selected;

          if(Math.floor((hash_icons[selected.attr("id")]+1)/2) != Math.floor((hash_icons[previous_figure.attr("id")]+1)/2)) {
            changeFigures(selected);
            previous_figure = selected;
          }
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

  if(selected.attr("id") == "icon-one") { title.text("Inspiration"); }
  else if(selected.attr("id") == "icon-two") { title.text("Ideation"); }
  else if(selected.attr("id") == "icon-three") { title.text("Training"); }
  else if(selected.attr("id") == "icon-four") { title.text("Funding"); }
  else if(selected.attr("id") == "icon-five") { title.text("Mentoring"); }
  else if(selected.attr("id") == "icon-six") { title.text("Technology"); }
  else if(selected.attr("id") == "icon-seven") { title.text("Impact"); }
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

function changeFigures(selected) {
  var figures = $(".about-process-figures");
  var left = $(".about-process-figure-left");
  var right = $(".about-process-figure-right");

  figures.animate({"opacity": 0}, function() {
    if(selected.attr("id") == "icon-one" || selected.attr("id") == "icon-two") {
      left.attr("src", "/assets/mom.png");
      right.attr("src", "/assets/mom.png");
    }
    else if(selected.attr("id") == "icon-three" || selected.attr("id") == "icon-four") {
      left.attr("src", "/assets/daughter.png");
      right.attr("src", "/assets/daughter.png");
    }
    else if(selected.attr("id") == "icon-five" || selected.attr("id") == "icon-six") {
      left.attr("src", "/assets/son.png");
      right.attr("src", "/assets/son.png");
    }
    else {
      left.attr("src", "/assets/daughter.png");
      right.attr("src", "/assets/daughter.png");
    }
    figures.animate({"opacity": 1});
  });
}
