$(document).ready(function () {
    $(".anchor").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $(".show-menu").click(function (e) {
        e.preventDefault();
        var el = $(this).parents('.header').find('.header-menu');
        if(el.css('display') == 'none') {
            $(this).addClass('active');
            el.slideDown();
        }
        else {
            $(this).removeClass('active');
            el.slideUp();
        }
    });
    $('.fb-input, .feedback-area').focus(function() {
        $(this).parent('div').addClass('active');
    });
    $('.fb-input, .feedback-area').focusout(function() {
        if($(this).val() == "") {
            $(this).parent('div').removeClass('active');
        }
    });
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });
    $('#to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
$(window).resize(function() {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
});
