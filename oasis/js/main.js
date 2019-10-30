$(document).ready(function () {
    // service slider
    $('.service-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      autoplay: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });
    if($(window).width() > 767) {
      if($('.service-slider').length) {
        let serviceOffset = $('.service-slider').offset().left + 24;
        $('.service-slider').css('margin-right', -serviceOffset - 20);
        $('.service-slider .slick-list').css('padding-right', serviceOffset);
      }
    }
    // feedback fields
    $('.feedback-input, .feedback-area').focus(function() {
      $(this).parent('div').addClass('active');
    });
    $('.feedback-input, .feedback-area').focusout(function() {
      if($(this).val() == "") {
        $(this).parent('div').removeClass('active');
      }
    });
});

