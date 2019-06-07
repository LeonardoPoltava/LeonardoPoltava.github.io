$(document).ready(function () {
    // Лейблы на инпуты и их состояния
    $('.fb-input, .feedback-area').focus(function() {
        $(this).parent('div').addClass('active');
    });
    $('.fb-input, .feedback-area').focusout(function() {
        if($(this).val() == "") {
            $(this).parent('div').removeClass('active');
        }
    });
    setTimeout(function () {
        $('.fb-input, .feedback-area').each(function() {
            if($(this).val() == "") {
                $(this).val();
                $(this).parent('div').removeClass('active');
            }
            else {
                $(this).val();
                $(this).parent('div').addClass('active');
            }
        });
    }, 500);
    // Отступ на враппер для футера
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
    // Слайдеры
    $('.main-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        swipeToSlide: true,
        pauseOnFocus: false,
        adaptiveHeight: true
    });
    // Скрыть форму поиска при клике за её пределами
    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".search-form");
            var divUp = $(".pop-up");
            var showSearch = $(".show-search");
            if (!div.is(e.target) && div.has(e.target).length === 0 && !showSearch.is(e.target) && !divUp.is(e.target) && divUp.has(e.target).length === 0) {
                div.animate({
                    right: "-300"
                }, 500, function() {
                    showSearch.fadeIn();
                });
                $('.pop-up').fadeOut();
                $('.shadow').fadeOut();
            }
        });
    });
    // закрыть модальное окно
    $('.close-up').click(function(){
        $(".shadow").fadeOut();
        $(".modal").fadeOut();
        $('.wrapper').removeClass('modal-open');
    });
    $('.add-ingridients').click(function(){
        $(".shadow").fadeIn();
        var box = $('.ingridients-modal');
        if($(window).scrollTop() > 70) {
            box.css("top", (($(window).height() - box.outerHeight()) / 2) + $(window).scrollTop() + "px");
        }
        else {
            box.css("top", (($(window).height() - box.outerHeight()) / 2) + 70 + "px");
        }
        box.fadeIn();
        $('.wrapper').addClass('modal-open');
    });
    if($('select').length) {
        (function($) {
            $(function() {
                setTimeout(function() {
                    $('select').styler();
                }, 100)
            });
        })(jQuery);
    }
    // Поле кол-ва товаров + и -
    $('.spin-plus').click(function () {
        var inputVal = $(this).parents('.product-spinner').find('.spinner').val();
        var y = parseInt(inputVal);
        inputVal = 1+y;
        $(this).parents('.product-spinner').find('.spinner').val(inputVal);
    });
    $('.spin-minus').click(function () {
        var inputVal = $(this).parents('.product-spinner').find('.spinner').val();
        var y = parseInt(inputVal);
        if(inputVal > 1 ) {
            inputVal = y-1;
        }
        $(this).parents('.product-spinner').find('.spinner').val(inputVal);
    });
    // Конец кол-ва товаров + и -
    // Только цифры для инпутов!
    (function($) {
        $.fn.inputFilter = function(inputFilter) {
            return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        };
    }(jQuery));
    $(".spinner").inputFilter(function(value) {
        return /^\d*$/.test(value);
    });
    // конец только цифры для инпутов!

});
$(window).resize(function() {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
});
