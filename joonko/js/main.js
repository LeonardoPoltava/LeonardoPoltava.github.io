$(document).ready(function () {
    $(".anchor").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-0;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    // $('.section__nav').each(function () {
    //     $(this).css('top', 'calc(50% - ' + ($(this).outerHeight() / 2) + 'px)');
    // })

    $('.section__form__box__input').focus(function() {
        $(this).parent('div').addClass('active');
    });
    $('.section__form__box__input').focusout(function() {
        if($(this).val() == "") {
            $(this).parent('div').removeClass('active');
        }
    });
    (function($) {
        $(function() {
            setTimeout(function() {
                $('select').styler();
            }, 100)
        });
    })(jQuery);
});

