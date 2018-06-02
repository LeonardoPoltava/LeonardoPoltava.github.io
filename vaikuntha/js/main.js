$(document).ready(function () {
    $('.show-menu').click(function (e){
        e.preventDefault();
        if($(this).parents('.pull-right').find('.header-nav').css('display') == 'none') {
            $(this).parents('.pull-right').find('.header-nav').slideDown();
            $(this).addClass('active');
        }
        else {
            $(this).parents('.pull-right').find('.header-nav').slideUp();
            $(this).removeClass('active');
        }
    });
    $('.main-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      autoplay: true,
      pauseOnFocus: false,
      adaptiveHeight: true
    });
});