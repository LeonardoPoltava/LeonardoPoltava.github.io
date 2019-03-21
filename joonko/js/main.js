$(document).ready(function () {
    // $('.show-menu').click(function () {
    //    var el = $(this).parents('.header-inner').find('.header__right');
    //    if(el.css('right') == '-290px') {
    //        el.animate({
    //            right: "0"
    //        }, 1000);
    //    }
    //    else {
    //        el.animate({
    //            right: "-290px"
    //        }, 1000);
    //    }
    // });
    if($(window).width() < 767) {
        $('.clients__slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            swipeToSlide: true
        });
    }
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

