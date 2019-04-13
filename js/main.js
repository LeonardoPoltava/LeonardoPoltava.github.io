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
// Слайдер закончен

// Выбор даты
let datepicker = document.getElementById('datepicker'); // инпут нашего датапикера
let mainBody = document.getElementsByTagName('body')[0]; // обращаемся к body
let today = new Date(); // Полная дата
let year = today.getFullYear(); // Год
let month = today.getUTCMonth() + 1; // Месяц
let day = today.getUTCDay(); // День недели 0 - ВС 1 - ПН 2 - ВТ и тд.
let date = today.getDate(); // Дата
// Считаем кол-во дней в текущем месяце
function daysInThisMonth() {
    return new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
}
// Конец счета кол-во дней в текущем месяце
let monthDays = daysInThisMonth(); // Переменная кол-ва дней в текущем месяце

let offsetTop = datepicker.getBoundingClientRect().top + document.body.scrollTop;
let offsetLeft = datepicker.getBoundingClientRect().left + document.body.scrollLeft;

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

// Клик на инпут
datepicker.addEventListener('click', ()=>{
    let datepickerBody = document.createElement('div');
    // Создаем блок с датапикером
    if(document.getElementsByClassName('datepicker').length < 1) {
        datepickerBody.className = "datepicker"; // даём класс датапикеру
        mainBody.appendChild(datepickerBody); // закидываем датапикер в body
        datepicker.value = date + "/" +month+ "/" + year; // Добавляем текущю дату в инпут датапикера
    }
    // Шапка датапикера
    let datepickerHeadRow = document.createElement('div');
    datepickerHeadRow.className = "datepicker-head-row"; // даём класс ряду
    datepickerBody.appendChild(datepickerHeadRow); // закидываем ряд в датапикер

    // тело датапикера
    let datepickerContent = document.createElement('div');
    datepickerContent.className = "datepicker-content"; // даём класс ряду
    datepickerBody.appendChild(datepickerContent); // закидываем ряд в датапикер

    for(let i=0;i<7;i++) {
        let datepickerHeadCol = document.createElement('div');
        datepickerHeadCol.className = "datepicker-head-col"; // даём класс ряду
        datepickerHeadRow.appendChild(datepickerHeadCol); // закидываем ряд в датапикер
        document.getElementsByClassName('datepicker-head-col')[i].innerHTML = daysArr[i];
    }
    // Генерируем кол-во рядов в месяце
    // for(let i=0;i<monthDays;i+=7){
    //     let datepickerRow = document.createElement('div');
    //     datepickerRow.className = "datepicker-row"; // даём класс ряду
    //     datepickerContent.appendChild(datepickerRow); // закидываем ряд в датапикер
    // }
    for(let i=0;i<monthDays;i++){
        let datepickerCol = document.createElement('span');
        datepickerCol.className = "datepicker-col";
        datepickerContent.appendChild(datepickerCol);
        datepickerCol.innerHTML = i+1;
        if(i+1 == date) {
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
});
