$(document).ready(function(){

    $(window).on('popstate', function() {
        $('.modal').modal('hide');
        $( ".modal-backdrop" ).remove();
        $( ".in" ).remove();
    });

    // window.setTimeout(function() {
    //     $(".alert").fadeTo(500, 0).slideUp(500, function(){
    //         $(this).remove(); 
    //     });
    // }, 4000);

});

