$(document).ready(function () {
    $('.inner-title-img').css('left', 'calc(50% - ' + ($('.inner-title-img').outerWidth() / 2)+ 'px)');
    $('.inner-head-title').css('left', 'calc(50% - ' + ($('.inner-head-title').outerWidth() / 2)+ 'px)');
    $('.error-page').css('height', 'calc(100vh - ' + (($('.header').outerHeight()) + ($('.footer').outerHeight()))+ 'px)');
    $(".show-menu").click(function (e) {
        e.preventDefault();
        var el = $(this).parents('.header').find('.header-nav-holder');
        var currEl = $(this);
        if(el.css('visibility') == 'hidden') {
            $('.logo-img').css('animation', 'none');
            currEl.addClass('cross');
            el.addClass('active');
        }
        else {
            currEl.removeClass('cross');
            el.removeClass('active');
            setTimeout(function () {
                $('.logo-img').css('animation', 'mill 25s infinite linear');
            },700);
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
    var hr = (new Date()).getHours();
    if(hr > 5 && hr < 18) {
        $('.main-head').addClass('day');
    }
    else {
        $('.main-head').addClass('night');
    }
});
$(window).resize(function() {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
    $('.inner-title-img').css('left', 'calc(50% - ' + ($('.inner-title-img').outerWidth() / 2)+ 'px)');
    $('.inner-head-title').css('left', 'calc(50% - ' + ($('.inner-head-title').outerWidth() / 2)+ 'px)');
    $('.error-page').css('height', 'calc(100vh - ' + (($('.header').outerHeight()) + ($('.footer').outerHeight()))+ 'px)');
});
