function navReveal() {
  $("#navbar-container").css("top","0px");
}
function navHide() {
  if ($(this).scrollTop() > 120) {
    $("#navbar-container").css("top","-69px");
  }
}
$(window).scroll(function() {
  if ($(this).scrollTop() > 120) {
    $("#navbar-container").css("top","-69px");
  } else {
    $("#navbar-container").css("top","0px");
  }
});