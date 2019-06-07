$(document).ready(function () {
    $('.programm-box > a').click(function(){
        if ($(window).width() > 767) {
            if (!$(this).hasClass('selected')) {    
                $('.programm-box a').removeClass('selected');
                $(this).addClass('selected');
                $('.camp-programms div.programm-drop .programm-inner').slideUp('1500');
                $('.camp-programms div.programm-drop .programm-inner:eq(' + $('.programm-box > a').index(this) + ')').slideDown('1500');
             }
            else {
                $('.programm-box a').removeClass('selected');
                $('.programm-drop div.programm-inner').slideUp('1500');
            }
        }
        else {
            if($(this).parents('.programm-box').find('.drop-box-xs').css('display') == 'none') {
                $('.programm-box > a').removeClass('selected');
                //$('.drop-box-xs').slideUp();
                $(this).addClass('selected');
                $(this).parents('.programm-box').find('.drop-box-xs').slideDown('1500');
            }
            else {
                $(this).removeClass('selected');
                $(this).parents('.programm-box').find('.drop-box-xs').slideUp('1500');
            }
        }
    });
    $('.close-inner').click(function(e){
        e.preventDefault();
        $(this).parents('.camp-programms').find('.programm-box > a').removeClass('selected');
        $(this).parents('.camp-programms').find('.programm-drop div.programm-inner').slideUp('1500');
        $(this).parents('.programm-box').find('.drop-box-xs').slideUp('1500');
    });
    $(".anchor").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-0;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $('.user-phone').each(function(){
      $(this).mask("+9 ( 999 ) 999 - 99 - 99");
    });
    $('.order-btn').click(function(event){
        event.preventDefault();
        $('body').append('<div class="shadow"></div>'); 
        var box = $('.order-form').stop(true, true).fadeToggle('slow', 'linear');
        box.show();
        box.css("left", (($(window).width() - box.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        box.css("top", (($(window).height() - box.outerHeight()) / 2) + $(window).scrollTop() + "px");
	});
    $('.close-form').click(function(event){
        event.preventDefault();
        $('.order-form').fadeOut('slow', 'linear');
		$('.shadow').remove();
	});
});