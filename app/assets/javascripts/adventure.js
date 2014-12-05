// THIS VARIABLE MUST BE UPDATED
// WHEN THE BACKGROUND IMAGES ARE CHANGED
var background_width = 1314;
var max_shift = 657;

var scene_hash = {
                    0: "egypt",
                    1: "safari",
                    2: "timbuktu",
                    3: "victoria"
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

    last_donation = 50;
    total_donations = 210;

    penultimate_total = total_donations - last_donation;
    pen_percent = penultimate_total/donation_goal;
    total_percent = total_donations/donation_goal;

    // set background and foreground to shifted position
    var background_offset = pen_percent % (1/6) * 6 * background_width;
    if(background_offset > max_shift) {
      $("#campaigns-adventure-vehicle").css({"left": (background_offset - max_shift) * 5/7 + "px"});
      background_offset = max_shift;
    }
    $(".campaigns-adventure-foreground").css({"background-position-x": "-" + Math.floor(background_offset) + "px"});
    $(".campaigns-adventure-background").css({"background-position-x": "-" + Math.floor(background_offset) + "px"});

    // which: "egypt" or "safari"
    which = scene_hash[Math.floor(pen_percent * 6)];
    console.log(which);

    // initial settings
    $("#campaigns-adventure-white").hide();
    $("#campaigns-adventure-prompt-text").hide();

    advChooseScene(which);

    advPrimaryAction(which);
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function advPrimaryAction(which) {
  setTimeout(function() {
    advHideTeam();
    setTimeout(function() {
      if(Math.floor(pen_percent*6) != Math.floor(total_percent*6)) {
        advAnimateVehicle(which);
        var current_x = $(".campaigns-adventure-foreground").css("background-position-x");
        var current_position = (-1)*parseInt(current_x.substring(0, current_x.length-2));
        console.log(current_position);
        $(".campaigns-adventure-foreground").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift-current_position)*7.5, "linear");
        $(".campaigns-adventure-background").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift-current_position)*7.5, "linear", function() {
          advSecondaryAction(which);
        });
      }
      else {
        // this needs to be fixed!
        advAnimateVehicle(which);
        var temp_movement = (total_percent-pen_percent)*background_width*6;
        var current_x = $(".campaigns-adventure-foreground").css("background-position-x");
        var current_background = (-1)*parseInt(current_x.substring(0, current_x.length-2));
        if(current_background+temp_movement > max_shift) {
          $(".campaigns-adventure-foreground").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift-current_background)*7.5, "linear");
          $(".campaigns-adventure-background").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift-current_background)*7.5, "linear", function() {
            temp_movement -= max_shift-current_background;
            temp_movement *= 5/7;
            $("#campaigns-adventure-vehicle").animate({"left": "+=" + temp_movement}, temp_movement*7.5, "linear", function() {
              advUnanimateVehicle(which);
              advShowTeam();
            });
          });
        }
        else {
          $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + temp_movement + "px"}, temp_movement*7.5, "linear");
          $(".campaigns-adventure-background").animate({"background-position-x": "-=" + temp_movement + "px"}, temp_movement*7.5, "linear", function() {
            advUnanimateVehicle(which);
            advShowTeam();
          });
        }
      }
    }, 1000);
  }, 2500);
}

function advSecondaryAction(which) {
  var current_left = $("#campaigns-adventure-vehicle").css("left");
  var current_position = current_left.substring(0, current_left.length-2);
  $("#campaigns-adventure-vehicle").animate({"left": "700px"}, (700-current_position)*7.5, "linear");

  setTimeout(function() {
    $(".campaign-info").addClass("campaign-info-white");
    $("#campaigns-adventure-white").fadeIn(1000, function() {
      advUnanimateVehicle(which);
      which = "safari";

      advChooseScene(which);
      $(".campaigns-adventure-foreground").css({"background-position-x": "0px"});
      $(".campaigns-adventure-background").css({"background-position-x": "0px"});

      $("#campaigns-adventure-white").fadeOut(1000, function() {
        $(".campaign-info").removeClass("campaign-info-white");
      });

      setTimeout(function() {
        $("#campaigns-adventure-vehicle").css({"left": "-250px"});

        which = "safari";
        advAnimateVehicle(which);
        $("#campaigns-adventure-vehicle").animate({"left": "50px"}, 2250, "linear", function() {
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
