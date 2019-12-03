// sidebar toggle
let showButton = document.querySelector('.show-sidebar');
let sidebar = document.querySelector('.sidebar');
function sidebarToggle() {
    if(!this.classList.contains('active')) {
        this.classList.add('active');
        sidebar.style.left = "0";
    }
    else {
        this.classList.remove('active');
        sidebar.style.left = "-100%";
    }
}
showButton.addEventListener('click', sidebarToggle, false);

// dropdown toggle
let showDropButton = document.querySelectorAll('.nav-show-drop');
function dropdownToggle() {
    if(!this.classList.contains('active')) {
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
    }
    else {
        this.classList.remove('active');
        this.nextElementSibling.classList.remove('active');
    }
}
for(i=0;i<showDropButton.length;i++) {
    showDropButton[i].addEventListener('click', dropdownToggle, false);
}

// social share button
let shareButton = document.querySelector('.social-share');
if(shareButton){
    shareButton.addEventListener('click', function() {
        shareButton.classList.toggle('active');
    });
}

/* Back to Top button  */
(function() {
    'use strict';
    let goTopBtn = document.querySelector('.to-top');
    if(goTopBtn) {
        function trackScroll() {
            let scrolled = window.pageYOffset;
            let coords = 200;

            if (scrolled > coords) {
                goTopBtn.classList.add('active');
            }
            if (scrolled < coords) {
                goTopBtn.classList.remove('active');
            }
        }

        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -20);
                setTimeout(backToTop, 0);
            }
        }

        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);
    }
})();