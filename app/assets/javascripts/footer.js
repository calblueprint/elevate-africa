var ready = function() {
  $(document).ready(function() {
    var elem = $("#footer-blueprint");
    elem.on("mouseenter", function() {
      $({deg: 0}).animate({deg: 360}, {
        duration: 500,
        step: function(now){
          elem.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    });

    elem.on("mouseout", function() {
      $({deg: 0}).animate({deg: -360}, {
        duration: 500,
        step: function(now){
          elem.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    });
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);