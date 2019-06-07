$(document).ready(function () {
    var footHeight = $('.footer').outerHeight();
    $('.wrapper').css('padding-bottom', footHeight);
    $('.graph-f').slideDown(1000);
    setTimeout(function () {
        $('.graph-nd').slideDown(1000);
    },1000);
    setTimeout(function () {
        $('.graph-td').slideDown(1000);
    },2000);
    setTimeout(function () {
        $('.graph-th').slideDown(1000);
    },3000);
    var headerHeight = $('.header').outerHeight();
    if(!$('body').hasClass('main-body')) {
        $('.content').css( { height: 'calc(100vh - ' + (headerHeight + 1) + 'px)' } );
    }
    $('.calculate-section').css( { height: 'calc(100% - ' + ($('.money-info').outerHeight() + 20) + 'px)' } );
    // Поле + и -
    $('.spin-up').click(function () {
        if(!$(this).parents('.spinner-box').hasClass('disabled')) {
            var inputVal = $(this).parents('.spinner-box').find('.spinner').val();
            if(inputVal == "") {
                var inputVal = 0;
            }
            var y = parseInt(inputVal);
            inputVal = 1+y;
            $(this).parents('.spinner-box').find('.spinner').val(inputVal);
        }
    });
    $('.spin-down').click(function () {
        if(!$(this).parents('.spinner-box').hasClass('disabled')) {
            var inputVal = $(this).parents('.spinner-box').find('.spinner').val();
            if(inputVal == "") {
                var inputVal = 0;
            }
            var y = parseInt(inputVal);
            if(inputVal > 1 ) {
                inputVal = y-1;
            }
            $(this).parents('.spinner-box').find('.spinner').val(inputVal);
        }
    });
    // Конец + и -

    /* Табы */
    $('.tab-link').click(function() {
        var el = '.parent-tab';
        var current = $(this).data('tab');
        if (!$(this).hasClass('selected')) {
            $(this).parents('.tabs-holder').find('.tabs-nav .tab-link').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.tabs-holder').find('div.parent-tab').slideUp('');
            $(".tabs-holder").find(el+"[data-tab='" + current + "']").slideDown('');
        }
    });
    $('.company-open').click(function () {
        var el = $(this).parents('.markets-row').find('.markets-drop-section');
        var elText = $(this).find('.open-text');
        if(!$(this).hasClass('disabled')) {
            if(el.css('display') == 'none') {
                el.slideDown();
                $(this).addClass('active');
                elText.html("Закрыть");
            }
            else {
                el.slideUp();
                $(this).removeClass('active');
                elText.html("Открыть");
            }
        }
    });
    $('.one-row').css( { height: 'calc(100% - ' + ($('.title-page').outerHeight() + 57) + 'px)' } );
    $('.cab-info-user .user-company-section').css( { height: 'calc(100% - ' + ($('.cab-info-head').outerHeight()) + 'px)' } );
    $('.history-table').css( { height: 'calc(100% - ' + ($('.history-section .section-head').outerHeight()) + 'px)' } );
    $('.current-lang').click(function () {
        var el = $(this).parents('.header-lang').find('.lang-drop');
        if(el.css('display') == 'none') {
            el.slideDown();
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
            el.slideUp();
        }
    });
    $('.current-time').click(function () {
        var el = $(this).parents('.header-time').find('.time-drop');
        if(el.css('display') == 'none') {
            el.slideDown();
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
            el.slideUp();
        }
    });
});
$(window).resize(function() {
    var footHeight = $('.footer').outerHeight();
    $('.wrapper').css('padding-bottom', footHeight);
    $('.calculate-section').css( { height: 'calc(100% - ' + ($('.money-info').outerHeight() + 20) + 'px)' } );
});
(function($){
    $(window).on("load",function(){

        $(".scroll").mCustomScrollbar({
            theme:"minimal"
        });

    });
})(jQuery);

// select
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
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
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
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
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);