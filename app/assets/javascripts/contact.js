var ready_contact = function() {
    if ($("#contact-text").length > 0) {
        $(document).ready(function() {
            window.sr = new scrollReveal();
        });
    }
}    

$(document).on('page:load', ready_contact);