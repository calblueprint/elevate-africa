var ready_campaign = function() {
    if ($("#campaign-banner").length > 0) {
        $(document).ready(function() {
            window.sr = new scrollReveal();
        });
    }
}    

$(document).on('page:load', ready_campaign);