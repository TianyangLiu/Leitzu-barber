$(document).ready(function(){

    $(window).on('popstate', function() {
        $('.modal').modal('hide');
        $( ".modal-backdrop" ).remove();
        $( ".in" ).remove();
    });

});