$(document).ready(function () {
    $('.scroll-pane').jScrollPane({showArrows: false, autoReinitialise: true});
    $('.career-type').click(function(){
        var el = $(this).parents('.careers-box').find('.careers-up');
        if(el.css('display') == 'none') {
            el.fadeIn();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            el.css("top", (($(window).height() - el.outerHeight()) / 2) + $(window).scrollTop() + "px");
        }
    });
    $('.business-btn').click(function(){
        var el = $('.contact-form-up');
        if(el.css('display') == 'none') {
            el.fadeIn();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            el.css("top", (($(window).height() - el.outerHeight()) / 2) + $(window).scrollTop() + "px");
        }
    });
    $('.close-up').click(function(){
        $('.careers-up').fadeOut();
        $('.contact-form-up').fadeOut();
    });
});