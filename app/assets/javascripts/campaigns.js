var ready = function() {
  $(document).ready(function() {
    $(".campaigns-create-second").hide();
  });
}

$(document).ready(ready);
$(document).on('page:load', ready);

function campaignsCreateSecond() {
  $(".campaigns-create-first").hide();
  $(".campaigns-create-second").show();
}
