var $zoom;

function reloadsvg(){
    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');

        $('.car_artist .img').each(function(){
            $(this).css('height',$(this).width()+36);
        })
    });

    $(document).on('click','.block_top_lk a,.top_mob .top_mob__links a', function(){
        $('.popup_lk').fadeIn().css('display','flex');
    })

    $(document).on('click','a.close',function(){
        $('.'+$(this).data('close')).fadeOut();
        return false;
    })

    $(document).on('click','.block_top .contact_info button', function(){
        $('.popup_sendmessage').fadeIn().css('display','flex');
    })

    $(document).on('click','.popup_lk .col-sm-7 a', function(){
        $('.popup_lk').fadeOut(function(){
            $('.popup_rp').fadeIn().css('display','flex');
        })
    })

    $(document).on('click','.popup_sendmessage input[type="submit"]', function(){
        $('.popup_sendmessage').fadeOut(function(){
            $('.popup_sm').fadeIn().css('display','flex');
        })
        return false;
    })

    $(document).on('click','.card_info button.tocart', function(){
        $('.popup_ac').fadeIn().css('display','flex');
        return false;
    })

    $(document).on('click','button.sendcart', function(){
        $('.popup_sc').fadeIn().css('display','flex');
        return false;
    })

    $(document).on('click','.history .item .head', function(){
        var parent = $(this).parent('.item');

        if(!parent.hasClass('active')) {
            $('.history .item .item-content').slideUp(function () {
                $('.history .item').removeClass('active');
            })
            parent.children('.item-content').slideDown(function () {
                parent.addClass('active');
            })
        }else{
            $('.history .item .item-content').slideUp(function () {
                $('.history .item').removeClass('active');
            })
        }
    })



    $(document).on('click','.block_categories .item p', function(){
        var that = $(this);
        $('.block_categories .item.active ul').slideUp(function(){
            $('.block_categories .item').removeClass('active');
        })
        that.parent().children('ul').slideDown(function(){
            that.parent().addClass('active');
        })
        return false;
    })
    var heightdesc;

    if($(window).width()<768){
        heightdesc = 40;
    }else{
        heightdesc = 69;
    }

    $('.list-news .content-news-list .desc').dotdotdot({
        callback: function( isTruncated ) {
            $('.content-news-list .desc').css('height','auto');
        },
        ellipsis: "\u2026 ",
        height: heightdesc,
        keep: null,
        tolerance: 0,
        truncate: "word",
        watch: "window",
    });

    $('.carousel-news .desc').dotdotdot({
        callback: function( isTruncated ) {
            $('.carousel-news .desc').css('height','auto');
        },
        ellipsis: "\u2026 ",
        height: 42,
        keep: null,
        tolerance: 0,
        truncate: "word",
        watch: "window",
    });

    $('.block_slider .carousel-caption span').dotdotdot({
        callback: function( isTruncated ) {
            $('.block_slider .carousel-caption span').css('height','auto');
        },
        ellipsis: "\u2026 ",
        height: 75,
        keep: null,
        tolerance: 0,
        truncate: "word",
        watch: "window",
    });



    $('.owl-card-images').owlCarousel({
        loop:true,
        margin:8,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $('.grid.collection .grid__category .img').css('height',$('.grid.collection .grid__category .img').width());

    $(window).resize(function(){
        $('.block_card .secondary_photo').css('height',$('.block_card .secondary_photo').width());
        if($(window).width()<768){
            $('.grid__category').css('height',$('.grid__category').width()+30);
            $('.grid.collection .grid__category .img').css('height',$('.grid.collection .grid__category .img').width());
        }
    })
    if($(window).width()<768){
        $('.grid__category').css('height',$('.grid__category').width()+30);

    }


    $('.owl-card-images').owlCarousel({
        loop:true,
        margin:8,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.owl-lastview').owlCarousel({
        loop:true,
        margin:8,
        center:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4,
                center: false
            },
            1000:{
                items:4,
                center: false
            }
        }
    })

    $('.block_categories p.title').click(function(){
        $('.block_categories').toggleClass('activecat');
    })
    $('.block_card .secondary_photo').css('height',$('.block_card .secondary_photo').width());

    $('span.attribute_size').click(function(){
        $('.attribute_select[data-attrselect="'+$(this).data('select')+'"]').slideToggle(150);
    })

    $('.attribute_select span').click(function(){
        var selectname = $(this).parent().data('attrselect');
        $('span[data-select="'+selectname+'"] b').text($(this).text());
        $(this).parent().slideUp(150);
        return false;
    })

    $('.owl-card-images button').css('margin-top',$('.owl-card-images .owl-stage-outer').height()/2-10);
    $('.owl-lastview button').css('margin-top',$('.owl-lastview .owl-stage-outer').height()/2-28);

    $(window).resize(function () {
        $('.owl-card-images button').css('margin-top',$('.owl-card-images .owl-stage-outer').height()/2-10);
        $('.owl-lastview button').css('margin-top',$('.owl-lastview .owl-stage-outer').height()/2-28);
    })

    $('.secondary_photo img').click(function(){
        $('.primary_photo img').attr('src',$(this).attr('src'));
        $('.primary_photo img').attr('data-magnify-src',$(this).attr('src'));
    })
    $(document).on('click','span.a_color', function(){
        $('span.a_color').removeClass('active');
        $(this).addClass('active');
    })

    $('.input_search input[type="text"]').focus(function(){
        $('.input_search').addClass('active');
    }).focusout(function(){
        $('.input_search').removeClass('active');
    })

    $('body').append('<button class="up"><img src="images/arrow_up.svg"/></button>');

    $(document).on('click','button.up',function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

    $('input[type="phone"]').mask('+7 (000) 000-00-00')
    $(window).scroll(function () {
        if($(document).scrollTop()>100 && $(window).width()>767){
            $('button.up').addClass('active');
        }else{
            $('button.up').removeClass('active');
        }
    })

    $('input[type="file"]').change(function(input) {
        var img = $(this).parent().parent().parent().children('img');
        readURL(img,this);

    });

    $('.top_mob .top_mob__links button').click(function(){
        $('.ulmob').slideToggle();
    })
}
$(document).ready(function() {
    $('.zoom').magnify({
        afterLoad: function() {
            console.log('Magnification powers activated!');
        }
    });
});
function readURL(img,input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            img.attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(document).ready(function() {
    //$("ul.navbar-nav").responsiveCollapse();
    reloadsvg();
});

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("topmenu");

var sticky = navbar.offsetTop;

function myFunction() {
    if ($(window).width()>767) {
        if (window.pageYOffset >= sticky - 14) {
            navbar.classList.add("sticky")
            $('body').addClass('fix');
        } else {
            navbar.classList.remove("sticky");
            $('body').removeClass('fix');
        }
    }

    if ($(window).width()<768) {
        if (window.pageYOffset >= 74) {
            navbar.classList.add("sticky")
            $('body').addClass('fix');
        } else {
            navbar.classList.remove("sticky");
            $('body').removeClass('fix');
            console.log($(window).width());
        }
    }
}