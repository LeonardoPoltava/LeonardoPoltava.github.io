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
        var currEl = $(this);
        if(el.css('display') == 'none') {
            currEl.addClass('active');
            el.slideDown();
        }
        else {
            currEl.removeClass('active');
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
    if($(window).width() > 991) {
        var $nav = $('#sticky'),
        posTop = $nav.position().top;
        $(window).scroll(function () {
            var y = $(this).scrollTop();
            if (y > posTop) { $nav.addClass('fixed'); }
            else { $nav.removeClass('fixed'); }
        });
    }
    if($(window).width() < 768) {
        var $nav = $('#show-sticky'),
        posTop = $nav.position().top;
        $(window).scroll(function () {
            var y = $(this).scrollTop() - 15;
            if (y > posTop) { $nav.addClass('fixed'); }
            else { $nav.removeClass('fixed'); }
        });
    }
    $('.form-check').submit(function(e){
		e.preventDefault();
		var _this = this;
		$(_this).find('.send-form').prop('disabled', true);
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: form_data,
			success: function(data) {
				$('.form-check')[0].reset();
                $('.succes-modal').fadeIn();
                $('.feedback-box').removeClass('active');
                $('.fb-area').removeClass('active');
                setTimeout(function(){
                    $('.succes-modal').fadeOut();
                }, 2000);
			}
		}).always(function(){
			$(_this).find('.send-form').prop('disabled', false);
		});
	});
});
$(window).resize(function() {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
});