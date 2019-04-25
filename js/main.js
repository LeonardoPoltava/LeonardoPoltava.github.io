// Слайдер
let slidersCount = 0;
let slider = document.getElementsByClassName('main-slider')[0]; // Слайдер
let slide = document.getElementsByClassName('main-slide'); // Массив слайдов
slidersCount = slide.length; // число слайдов
let slideWidth = window.innerWidth; // Ширина слайда
let sliderWidth = slidersCount * slideWidth; // Считаем ширину слайдера суммируя все слайды
// создаем блок для слайдов внутри слайдера
let child = document.createElement("div");
child.className = "slide-track";
slider.appendChild(child);
let sliderTrack = document.getElementsByClassName('slide-track')[0];
// конец блока для слайдов

sliderTrack.style.width = sliderWidth + "px"; // Задаём новую ширину слайдеру
// sliderTrack.style.height = slide[0].offsetHeight + "px"; // Задаём новую высоту слайдеру

// В новый созданый блок помещаем наши слайды
for(let i=0; i<slidersCount; i++) {
    sliderTrack.appendChild(slide[0]);
}

// создаем обертку для слайдера
let childList = document.createElement("div");
childList.className = "slide-list";
slider.appendChild(childList);
let sliderList = document.getElementsByClassName('slide-list')[0];
sliderList.appendChild(sliderTrack);
// конец обертки слайдера

for(let i=0; i<slidersCount; i++) {
    slide[i].style.width =  slideWidth + "px"; // Задаём ширину слайдам
}

// Создаем кнопки для слайдера
let buttonPrev = document.createElement("button");
buttonPrev.className = "slide-prev slide-btn";
slider.appendChild(buttonPrev);

let buttonNext = document.createElement("button");
buttonNext.className = "slide-next slide-btn";
slider.appendChild(buttonNext);
// Конец кнопок для слайдера

// Следующий слайд
let slidePosition = 0;
buttonNext.addEventListener('click', ()=>{
    if (slidePosition < (sliderWidth - slideWidth)) {
        slidePosition += slideWidth;
        sliderTrack.style.transform = `translate3d(-${slidePosition}px, 0, 0)`;
    }
});
// Предыдущий слайд
buttonPrev.addEventListener('click', ()=>{
    sliderTrack.style.transform = `translate3d(-${slidePosition - slideWidth}px, 0, 0)`;
    if(slidePosition > 0) {
        slidePosition -= slideWidth;
    }
});

document.querySelector('.main-slider').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.main-slider').addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if (slidePosition < (sliderWidth - slideWidth)) {
                slidePosition += slideWidth;
                sliderTrack.style.transform = `translate3d(-${slidePosition}px, 0, 0)`;
            }
        }
        else {
            sliderTrack.style.transform = `translate3d(-${slidePosition - slideWidth}px, 0, 0)`;
            if(slidePosition > 0) {
                slidePosition -= slideWidth;
            }
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
// Слайдер закончен





// Выбор даты
let datepicker = document.getElementById('datepicker');
let mainBody = document.getElementsByTagName('body')[0];
let today = new Date(); // Полная дата
let year = today.getFullYear(); // Год
let month = today.getUTCMonth() + 1; // Месяц
let day = today.getUTCDay(); // День недели 0 - ВС 1 - ПН 2 - ВТ и тд.
let date = today.getDate(); // Дата
const currentDate = today.getDate();
const currentMonth = today.getUTCMonth() + 1;
let datepickerWidth = 255;
// Считаем кол-во дней в текущем месяце
function daysInThisMonth() {
    return new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
}
// Конец счета кол-во дней в текущем месяце
let monthDays = daysInThisMonth();
let daysValue = monthDays;

// Массив с дням недели
let daysArr = [
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
];
let monthArr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]
var myDate = new Date(year,month-1,1);
var numDay = myDate.getDay();
function createDatepicker() {
    var myDate = new Date(year,month-1,1);
    var numDay = myDate.getDay();
    let datepickerBody = document.createElement('div');
    // Создаем блок с датапикером
    if(document.getElementsByClassName('datepicker').length < 1) {
        datepickerBody.className = "datepicker";
        mainBody.appendChild(datepickerBody);
        datepicker.value = date + "/" +month+ "/" + year;
    }
    let offsetTop = parseInt(datepicker.getBoundingClientRect().top) + parseInt(document.body.scrollTop);
    let offsetLeft = parseInt(datepicker.getBoundingClientRect().left) + parseInt(datepicker.offsetWidth) - parseInt(datepickerWidth);
    // Заголовок датапикера
    let datepickerTop = document.createElement('div');
    datepickerTop.className = "datepicker-header";
    datepickerBody.appendChild(datepickerTop);

    let datepPickerPrev = document.createElement('button')
    datepPickerPrev.className = "date-prev datepicker-btn";
    datepickerTop.appendChild(datepPickerPrev);
    datepPickerPrev.innerHTML = "<<";

    let datepickerMonth = document.createElement('span');
    datepickerMonth.className = "datepicker-month";
    datepickerTop.appendChild(datepickerMonth);
    datepickerMonth.innerHTML = monthArr[month-1];

    let datepPickerNext = document.createElement('button')
    datepPickerNext.className = "date-next datepicker-btn";
    datepickerTop.appendChild(datepPickerNext);
    datepPickerNext.innerHTML = ">>";

    // Шапка датапикера
    let datepickerHeadRow = document.createElement('div');
    datepickerHeadRow.className = "datepicker-head-row";
    datepickerBody.appendChild(datepickerHeadRow);

    // тело датапикера
    let datepickerContent = document.createElement('div');
    datepickerContent.className = "datepicker-content";
    datepickerBody.appendChild(datepickerContent);

    for(let i=0;i<7;i++) {
        let datepickerHeadCol = document.createElement('div');
        datepickerHeadCol.className = "datepicker-head-col";
        datepickerHeadRow.appendChild(datepickerHeadCol);
        document.getElementsByClassName('datepicker-head-col')[i].innerHTML = daysArr[i];
    }
    if(numDay == 0) {
        for(j=1;j<7;j++) {
            let datepickerCol = document.createElement('span');
            datepickerCol.className = "datepicker-col-empty";
            datepickerContent.appendChild(datepickerCol);
            datepickerCol.innerHTML = "";
        }
    }
    else {
        for(j=1;j<numDay;j++) {
            let datepickerCol = document.createElement('span');
            datepickerCol.className = "datepicker-col-empty";
            datepickerContent.appendChild(datepickerCol);
            datepickerCol.innerHTML = "";
        }
    }
    for(let i=0;i<daysValue;i++){
        let datepickerCol = document.createElement('span');
        datepickerCol.className = "datepicker-col";
        datepickerContent.appendChild(datepickerCol);
        datepickerCol.innerHTML = i+1;
        if(i+1 == currentDate && month == currentMonth ) {
            datepickerCol.classList += " today";
        }
        datepickerCol.setAttribute("date", i+1);
        datepickerCol.setAttribute("month", month);
    }
    let datepickerMainBody = document.getElementsByClassName('datepicker')[0];

    // Позиция датапикера
    datepickerMainBody.style.left = offsetLeft + "px";
    datepickerMainBody.style.top = offsetTop + datepicker.offsetHeight + 5 + "px";

    let datesColArr = document.querySelectorAll('.datepicker-col');
    for(i=0;i<datesColArr.length;i++) {
        datesColArr[i].addEventListener('click', function () {
            datepicker.value = this.getAttribute("date") + "/" + this.getAttribute("month") + "/" + year;
            if(!this.classList.contains('active')) {
                [].forEach.call(datesColArr, function(el) {
                    el.classList.remove("active");
                });
                this.className += " active";
            }
            else if (this.classList.contains('active') && !this.classList.contains('today')){
                [].forEach.call(datesColArr, function(el) {
                    el.classList.remove("active");
                });
            }
            else if (this.classList.contains('active') && this.classList.contains('today')) {
                this.className = "datepicker-col today";
            }
        });
    }
}
// Клик на инпут
datepicker.addEventListener('click', ()=>{
    createDatepicker();
});

document.addEventListener('click', function (event) {
    if (event.target.matches('.date-next')) {
        month += 1;
        document.querySelector('.datepicker').remove();
        daysValue = new Date(today.getFullYear(), month, 0).getDate();
        createDatepicker();
        if(month > 11) {
            year += 1;
            month = 0;
            day = 1;
        }
    }
    if (event.target.matches('.date-prev')) {
        month -= 1;
        document.querySelector('.datepicker').remove();
        daysValue = new Date(today.getFullYear(), month, 0).getDate();
        createDatepicker();
        if(month == 1) {
            year -= 1;
            month = 13;
            day = 1;
        }
    }
    if (!event.target.matches('.datepicker *') && !event.target.matches('#datepicker') && document.getElementsByClassName('datepicker').length > 0 ) {
        document.querySelector('.datepicker').remove();
    }
}, false);