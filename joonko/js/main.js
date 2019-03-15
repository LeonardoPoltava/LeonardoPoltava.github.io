$(document).ready(function () {
    $('.clients__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});

