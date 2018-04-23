$(document).ready(function () {
    $('.scroll-pane').jScrollPane({showArrows: false, autoReinitialise: true});
    $('.career-type').click(function(){
        var el = $(this).parents('.careers-box').find('.careers-up');
        if(el.css('display') == 'none') {
            el.fadeIn();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            el.css("top", (($(window).height() - el.outerHeight()) / 2) + $(window).scrollTop() + "px");
        }
        else {
            el.fadeOut();
        }
    });
    $('.business-btn').click(function(){
        var el = $('.contact-form-up');
        if(el.css('top') !== '0') {
            el.animate({top: "0"}, 1000 );
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        }
    });
    $('.close-up').click(function(){
        $('.careers-up').fadeOut();
        $('.contact-form-up').animate({top: "-1000"}, 1000 );
    });
    $('.view-workers-btn').click(function(){
        var el = $(this).parents('.main-right').find('.workers-list');
        if(el.css('height') == '260px') {
            el.animate({height: $(el).get(0).scrollHeight}, 1000 );
            el.addClass('active');
            this.innerHTML = "Hide All";
        }
        else {
            el.animate({height: "260px"}, 1000 );
            el.removeClass('active');
            this.innerHTML = "View All";
        }
    })
    if($(window).width() < 768) {
        $('.spotlight-list').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          pauseOnFocus: false,
          adaptiveHeight: true
        });
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.benefit-box').addClass('changed');
        }
        else {
            $('.benefit-box').removeClass('changed');
        }
    });
});