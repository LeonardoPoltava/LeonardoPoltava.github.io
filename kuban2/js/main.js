$(document).ready(function () {
    $('.header-xs-drop').click(function () {
        var el = $(this).parents('.header-nav-el').find('.drop-menu');
        if(el.css('display') == 'none') {
            el.slideDown();
            $(this).addClass('active');
        }
        else {
            el.slideUp();
            $(this).removeClass('active');
        }
    });
    $('.show-menu').click(function () {
        var el = $(this).parents('.header').find('nav');
        var currEl = $(this);
        if(el.css('display') == 'none') {
            currEl.addClass('cross');
            el.slideDown();
            el.addClass('active');
            $(this).addClass('active');
        }
        else {
            el.removeClass('active');
            currEl.removeClass('cross');
            $(this).removeClass('active');
            el.slideUp();
        }
    });
    $('.show-search').click(function () {
        var el = $(this).parents('.header-search-holder').find('.header-search');
        if(el.css('display') == 'none') {
            el.slideDown();
            el.addClass('active');
            $(this).addClass('active');
        }
        else {
            el.removeClass('active');
            $(this).removeClass('active');
            el.slideUp();
        }
    });
    $('.main-slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      pauseOnFocus: false,
      customPaging : function(slider, i) {
          return '' +
              '<div class="dots-diamond"><span></span></div><span class="slide-dot-title">Заголовок слайда</span>';
      },
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.cart-slider').slick({
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        pauseOnFocus: false,
        asNavFor: '.cart-nav-slider'
    });
    $('.cart-nav-slider').slick({
        dots: false,
        adaptiveHeight: true,
        asNavFor: '.cart-slider',
        arrows: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        pauseOnFocus: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    // Отступ на враппер для футера
    var footHeight = $(this).find('.footer').outerHeight();
    var headerHeight = $(this).find('.header').outerHeight();
    $('.wrapper').css('padding-bottom', footHeight);
    $('.wrapper').css('padding-top', headerHeight);
    $('.sidebar-inner-btn').click(function () {
        var el = $(this).parents('.sidebar-nd-item');
        var elem = $(this).parents('.sidebar-nd-item').find('.sidebar-td-drop')
        if(elem.css('display') == 'none') {
            elem.slideDown();
            el.addClass('active');
        }
        else {
            elem.slideUp();
            el.removeClass('active');
        }
    });
    $('.sidebar-upper-btn').click(function () {
        var el = $(this).parents('.sidebar-item');
        var elem = $(this).parents('.sidebar-item').find('.sidebar-nd-drop')
        if(elem.css('display') == 'none') {
            elem.slideDown();
            el.addClass('active');
        }
        else {
            elem.slideUp();
            el.removeClass('active');
        }
    });
    /* tabs */
    $('.product-tabs-nav li').click(function() {
        var el = '.parent-tab';
        var current = $(this).data('tab');
        if (!$(this).hasClass('selected')) {
            $(this).parents('.product-tabs-holder').find('.product-tabs-nav li').removeClass('selected');
            $(this).addClass('selected');
            $(this).parents('.product-tabs-holder').find('div.parent-tab').slideUp('');
            $(".product-tabs-holder").find(el+"[data-tab='" + current + "']").slideDown('');
        }
    });
    // youtube
    $('.video-link').click(function (e) {
        e.preventDefault();
        var self = $(this);
        var videoSrc = self.attr('href');
        var videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';
        self.addClass('active');
        self.find('img').css('z-index', '0');
        self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);
    });
    $('.footer-btn.blue-btn').click(function () {
       var box = $('.feedback-up');
       box.css("top", (($(window).height() - box.outerHeight()) / 2) + "px");
       box.css("left", (($(window).width() - box.outerWidth()) / 2) + "px");
       if(box.css('display') == 'none') {
           box.fadeIn();
           $('.shadow').fadeIn();
       }
    });
    $('.footer-btn.black-btn').click(function () {
        var box = $('.sign-modal');
        box.css("top", (($(window).height() - box.outerHeight()) / 2) + "px");
        box.css("left", (($(window).width() - box.outerWidth()) / 2) + "px");
        if(box.css('display') == 'none') {
            box.fadeIn();
            $('.shadow').fadeIn();
        }
    });
    $('.modal-close').click(function () {
        $('.modal').fadeOut();
        $('.shadow').fadeOut();
    });
    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".modal");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.modal').fadeOut();
                $('.shadow').fadeOut();
            }
        });
    });
    $('.main-slider').css( { height: 'calc(100vh - ' + $('.header').outerHeight() + 'px)' } );
    $('.next-slide-capt img').each(function () {
        var nextSlide = $(this).parents('.main-slide').siblings().find('.main-slide-img').attr('src');
        $(this).attr('src',nextSlide);
    });
    console.log(nextSlide);
});
$(window).resize(function() {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('.footer').outerHeight();
        var headerHeight = $(this).find('.header').outerHeight();
        $(this).css('padding-bottom', footHeight);
        $(this).css('padding-top', headerHeight);
    });
    $('.main-slider').css( { height: 'calc(100vh - ' + $('.header').outerHeight() + 'px)' } );
});
// custom select
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);