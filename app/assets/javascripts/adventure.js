// THIS VARIABLE MUST BE UPDATED
// WHEN THE BACKGROUND IMAGES ARE CHANGED
var background_width = 1314;
var max_shift = 657;

var scene_hash = {
                    0: "egypt",
                    1: "safari",
                    2: "timbuktu",
                    3: "victoria",
                    4: "morroco"
                 };

var scene_index;
var scene_string;

var last_donation;
var total_donations;
var donation_goal;

var penultimate_percent;
var total_percent;

var ready = function() {
  $(document).ready(function() {
    if($(".campaigns-adventure-show").length > 0) {
      last_donation = gon.last_donation;
      total_donations = gon.total_donations;
      donation_goal = gon.donation_goal;

      penultimate_percent = (total_donations - last_donation)/donation_goal;
      total_percent = total_donations/donation_goal;

      // set background and foreground to shifted position
      var background_offset = penultimate_percent % (1 / 6) * 6 * background_width;
      if(background_offset > max_shift) {
        $("#campaigns-adventure-vehicle").css({"left": (background_offset - max_shift) * (5 / 8) + "px"});
        background_offset = max_shift;
      }
      advGroundPosition(Math.floor(background_offset));

      // scene counter
      scene_index = Math.floor(penultimate_percent * 6);
      scene_string = scene_hash[scene_index];

      // initial settings
      $("#campaigns-adventure-white").hide();
      $("#campaigns-adventure-prompt-text").hide();

      advChooseScene();
      advPrimaryAction();
    }
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function advPrimaryAction() {
  setTimeout(function() {
    advHideTeam();
    setTimeout(function() {
      advAnimateVehicle();

      if(Math.floor(penultimate_percent * 6) != Math.floor(total_percent * 6)) {
        var temp_x = $(".campaigns-adventure-foreground").css("background-position-x");
        var ground_x = (-1) * parseInt(temp_x.substring(0, temp_x.length - 2));
        if(ground_x < max_shift) {
          $(".campaigns-adventure-foreground").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift - ground_x) * 7.5, "linear");
          $(".campaigns-adventure-background").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift - ground_x) * 7.5, "linear", function() {
            var temp_movement = ((total_percent - penultimate_percent) * background_width * 6);
            advSecondaryAction(temp_movement - (2 * max_shift - ground_x));
          });
        }
        else {
          var temp_movement = ((total_percent - penultimate_percent) * background_width * 6);
          advSecondaryAction(temp_movement);
        }
      }
      else {
        var current_x = $(".campaigns-adventure-foreground").css("background-position-x");
        var current_background = (-1)*parseInt(current_x.substring(0, current_x.length - 2));
        var temp_movement = (total_percent - penultimate_percent) * background_width * 6;
        if(current_background + temp_movement > max_shift) {
          $(".campaigns-adventure-foreground").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift - current_background) * 7.5, "linear");
          $(".campaigns-adventure-background").animate({"background-position-x": "-" + max_shift + "px"}, (max_shift - current_background) * 7.5, "linear", function() {
            temp_movement -= max_shift-current_background;
            temp_movement *= 5 / 8;
            $("#campaigns-adventure-vehicle").animate({"left": "+=" + temp_movement}, temp_movement*7.5, "linear", function() {
              advShowTeam();
            });
          });
        }
        else {
          $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + temp_movement + "px"}, temp_movement * 7.5, "linear");
          $(".campaigns-adventure-background").animate({"background-position-x": "-=" + temp_movement + "px"}, temp_movement * 7.5, "linear", function() {
            advShowTeam();
          });
        }
      }
    }, 1000);
  }, 2500);
}

function advSecondaryAction(amount) {
  var temp_left = $("#campaigns-adventure-vehicle").css("left");
  var vehicle_left = parseInt(temp_left.substring(0, temp_left.length - 2));
  $("#campaigns-adventure-vehicle").animate({"left": "700px"}, (700 - vehicle_left) * 7.5, "linear");

  setTimeout(function() {
    $(".campaign-info").addClass("campaign-info-white");
    $("#campaigns-adventure-white").fadeIn(1000, function() {
      advUnanimateVehicle();
      scene_index++;
      scene_string = scene_hash[scene_index];

      advChooseScene();
      advGroundPosition(0);

      $("#campaigns-adventure-white").fadeOut(1000, function() {
        $(".campaign-info").removeClass("campaign-info-white");
      });

      setTimeout(function() {
        $("#campaigns-adventure-vehicle").css({"left": "-250px"});

        advAnimateVehicle();
        $("#campaigns-adventure-vehicle").animate({"left": "50px"}, 300 * 7.5, "linear", function() {
          if(amount > max_shift) {
            $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + max_shift + "px"}, max_shift * 7.5, "linear");
            $(".campaigns-adventure-background").animate({"background-position-x": "-=" + max_shift + "px"}, max_shift * 7.5, "linear", function() {
              if(amount > 2 * max_shift)
                advSecondaryAction(amount - 2 * max_shift);
              else {
                var temp_movement = (amount - max_shift) * (5 / 8);
                $("#campaigns-adventure-vehicle").animate({"left": "+=" + temp_movement}, temp_movement * 7.5, "linear", function() {
                  advShowTeam();
                });
              }
            });
          }
          else {
            $(".campaigns-adventure-foreground").animate({"background-position-x": "-=" + amount + "px"}, amount * 7.5, "linear");
            $(".campaigns-adventure-background").animate({"background-position-x": "-=" + amount + "px"}, amount * 7.5, "linear", function() {
              advShowTeam();
            });
          }
        });
      }, 1250);
    });
  }, (600 - vehicle_left) * 7.5);
}

function advChooseScene() {
  $(".campaigns-adventure-background").attr("id", "ca-" + scene_string + "-background");
  $(".campaigns-adventure-foreground").attr("id", "ca-" + scene_string + "-foreground");

  if(scene_string == "egypt" || scene_string == "victoria") {
    $(".campaigns-adventure-vehicle-body").attr("id", "ca-vehicle-boat");
    $(".campaigns-adventure-wheel").hide();
    $("#campaigns-adventure-shadow").hide();
    $(".campaigns-adventure-team").attr("id", "campaigns-adventure-team-boat");
  }
  else if(scene_string == "safari" || scene_string == "timbuktu") {
    $(".campaigns-adventure-vehicle-body").attr("id", "ca-vehicle-jeep");
    $(".campaigns-adventure-wheel").show();
    $("#campaigns-adventure-shadow").hide();
    $(".campaigns-adventure-team").attr("id", "campaigns-adventure-team-jeep");
  }
  else if(scene_string == "morroco") {
    $(".campaigns-adventure-vehicle-body").attr("id", "ca-vehicle-balloon");
    $(".campaigns-adventure-wheel").hide();
    $("#campaigns-adventure-shadow").show();
    $(".campaigns-adventure-team").attr("id", "campaigns-adventure-team-balloon");
  }
}

function advGroundPosition(position) {
  $(".campaigns-adventure-foreground").css({"background-position-x": "-" + position + "px"});
  $(".campaigns-adventure-background").css({"background-position-x": "-" + position + "px"});
}

function advAnimateVehicle() {
  if(scene_string == "egypt" || scene_string == "victoria")
    $(".campaigns-adventure-vehicle-body").addClass("ca-animate-boat");
  else if(scene_string == "safari" || scene_string == "timbuktu")
    $(".campaigns-adventure-wheel").addClass("ca-animate-jeep");
  else if(scene_string == "morroco")
  {
    $(".campaigns-adventure-vehicle-body").addClass("ca-animate-balloon");
    $("#campaigns-adventure-shadow").addClass("ca-animate-shadow");
  }
}

function advUnanimateVehicle() {
  if(scene_string == "egypt" || scene_string == "victoria")
    $(".campaigns-adventure-vehicle-body").removeClass("ca-animate-boat");
  else if(scene_string == "safari" || scene_string == "timbuktu")
    $(".campaigns-adventure-wheel").removeClass("ca-animate-jeep");
  else if(scene_string == "morroco")
  {
    $(".campaigns-adventure-vehicle-body").removeClass("ca-animate-balloon");
    $("#campaigns-adventure-shadow").removeClass("ca-animate-shadow");
  }}

function advHideTeam() {
  // css 1 second duration
  $(".campaigns-adventure-team").addClass("campaigns-adventure-team-hide");
}

function advShowTeam() {
  // css 1 second duration
  advUnanimateVehicle();


  $(".campaigns-adventure-prompt-container").attr("id", "cap-container-big");
  $(".campaigns-adventure-prompt-triangle").attr("id", "cap-triangle-big");

  var vehicle_left = $("#campaigns-adventure-vehicle").css("left");
  vehicle_left = vehicle_left.substring(0, vehicle_left.length - 2);

  if(vehicle_left <= 50)
    $(".campaigns-adventure-prompt-rectangle").attr("id", "cap-rectangle-left");
  else if(vehicle_left >= 475)
    $(".campaigns-adventure-prompt-rectangle").attr("id", "cap-rectangle-right");
  else
    $(".campaigns-adventure-prompt-rectangle").attr("id", "cap-rectangle-big");

  $("#campaigns-adventure-prompt-text").show();
  $(".campaigns-adventure-team").addClass("campaigns-adventure-team-show");
  $(".campaigns-adventure-team").removeClass("campaigns-adventure-team-hide");

  setTimeout(function() {
    $(".campaigns-adventure-team").removeClass("campaigns-adventure-team-show");
  }, 1000);
}
