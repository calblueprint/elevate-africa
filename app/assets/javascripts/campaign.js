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
    $(".campaigns-create-field").click(function() {
      if(!$(this).hasClass("campaigns-create-field-selected")) {
        $(this).find("input").focus();
      }
    });

    $(".campaigns-create-field").focusin(function() {
      $(this).addClass("campaigns-create-field-selected");
      $(this).removeClass("campaigns-create-field-incorrect");
    });

    $(".campaigns-create-field").focusout(function() {
      var field = $(this).find("input");
      if($.trim(field.val()).length == 0) {
        field.val("");
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
      if(campaignsCheckValidityOne())
        campaignsCreateSecond();
    });

    $("#campaigns-create-submit-two").on("click", function() {
      campaignsCreateThird();
    });

    $("#campaign_goal").on("change", function () {
      var param = $("#campaign_goal").val();
      param = param.replace(/\D/g, '');
      var count = 0;
      for(i = param.length-1; i >= 0; i--) {
        if(count < 3)
          count++;
        else {
          count = 0;
          console.log(param.substring(0,i+1));
          param = param.substring(0,i+1) + "," + param.substring(i+1);
        }
      }
      // $("#campaign_goal").val(param);
    });

    $("#campaign_deadline").on("keyup", function() {
      var change = (($(this).val().length) + 1) * 10;
      $(this).css("width", change);
    });

    $(".campaigns-create-second").hide();
    $(".campaigns-create-third").hide();
    campaignsChangeDescription("one");
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function campaignsCheckValidityOne() {
  var bool = true;

  var field = $("#campaigns-create-field-name")
  var str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    campaignsIncorrectField(field);
    bool = false;
  }

  field = $("#campaigns-create-field-goal")
  var str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    campaignsIncorrectField(field);
    bool = false;
  }

  field = $("#campaigns-create-field-deadline")
  var str = field.find("input");
  if(str.length == 0 || $.trim(str.val()).length == 0) {
    campaignsIncorrectField(field);
    bool = false;
  }

  return bool
}

function campaignsCreateSecond() {
  $(".campaigns-create-first").hide();
  $("#campaigns-create-title").text("Write a Mission Statement")
  $(".campaigns-create-second").show();
}

function campaignsCreateThird() {
  $(".campaigns-create-second").hide();
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
}

function campaignsChoosePicture() {
  $("#campaigns-create-upload").click();
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

function campaignsAdjustField(textbox) {
  console.log("called");
  if (!textbox.startW) { textbox.startW = textbox.offsetWidth; }

  var style = textbox.wit;

  //Force complete recalculation of width
  //in case characters are deleted and not added:
  style.width = 0;

  //http://stackoverflow.com/a/9312727/1869660
  var desiredW = textbox.scrollWidth;
  //Optional padding to reduce "jerkyness" when typing:
  desiredW += textbox.offsetHeight;

  style.width = Math.max(desiredW, textbox.startW) + 'px';
}
