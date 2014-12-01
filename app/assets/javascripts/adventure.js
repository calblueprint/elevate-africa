
var ready = function() {
  $(document).ready(function() {

    var last_donation = $("#campaign-last-donation").data("last");
    var total_donations = $("#campaign-total-donations").data("total");
    var donation_goal = $("#campaign-donation-goal").data("goal");

    // set background and foreground to shifted position
    $(".campaigns-adventure-foreground").css({"background-position-x": "-" + total_donations - last_donation + "px"});
    $(".campaigns-adventure-background").css({"background-position-x": "-" + total_donations - last_donation + "px"});

    // which: "egypt" or "safari"
    which = "egypt";

    // initial settings
    $("#campaigns-adventure-white").hide();

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

function advPrimaryAction(which, last_donation) {
  setTimeout(function() {
    advHideTeam();
    setTimeout(function() {
      advAnimateVehicle(which);
      $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + last_donation + "px"}, last_donation*10);
      $(".campaigns-adventure-background").animate({"background-position-x": "-=" + last_donation + "px"}, last_donation*10, function() {
        advUnanimateVehicle(which);
        advShowTeam();
      });
    }, 1000);
  }, 1000);
}

function advSecondaryAction(which) {
  advAnimateVehicle(which);
  $("#campaigns-adventure-vehicle").animate({"left": "+=600px"}, 4000);

  setTimeout(function() {
    advUnanimateVehicle(which);
    $(".campaign-info").addClass("campaign-info-white");
    $("#campaigns-adventure-white").fadeIn(1000, function() {
      which = "safari";
      advChooseScene(which);
      $("#campaigns-adventure-white").fadeOut(1000, function() {
        $(".campaign-info").removeClass("campaign-info-white");

        $("#campaigns-adventure-vehicle").css({"left": "-350px"});

        which = "safari";
        advAnimateVehicle(which);
        $("#campaigns-adventure-vehicle").animate({"left": "50px"}, 3000, function() {
          advUnanimateVehicle(which);
          advShowTeam();
        });
      });
    });
  }, 3000);
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
  $("#campaigns-adventure-team").addClass("campaigns-adventure-team-show");
  $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-hide");

  setTimeout(function() {
    $("#campaigns-adventure-team").removeClass("campaigns-adventure-team-show");
  }, 1000);
}
