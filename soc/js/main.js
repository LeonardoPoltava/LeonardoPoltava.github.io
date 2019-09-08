// progress bars
let element = document.querySelectorAll(".progress-bar");
let elementPercent = document.querySelectorAll(".statistic-table__percent");
window.addEventListener('load', function() {
    checkOffset();
    if(window.innerWidth > 767) {
        parallax();
    }
});
window.addEventListener('scroll', function() {
    checkOffset();
    if(window.innerWidth > 767) {
        parallax();
    }
});
function move(elem, elemPercent) {
    let width = 1;
    let elementWidth = elem.getAttribute('aria-valuenow');
    setInterval(frame, 25);
    function frame() {
        if (width < elementWidth) {
            width++;
            elem.style.width = width + '%';
            elemPercent.innerHTML = width * 1  + '%'
        }
    }
}
function checkOffset() {
    for(i=0;i<element.length;i++) {
        let position = element[i].getBoundingClientRect();
        let elementWidth = element[i].getAttribute('aria-valuenow');
        if(!element[i].classList.contains('animated') && position.top >= 0 && position.bottom <= window.innerHeight) {
            element[i].classList += ' animated';
            move(element[i], elementPercent[i]);
        }
    }
}
// parallax
function parallax() {
    let scrolled = window.pageYOffset;
    let quoteTop = document.querySelector('.quote__img.top');
    let quoteBottom = document.querySelector('.quote__img.bottom');
    let quoteBox = document.querySelector('.quote-box');
    quoteTop.style.top = - (scrolled * 0.08) + 'px';
    quoteBottom.style.left = -(scrolled * 0.1) + 'px';
    quoteBox.style.left =+ (scrolled * 0.05) + 'px';
}
// show sidebar
let sidebarBtn = document.querySelector('.show-sidebar');
let closeSidebarBtn = document.querySelector('.sidebar__close');
let closeSidebarIcon = document.querySelector('.sidebar__close-btn');
let sidebar = document.querySelector('.sidebar');
sidebarBtn.addEventListener("click touchstart", showSidebar);
closeSidebarBtn.addEventListener("click touchstart", closeSiebar);
closeSidebarIcon.addEventListener("click touchstart", closeSiebar);
function showSidebar() {
    sidebar.style.right = '0';
    sidebar.style.opacity = '1';
    let shadow = document.createElement("div");
    shadow.classList.add('shadow');
    document.querySelector('body').appendChild(shadow);
    setTimeout(function () {
        shadow.style.opacity = '1';
    }, 10)
}
function closeSiebar() {
    sidebar.style.right = '-100%';
    sidebar.style.opacity = '0';
    let shadow = document.querySelector('.shadow');
    shadow.style.opacity = '0';
    setTimeout(function () {
        shadow.remove();
    }, 1000)
}
// show drop menu
let sidebarLink = document.querySelectorAll('.sidebar__link');
for(let i=0;i<sidebarLink.length;i++) {
    let count = i;
    sidebarLink[count].addEventListener("click", showDrop);
    function showDrop() {
        if(!sidebarLink[count].classList.contains('active')) {
            sidebarLink[count].classList.add('active');
            sidebarLink[count].nextElementSibling.style.display = 'block'
        }
        else {
            sidebarLink[count].classList.remove('active');
            sidebarLink[count].nextElementSibling.style.display = 'none'
        }
    }
}
// owl carousel
$(document).ready(function () {
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 27,
        nav: false,
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
    $('.modal-gallery').owlCarousel({
        loop: true,
        margin: 27,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    })
});