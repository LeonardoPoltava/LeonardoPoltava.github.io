$(document).ready(function () {
    $('.clients__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    $('.form__input, .form__area').focus(function() {
        $(this).parent('div').addClass('active');
    });
    $( ".form__select" ).change(function() {
        $(this).parent('div').addClass('active');
    })
    $('.form__input, .form__area').focusout(function() {
        if($(this).val() == "") {
            $(this).parent('div').removeClass('active');
        }
    });
    var footHeight = $('footer').outerHeight();
    $('.wrapper').css('padding-bottom', footHeight);
    $(window).resize(function() {
        var footHeight = $('footer').outerHeight();
        $('.wrapper').css('padding-bottom', footHeight);
    });
});

