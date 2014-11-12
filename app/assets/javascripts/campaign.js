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

    $("#campaign_description").on("change keyup paste", function() {
      if(!$("#campaigns-create-example-custom").hasClass("campaigns-create-example-colored"))
        campaignsChangeDescription("partial");
    });

    $("#campaigns-create-upload").change(function() {
      campaignsChangePreview(this);
    });

    $("#campaigns-create-submit-one").on("click", function() {
      $("#campaigns-create-tab-two").click();
    });

    $("#campaigns-create-submit-two").on("click", function() {
      $("#campaigns-create-tab-three").click();
    });

    $("#campaigns-create-tab-one").click(function() {
      if(tab_open > 0) {
        campaignsChangeTab(tab_open, $(tab_hash[tab_open]), $(this));
        campaignsCreateFirst();
        tab_open = 0;
        $(this).find(".campaigns-create-tab-number").text("1.");
      }
    });

    $("#campaigns-create-tab-two").click(function() {
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

    $("#campaign_goal").on("change", function () {
      var param = $("#campaign_goal").val();
      param = param.replace(/\D/g, '');
      var count = 0;
      for(i = param.length-1; i >= 0; i--) {
        if(count < 3)
          count++;
        else {
          count = 1;
          console.log(param.substring(0,i+1));
          param = param.substring(0,i+1) + "," + param.substring(i+1);
        }
      }
      $("#campaign_goal").val(param);
    });

    $("#campaign_duration").on("change", function () {
      var param = $("#campaign_duration").val();
      param = param.replace(/\D/g, '');
      param = param + " day(s)"
      $("#campaign_duration").val(param);
    });

    $(".campaigns-create-second").hide();
    $(".campaigns-create-third").hide();
    $(".campaigns-create-picture-options-container").hide();
    campaignsChangeDescription("one");
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

  return bool
}

function campaignsCheckValidityTwo() {
  var bool = true;

  var field = $("#campaigns-create-field-description")
  var str = field.find("textarea");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    field.addClass("campaigns-create-field-incorrect");
    bool = false;
  }

  return bool
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

function campaignsChangeDescription(which, stay) {
  if(which == "one") {
    $("#campaigns-create-example-one").addClass("campaigns-create-example-colored");
    $("#campaigns-create-example-two").removeClass("campaigns-create-example-colored");
    $("#campaigns-create-example-custom").removeClass("campaigns-create-example-colored");
    $("#campaign_description").val("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  }
  else if(which == "two") {
    $("#campaigns-create-example-two").addClass("campaigns-create-example-colored");
    $("#campaigns-create-example-one").removeClass("campaigns-create-example-colored");
    $("#campaigns-create-example-custom").removeClass("campaigns-create-example-colored");
    $("#campaign_description").val("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
  }
  else if(which == "custom") {
    $("#campaigns-create-example-custom").addClass("campaigns-create-example-colored");
    $("#campaigns-create-example-one").removeClass("campaigns-create-example-colored");
    $("#campaigns-create-example-two").removeClass("campaigns-create-example-colored");
    $("#campaign_description").val("\n\n\nDon't drop the rock.");
  }
  else {
    $("#campaigns-create-example-custom").addClass("campaigns-create-example-colored");
    $("#campaigns-create-example-one").removeClass("campaigns-create-example-colored");
    $("#campaigns-create-example-two").removeClass("campaigns-create-example-colored");
  }
  $("#campaigns-create-field-description").removeClass("campaigns-create-field-incorrect");
}

function campaignsUploadPicture() {
  $("#campaigns-create-upload").click();
}

function campaignsChoosePicture(param) {
  if(param == "one")
    $("#campaigns-create-preview").attr("src", "/assets/create-pic-one.png");
  else if(param == "two")
    $("#campaigns-create-preview").attr("src", "/assets/create-pic-two.png");
  else if(param == "three")
    $("#campaigns-create-preview").attr("src", "/assets/create-pic-three.png");
  else if(param == "four")
    $("#campaigns-create-preview").attr("src", "/assets/create-pic-four.png");
  $(".campaigns-create-picture-options-container").fadeOut();
}

function campaignsChooseOptions() {
  $(".campaigns-create-picture-options-container").fadeIn();
}

function campaignsChangePreview(param) {
  if(param.files && param.files[0]) {
    var read = new FileReader();
    read.onload = function(e) {
      $("#campaigns-create-preview").attr("src", e.target.result);
    }
    read.readAsDataURL(param.files[0]);
  }
}
