var ready = function() {
  $(document).ready(function() {
    // // adventure
    $(".campaigns-adventure-foreground").click(function() {
      $("#campaigns-adventure-team").addClass("campaigns-adventure-team-hide");
      setTimeout(function() {
        // $(".campaigns-adventure-vehicle-body").addClass("ca-animate-boat");
        $(".campaigns-adventure-wheel").addClass("ca-animate-jeep");
        $(".campaigns-adventure-foreground").animate({"background-position-x": "-=400px"}, 3000);
        $(".campaigns-adventure-background").animate({"background-position-x": "-=400px"}, 3000);
        setTimeout(function() {
          // $(".campaigns-adventure-vehicle-body").removeClass("ca-animate-boat");
          $(".campaigns-adventure-wheel").removeClass("ca-animate-jeep");
          $("#campaigns-adventure-team").addClass("campaigns-adventure-team-show");
          $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-hide");
        }, 3000);
        setTimeout(function() {
          $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-show");
        }, 4000);
      }, 1000);
    });
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);
