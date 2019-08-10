$( document ).ready(function() {
    // modals
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });
    // wow effects
    new WOW().init();
    // anchors
    $(".nav-bar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});