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
    $('.filter-show-btn').click(function (e){
        e.preventDefault();
        var el = $(this).parents('.filter-section').find('.filter-hidden');
        if(el.css('display') == 'none') {
            el.slideDown();
            $(this).addClass('active');
            if($(this).parents('.filter-section').find('.ss-scroll').hasClass('ss-hidden')){
               $(this).parents('.filter-section').find('.ss-wrapper').css('border', 'none');
            }
        }
        else {
            el.slideUp();
            $(this).removeClass('active');
        }
    });
    $('.selectpicker').selectpicker({
      style: 'btn-info'
    });
    $('.content-item').mouseenter(function (){
        $(this).find('.content-item-drop').slideDown();
    });
    $('.content-item').mouseleave(function (){
        $(this).find('.content-item-drop').slideUp();
    });
    $('.close-up').click(function (e){
        e.preventDefault();
        $('.pop-up').fadeOut();
        $('body').css('overflow', 'auto');
    });
    $('.sort-up').click(function (e){
        e.preventDefault();
        $('.sort-box').fadeIn();
        var upBot = $('.sort-box').find('.popup-actions').outerHeight();
        $('.pop-up').css('padding-bottom', upBot);
        $('body').css('overflow', 'hidden');
    });
    $('.search-up').click(function (e){
        e.preventDefault();
        $('.search-box').fadeIn();
        $('body').css('overflow', 'hidden');
        setTimeout(bottomUp, 100);
        function bottomUp() {
            var upBot = $('.sort-box').find('.popup-actions').outerHeight();
            $('.search-box').css('padding-bottom', upBot);
        }
    });
    $('.filter-up').click(function (e){
        e.preventDefault();
        $('.sidebar').fadeIn();
        var upBot = $('.sort-box').find('.popup-actions').outerHeight();
        $('.pop-up').css('padding-bottom', upBot);
        $('.sidebar').css('overflow-y', 'auto');
        $('body').css('overflow', 'hidden');
    });
    if($(window).width() > 1023) {
        $('.scrollable').mouseenter(function() {
            var thisEl = $(this);
            setTimeout(borderScroll, 100);
            function borderScroll() {
                if(thisEl.find('.ss-scroll').hasClass('ss-hidden')) {
                    thisEl.find('.ss-wrapper').css('border-right', '4px solid #f6f6f6')
                }
            }
        });
        $('.scrollable').mouseleave(function() {
            var thisEl = $(this);
            setTimeout(borderScroll, 100);
            function borderScroll() {
                if(thisEl.find('.ss-scroll').hasClass('ss-hidden')) {
                    thisEl.find('.ss-wrapper').css('border-right', 'none')
                }
            }
        });
        $('.scrollable').each(function() {
            var heightVal = $(this).parents('.filter-section').find('.filter-hidden').outerHeight();
            $(this).css('height', heightVal);
        });
    }
});