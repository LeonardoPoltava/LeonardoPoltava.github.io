$(document).ready(function () {
    $('.wrapper').each(function(){
        var footHeight = $(this).find('footer').outerHeight();
        $(this).css('padding-bottom', footHeight)
    });
    $('.scroll-pane').jScrollPane({showArrows: false, autoReinitialise: true});
    $('.career-type').click(function(){
        var el = $(this).parents('.careers-box').find('.careers-up');
        if(el.css('display') == 'none') {
            if($(window).width() > 767) {
                $('.shadow').fadeIn();
            }
            //window.location.hash= $(this).data('hash');
            setParam('position', $(this).data('hash'));
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
        if(el.css('height') == '0px') {
            el.animate({height: $(el).get(0).scrollHeight, opacity: "1"}, 1000, function(){
                el.css("height", "auto");
            } );
            $(this).fadeOut();
            setTimeout(function() {
                $("body,html").animate({scrollTop: $(document).height() }, 1000);
            }, 1000);
        }
    });
    $('.close-up').click(function(){
        //removeHash();
        removeParam('position');
        $('.shadow').fadeOut();
        $('.careers-up').fadeOut();
        $('.wrapper').animate({marginTop: "0", marginBottom: "0"}, 1000 );
        $('header .business-btn').fadeIn();
        $('.top-form').animate({top: -elHeight, opacity: "0"}, 1000 );
        $('footer .business-btn').fadeIn();
        $('.bottom-form').animate({height: "0", opacity: "0"}, 1000 );
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
    $(".careers-up").each(function() {
        var $this = $(this);
        if(('#'+getParam('position')) == $(this).data('hash')) {
            $('.career-type[data=#'+$(this).data('hash')+']').trigger('click');
            if($(window).width() > 767) {
                $('.shadow').fadeIn();
            }
            var destination = $(".careers-content").offset().top-0;
            $("body,html").animate({
                scrollTop: destination }, 800, function(){
                $this.fadeIn();
                $this.css("left", (($(window).width() - $this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
                $this.css("top", (($(window).height() - $this.outerHeight()) / 2) + $(window).scrollTop() + "px");
            });
        }
    });
    $(window).resize(function(){
        $('.wrapper').each(function(){
            var footHeight = $(this).find('footer').outerHeight();
            $(this).css('padding-bottom', footHeight)
        });
    });
    if($(window).width() > 767) {
        winScrollTop = $(this).scrollTop();
        parallax();
        function parallax() { 
          $('.parallax').each(function(){ 
             var firstTop = $(this).offset().top; 
             var moveTop = (firstTop-winScrollTop-640)*0.3 //speed;
             $(this).css("transform","translate3d(0, "+-moveTop+"px, 0)");
          });
        }
        $(window).scroll(function(e){
          winScrollTop = $(this).scrollTop();
          parallax();
        });
    }
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
animateHTML().init();

function getParam(name) {
    var params = new URLSearchParams(location.search.slice(1));
    return params.get(name);
}
function setParam(name, val) {
    var params = new URLSearchParams(location.search.slice(1));
    params.set(name, val);
    window.history.replaceState({}, '', location.pathname + '?' + params);
}
function removeParam(name) {
    var params = new URLSearchParams(location.search.slice(1));
    params.delete(name);
    window.history.replaceState({}, '', location.pathname + (Array.from(params).length ? '?' : '') + params);
}
