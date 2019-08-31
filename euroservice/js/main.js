$(document).ready(function () {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
    $('.lang-text').click(function (e){
        e.preventDefault();
        var el = $(this).parents('.lang-holder').find('.lang-list');
		if(el.css('display') == 'none') {
			el.slideDown();
			$(this).addClass('active');
		}
		else {
			el.slideUp();
			$(this).removeClass('active');
		}
	});
    $('.show-menu').click(function (e){
        e.preventDefault();
		if($(this).parents('header').find('nav').css('display') == 'none') {
			$(this).parents('header').find('nav').slideDown();
			$(this).addClass('active');
		}
		else {
			$(this).parents('header').find('nav').slideUp();
			$(this).removeClass('active');
		}
	});
    $('.change-dates-bt').click(function (e){
        e.preventDefault();
		var box = $('.change-dates-up').fadeIn('slow', 'linear');
        box.show();
        box.css("top", (($(window).height() - box.outerHeight()) / 2) + $(window).scrollTop() + "px");
        box.css("left", (($(window).width() - box.outerWidth()) / 2) + $(window).scrollLeft() + "px");
	});
    $('.change-btn').click(function (e){
        e.preventDefault();
		$('.change-dates-up').fadeOut('slow', 'linear');
	});
    /* custom selects */
    (function($) {
        $(function() {
            setTimeout(function() {
              $('select').styler();
            }, 100)
        });
    })(jQuery);
});