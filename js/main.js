$(document).ready(function () {
    $('.scroll-pane').jScrollPane({showArrows: false, autoReinitialise: true});
    $('.career-type').click(function(){
        var el = $(this).parents('.careers-box').find('.careers-up');
        if(el.css('display') == 'none') {
            el.fadeIn();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            el.css("top", (($(window).height() - el.outerHeight()) / 2) + $(window).scrollTop() + "px");
        }
        else {
            el.fadeOut();
        }
    });
    var elHeight = $('.top-form').innerHeight();
    $('.top-form').css({'top' : -elHeight});
    var elFootHeight = $('.bottom-form').innerHeight();
    $('.bottom-form').css({'bottom' : -elFootHeight});
    $('header .business-btn').click(function(){
        var el = $('.top-form');
        if(el.css('top') !== '0') {
            elHeight = el.outerHeight();
            $('.wrapper').animate({marginTop: elHeight}, 1000 );
            el.animate({top: "0", opacity: "1"}, 1000 );
            $(this).fadeOut();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
        }
    });
    $('footer .business-btn').click(function(){
        var el = $('.bottom-form');
        if(el.css('bottom') !== '0') {
            elHeight = el.outerHeight();
            $('body').animate({paddingBottom: elFootHeight}, 1000 );
            el.animate({'bottom': "0", opacity: "1"}, 1000 );
            $(this).fadeOut();
            el.css("left", (($(window).width() - el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            setTimeout(function() {
                $("body,html").animate({scrollTop: $(document).height() }, 2000);
            }, 1000);
        }
    });
    $('.close-up').click(function(){
        $('.careers-up').fadeOut();
        $('.wrapper').animate({marginTop: "0", marginBottom: "0"}, 1000 );
        $('header .business-btn').fadeIn();
        $('.top-form').animate({top: -elHeight, opacity: "0"}, 1000 );
        $('footer .business-btn').fadeIn();
        $('.bottom-form').animate({bottom: -elFootHeight, opacity: "0"}, 1000 );
        $('body').animate({paddingBottom: "0"}, 1000 );
    });
    $('.view-workers-btn').click(function(){
        var el = $(this).parents('.main-right').find('.workers-list');
        if(el.css('height') == '260px') {
            el.animate({height: $(el).get(0).scrollHeight}, 1000 );
            el.addClass('active');
            this.innerHTML = "Hide All";
        }
        else {
            el.animate({height: "260px"}, 1000 );
            el.removeClass('active');
            this.innerHTML = "View All";
        }
    })
    if($(window).width() < 768) {
        $('.spotlight-list').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          pauseOnFocus: false,
          adaptiveHeight: true
        });
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.benefit-box').addClass('changed');
        }
        else {
            $('.benefit-box').removeClass('changed');
        }
    });
});
var animateHTML = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hidden')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden', 'animated')
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()