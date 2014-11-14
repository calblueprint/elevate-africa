var ready_campaign = function() {
  if ($("#campaign-banner").length > 0) {
      $(document).ready(function() {
          window.sr = new scrollReveal();
      });
  }
}

$(document).on('page:load', ready_campaign);

var ready = function() {
  $(document).ready(function() {
    var tab_open = 0;
    var tab_hash = {0: "#campaigns-create-tab-one", 1: "#campaigns-create-tab-two", 2: "#campaigns-create-tab-three"};
    var tab_two = false;

    // field select
    $(".campaigns-create-field").click(function() {
      if(!$(this).hasClass("campaigns-create-field-selected")) {
        $(this).find("input").focus();
      }
    });

    $(".campaigns-create-field").focusin(function() {
      $(this).addClass("campaigns-create-field-selected");
      $(this).removeClass("campaigns-create-field-incorrect");
    });

    $(".campaigns-create-field").not(".campaigns-create-text-area").focusout(function() {
      var field = $(this).find("input");
      if($.trim(field.val()).length == 0) {
        field.val("");
        $(this).addClass("campaigns-create-field-incorrect");
      }
      else
        $(this).removeClass("campaigns-create-field-incorrect");
      $(this).removeClass("campaigns-create-field-selected");
    });

    $(".campaigns-create-text-area").focusout(function() {
      var area = $(this).find("textarea");
      if($.trim(area.val()).length == 0) {
        area.val("");
        $(this).addClass("campaigns-create-field-incorrect");
      }
      else
        $(this).removeClass("campaigns-create-field-incorrect");
      $(this).removeClass("campaigns-create-field-selected");
    });

    // field change
    $("#campaign_goal").on("change", function() {
      var param = $("#campaign_goal").val().replace(/\D/g, '');
      var count = 0;
      for(i = param.length-1; i >= 0; i--) {
        if(count < 3)
          count++;
        else {
          count = 1;
          param = param.substring(0,i+1) + "," + param.substring(i+1);
        }
      }
      $("#campaign_goal").val(param);
    });

    $("#campaign_duration").on("change", function () {
      var param = $("#campaign_duration").val().replace(/\D/g, '');
      $("#campaign_duration").val(param);
    });

    // description change
    $("#campaigns-create-example-one").click(function() {
      campaignsChangeDescription('one', 'two', 'custom')
    });

    $("#campaigns-create-example-two").click(function() {
      campaignsChangeDescription('two', 'one', 'custom')
    });

    $("#campaigns-create-example-custom").click(function() {
      campaignsChangeDescription('custom', 'one', 'two')
    });

    $("#campaign_description").on("change keyup paste", function() {
      if(!$("#campaigns-create-example-custom").hasClass("campaigns-create-example-colored")) {
      $("#campaigns-create-example-custom").addClass("campaigns-create-example-colored");
      $("#campaigns-create-example-one").removeClass("campaigns-create-example-colored");
      $("#campaigns-create-example-two").removeClass("campaigns-create-example-colored");
      }
    });

    // picture upload
    $("#campaigns-create-upload").change(function() {
      campaignsChangePreview(this);
    });

    // continue clicks
    $("#campaigns-create-submit-one").on("click", function() {
      $("#campaigns-create-tab-two").click();
    });

    $("#campaigns-create-submit-two").on("click", function() {
      $("#campaigns-create-tab-three").click();
    });

    // tab clicks
    $("#campaigns-create-tab-one").click(function() {
      if(tab_open > 0) {
        campaignsChangeTab(tab_open, $(tab_hash[tab_open]), $(this));
        campaignsCreateFirst();
        tab_open = 0;
        $(this).find(".campaigns-create-tab-number").text("1.");
      }
    });

    $("#campaigns-create-tab-two").click(function() {
      if(!tab_two) {
        campaignsChangeDescription("one", "two", "custom");
        tab_two = true;
      }
      if(tab_open > 1 || tab_open < 1 && campaignsCheckValidityOne()) {
        campaignsChangeTab(tab_open, $(tab_hash[tab_open]), $(this));
        campaignsCreateSecond();
        tab_open = 1;
        $(this).find(".campaigns-create-tab-number").text("2.");
      }
    });

    $("#campaigns-create-tab-three").click(function() {
      if(tab_open < 2 && campaignsCheckValidityOne() && campaignsCheckValidityTwo()) {
        campaignsChangeTab(tab_open, $(tab_hash[tab_open]), $(this));
        campaignsCreateThird();
        tab_open = 2;
        $(this).find(".campaigns-create-tab-number").text("3.");
      }
    });

    // form submit
    $(".new_campaign").submit(function(event) {
      if($("#campaigns-create-upload").val() == "" && $("#campaigns-create-hidden-picture").val() == "") {
        event.preventDefault();
        $("#campaigns-create-missing-picture-container").fadeIn();
        $("#campaigns-create-white-fade").fadeIn();
      }
    });

    // missing picture buttons
    $("#campaigns-create-missing-button-upload").click(function() {
      campaignsUploadPicture();
      $(this).parent().fadeOut();
    });

    $("#campaigns-create-missing-button-random").click(function() {
      var options = ["one", "two", "three", "four"];
      campaignsChoosePicture("campaigns-create-picture-option-" + options[Math.floor(Math.random() * 4)]);
      $(this).parent().fadeOut();
    });

    // pop up closes
    $("#campaigns-create-sub-header-close-options").click(function() {
      $("#campaigns-create-picture-options-container").fadeOut();
      $("#campaigns-create-white-fade").fadeOut();
    });

    $("#campaigns-create-sub-header-close-missing").click(function() {
      $("#campaigns-create-missing-picture-container").fadeOut();
      $("#campaigns-create-white-fade").fadeOut();
    });

    // page load calls
    $(".campaigns-create-second").hide();
    $(".campaigns-create-third").hide();
    $("#campaigns-create-picture-options-container").hide();
    $("#campaigns-create-missing-picture-container").hide();
    $("#campaigns-create-white-fade").hide();
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function campaignsChangeTab(num, tab_open, tab_clicked) {
  tab_open.find(".campaigns-create-tab-number").text(num + 1);
  tab_open.removeClass("campaigns-create-tab-colored");
  tab_clicked.addClass("campaigns-create-tab-colored");
  tab_clicked.animate({width: "75%"});
  tab_open.animate({width: "12.25%"});
}

function campaignsCheckValidityOne() {
  var bool = true;

  var field = $("#campaigns-create-field-name")
  var str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    field.addClass("campaigns-create-field-incorrect");
    bool = false;
  }

  field = $("#campaigns-create-field-goal")
  str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    field.addClass("campaigns-create-field-incorrect");
    bool = false;
  }

  field = $("#campaigns-create-field-duration")
  str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    field.addClass("campaigns-create-field-incorrect");
    bool = false;
  }

  return bool;
}

function campaignsCheckValidityTwo() {
  var field = $("#campaigns-create-field-description")
  var str = field.find("textarea");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    field.addClass("campaigns-create-field-incorrect");
    return false;
  }
  return true;
}

function campaignsCreateFirst() {
  $(".campaigns-create-second").hide();
  $(".campaigns-create-third").hide();
  $("#campaigns-create-title").text("Create a Campaign")
  $(".campaigns-create-first").show();
}

function campaignsCreateSecond() {
  $(".campaigns-create-first").hide();
  $(".campaigns-create-third").hide();
  $("#campaigns-create-title").text("Write a Mission")
  $(".campaigns-create-second").show();
}

function campaignsCreateThird() {
  $(".campaigns-create-second").hide();
  $(".campaigns-create-first").hide();
  $("#campaigns-create-title").text("Choose a Photo")
  $(".campaigns-create-third").show();
}

function campaignsChangeDescription(a, b, c) {
  var selected = $("#campaigns-create-example-" + a);
  selected.addClass("campaigns-create-example-colored");
  $("#campaigns-create-example-" + b).removeClass("campaigns-create-example-colored");
  $("#campaigns-create-example-" + c).removeClass("campaigns-create-example-colored");

  $("#campaign_description").val(selected.data("content"));
}

function campaignsUploadPicture() {
  $("#campaigns-create-missing-picture-container").hide();
  $("#campaigns-create-picture-options-container").hide();
  $("#campaigns-create-white-fade").fadeOut();
  $("#campaigns-create-upload").click();
}

function campaignsChoosePicture(param) {
  var selected = $("#" + param);
  $("#campaigns-create-hidden-picture").val(selected.data("url"));
  $("#campaigns-create-preview").attr("src", "/assets/create-pic-" + param.split("-")[param.split("-").length-1] + ".png");
  $("#campaigns-create-picture-options-container").fadeOut();
  $("#campaigns-create-white-fade").fadeOut();
}

function campaignsChooseOptions() {
  $("#campaigns-create-missing-picture-container").hide();
  $("#campaigns-create-picture-options-container").fadeIn();
  $("#campaigns-create-white-fade").fadeIn();
}

function campaignsChangePreview(param) {
  if(param.files && param.files[0]) {
    var read = new FileReader();
    read.onload = function(e) {
      $("#campaigns-create-preview").attr("src", e.target.result);
    }
    read.readAsDataURL(param.files[0]);
  }

  $("#campaigns-create-hidden-picture").val("");
}
