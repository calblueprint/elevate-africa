var scene_hash = {
                    0: "egypt",
                    1: "safari"
                 };

var last_donation;
var total_donations;
var donation_goal;
var penultimate_total;
var pen_percent;
var total_percent;

var ready = function() {
  $(document).ready(function() {

    last_donation = $("#campaign-last-donation").data("last");
    total_donations = $("#campaign-total-donations").data("total");
    donation_goal = $("#campaign-donation-goal").data("goal");

    penultimate_total = total_donations - last_donation;
    pen_percent = penultimate_total/donation_goal;
    total_percent = total_donations/donation_goal;

    // set background and foreground to shifted position
    $(".campaigns-adventure-foreground").css({"background-position-x": "-" + penultimate_total + "px"});
    $(".campaigns-adventure-background").css({"background-position-x": "-" + penultimate_total + "px"});

    // which: "egypt" or "safari"
    which = scene_hash[Math.floor(pen_percent * 6)];
    console.log(which);

    // initial settings
    $("#campaigns-adventure-white").hide();
    $("#campaigns-adventure-prompt-text").hide();

    advChooseScene(which);

    advPrimaryAction(which, last_donation);

    // adventure controller
    $(".campaigns-adventure-foreground").click(function() {
      advSecondaryAction(which);
    });
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function advPrimaryAction(which) {
  setTimeout(function() {
    advHideTeam();
    setTimeout(function() {
      if(total_percent > 1/6) {
        advAnimateVehicle(which);
        $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + 800 + "px"}, 800*10);
        $(".campaigns-adventure-background").animate({"background-position-x": "-=" + 800 + "px"}, 800*10, function() {
          advUnanimateVehicle(which);
          setTimeout(function() {
            advSecondaryAction(which);
          }, 500);
        });
      }
      else {
        advAnimateVehicle(which);
        $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + last_donation + "px"}, last_donation*10);
        $(".campaigns-adventure-background").animate({"background-position-x": "-=" + last_donation + "px"}, last_donation*10, function() {
          advUnanimateVehicle(which);
          advShowTeam();
        });
      }
    }, 1000);
  }, 2500);
}

function advSecondaryAction(which) {
  advAnimateVehicle(which);
  $("#campaigns-adventure-vehicle").animate({"left": "+=700px"}, 4500);

  setTimeout(function() {
    advUnanimateVehicle(which);
    $(".campaign-info").addClass("campaign-info-white");
    $("#campaigns-adventure-white").fadeIn(1000, function() {
      which = "safari";
      advChooseScene(which);
      $("#campaigns-adventure-white").fadeOut(1000, function() {
        $(".campaign-info").removeClass("campaign-info-white");
      });

      setTimeout(function() {
        $("#campaigns-adventure-vehicle").css({"left": "-250px"});

        which = "safari";
        advAnimateVehicle(which);
        $("#campaigns-adventure-vehicle").animate({"left": "50px"}, 3000, function() {
          advUnanimateVehicle(which);
          advShowTeam();
        });
      }, 1500);
    });
  }, 3500);
}

function advChooseScene(which) {
  $(".campaigns-adventure-background").attr("id", "ca-" + which + "-background");
  $(".campaigns-adventure-foreground").attr("id", "ca-" + which + "-foreground");

  if(which == "egypt") {
    $(".campaigns-adventure-vehicle-body").attr("id", "ca-vehicle-boat");
    $(".campaigns-adventure-wheel").hide();
  }
  else if(which == "safari") {
    $(".campaigns-adventure-vehicle-body").attr("id", "ca-vehicle-jeep");
    $(".campaigns-adventure-wheel").show();
  }
}

function advAnimateVehicle(which) {
  if(which == "egypt")
    $(".campaigns-adventure-vehicle-body").addClass("ca-animate-boat");
  else if(which == "safari")
    $(".campaigns-adventure-wheel").addClass("ca-animate-jeep");
}

function advUnanimateVehicle(which) {
  if(which == "egypt")
    $(".campaigns-adventure-vehicle-body").removeClass("ca-animate-boat");
  else if(which == "safari")
    $(".campaigns-adventure-wheel").removeClass("ca-animate-jeep");
}

function advHideTeam() {
  // css 1 second duration
  $("#campaigns-adventure-team").addClass("campaigns-adventure-team-hide");
}

function advShowTeam() {
  // css 1 second duration
  $("#campaigns-adventure-prompt-text").show();
  $(".campaigns-adventure-prompt-container").addClass("campaigns-adventure-prompt-container-big");
  $(".campaigns-adventure-prompt-rectangle").addClass("campaigns-adventure-prompt-rectangle-big");
  $(".campaigns-adventure-prompt-triangle").addClass("campaigns-adventure-prompt-triangle-big");

  $("#campaigns-adventure-team").addClass("campaigns-adventure-team-show");
  $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-hide");

  setTimeout(function() {
    $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-show");
  }, 1000);
}
