// Выбор даты
let mainBody = document.querySelector('.calendar-body .container');
let today = new Date(); // Полная дата
let year = today.getFullYear(); // Год
let month = today.getUTCMonth() + 1; // Месяц
let day = today.getUTCDay(); // День недели 0 - ВС 1 - ПН 2 - ВТ и тд.
let date = today.getDate(); // Дата
const currentDate = today.getDate();
const currentMonth = today.getUTCMonth() + 1;
// Считаем кол-во дней в текущем месяце
function daysInThisMonth() {
    return new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
}
// Конец счета кол-во дней в текущем месяце
let monthDays = daysInThisMonth();
let daysValue = monthDays;

// Массив с дням недели
let daysArr = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
];
if (window.screen.width < 991) {
    daysArr = [
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Вс"
    ];
}
// Массив с месяцами
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
let myDate = new Date(year,month-1,1);
let numDay = myDate.getDay();

// Функция создания календаря
function createDatepicker() {
    let myDate = new Date(year,month-1,1);
    let numDay = myDate.getDay();
    let datepickerBody = document.createElement('div');
    // Создаем блок с датапикером
    if(document.getElementsByClassName('datepicker').length < 1) {
        datepickerBody.className = "datepicker";
        datepickerBody.dataset.month = monthArr[month-1];
        mainBody.appendChild(datepickerBody);
    }
    // Заголовок датапикера
    let datepickerTop = document.createElement('div');
    datepickerTop.className = "datepicker-header flex-center-y";
    datepickerBody.appendChild(datepickerTop);

    let datepPickerPrev = document.createElement('button')
    datepPickerPrev.className = "date-prev datepicker__btn";
    datepickerTop.appendChild(datepPickerPrev);

    let datepickerMonth = document.createElement('span');
    datepickerMonth.className = "datepicker__month";
    datepickerTop.appendChild(datepickerMonth);
    datepickerMonth.innerHTML = monthArr[month-1];

    let datepickerYear = document.createElement('span');
    datepickerYear.className = "datepicker__year";
    datepickerTop.appendChild(datepickerYear);
    datepickerYear.innerHTML = year;

    let datepPickerNext = document.createElement('button')
    datepPickerNext.className = "date-next datepicker__btn";
    datepickerTop.appendChild(datepPickerNext);

    // выбор сегодняшней даты
    let todayButton = document.createElement('button')
    todayButton.className = "datepicker__btn-today";
    datepickerTop.appendChild(todayButton);
    todayButton.innerHTML = "Сегодня";

    // Шапка датапикера
    let datepickerHeadRow = document.createElement('div');
    datepickerHeadRow.className = "datepicker-head-row flex";
    datepickerBody.appendChild(datepickerHeadRow);

    // тело датапикера
    let datepickerContent = document.createElement('div');
    datepickerContent.className = "datepicker-content flex";
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
        let datepickerCol = document.createElement('div');
        let datepickerColInner = document.createElement('div');
        datepickerCol.className = "datepicker-col";
        datepickerColInner.className = "datepicker-col-inner";
        datepickerContent.appendChild(datepickerCol);
        datepickerCol.appendChild(datepickerColInner);
        datepickerColInner.innerHTML = i+1;
        datepickerCol.setAttribute("date", i+1);
        datepickerCol.setAttribute("month", month);
    }
    let datepickerMainBody = document.getElementsByClassName('datepicker')[0];

    let datesColArr = document.querySelectorAll('.datepicker-col-inner');
    let datesColMain = document.querySelectorAll('.datepicker-col');
    for(i=0;i<datesColArr.length;i++) {
        datesColArr[i].addEventListener('click', function () {
            [].forEach.call(datesColMain, function(el) {
                el.classList.remove("active");
            });
            let eventContainer = document.querySelectorAll('.datepicker__event');
            if(eventContainer.length > 0) {
                eventContainer[0].remove();
            }

            if(!this.parentNode.classList.contains('active')) {

                this.parentNode.className += " active";

                // создаем контейнер формы события
                let eventSection = document.createElement('div');
                eventSection.className = "datepicker__event";
                this.parentNode.appendChild(eventSection);

                // Создаем инпуты для формы
                let eventInputName = document.createElement('input');
                eventInputName.className = "datepicker__event__input datepicker__event__input-name std-input";
                eventInputName.placeholder = "Событие";
                eventInputName.name = "event";
                eventSection.appendChild(eventInputName);

                let eventInputDate = document.createElement('input');
                eventInputDate.className = "datepicker__event__input datepicker__event__input-date std-input";
                eventInputDate.placeholder = "День, месяц, год";
                eventInputDate.name = "date";
                eventSection.appendChild(eventInputDate);

                let eventInputParticipants = document.createElement('input');
                eventInputParticipants.className = "datepicker__event__input datepicker__event__input-participants std-input";
                eventInputParticipants.placeholder = "Имена участников";
                eventInputParticipants.name = "participants";
                eventSection.appendChild(eventInputParticipants);

                let eventDecription = document.createElement('textarea');
                eventDecription.className = "datepicker__event__area";
                eventDecription.placeholder = "Описание";
                eventDecription.name = "description";
                eventSection.appendChild(eventDecription);

                // Создаем футер формы
                let eventFooter = document.createElement('div');
                eventFooter.className = "datepicker__event-footer flex";
                eventSection.appendChild(eventFooter);

                let eventDoneBtn = document.createElement('button');
                eventDoneBtn.className = "datepicker__event__btn datepicker__event__done";
                eventFooter.appendChild(eventDoneBtn);
                eventDoneBtn.innerHTML = "Готово";

                let eventDeleteBtn = document.createElement('button');
                eventDeleteBtn.className = "datepicker__event__btn datepicker__event__delete";
                eventFooter.appendChild(eventDeleteBtn);
                eventDeleteBtn.innerHTML = "Удалить";

                let closeEvent = document.createElement('button');
                closeEvent.className = "datepicker__event__close";
                eventSection.appendChild(closeEvent);

                // Закрыть контейнер события
                let closeEventBtn = document.querySelector('.datepicker__event__close');
                function closeEventUp() {
                    document.querySelector('.datepicker__event').remove();
                }
                closeEventBtn.addEventListener('click', closeEventUp, false);

                // выводим введеный в форму текст
                document.querySelector('.datepicker__event__done').addEventListener('click', function () {
                    if(document.querySelector('.datepicker__event__done').parentElement.parentNode.parentNode.firstElementChild.childElementCount < 1) {
                        let elText = document.querySelectorAll('.datepicker__event__input');
                        let eventContent = document.createElement("div");
                        eventContent.className = "datepicker__event-content";
                        this.parentNode.parentNode.parentNode.firstChild.appendChild(eventContent);
                        for(i=0;i<elText.length;i++) {
                            let inputText = elText[i].value;
                            let createPar = document.createElement("p");
                            let parText = document.createTextNode(inputText);
                            eventContent.appendChild(createPar).appendChild(parText);
                        }
                        let eventArea = document.querySelector('.datepicker__event__area');
                        let areaPar = document.createElement("p");
                        let areaParText = document.createTextNode(eventArea.value);
                        eventContent.appendChild(areaPar).appendChild(areaParText);
                        this.parentNode.parentNode.parentNode.classList.add('filled');

                         //    Если всё заполнено - выводим информацию а инпуты убираем
                        let eventTextName = document.createElement('span');
                        eventTextName.className = "datepicker__event__name";
                        eventSection.appendChild(eventTextName);
                        eventTextName.innerHTML = document.querySelector('.datepicker__event__input-name').value;

                        let eventTextDate = document.createElement('span');
                        eventTextDate.className = "datepicker__event__date";
                        eventSection.appendChild(eventTextDate);
                        eventTextDate.innerHTML = document.querySelector('.datepicker__event__input-date').value;

                        let eventTextParticipants = document.createElement('span');
                        eventTextParticipants.className = "datepicker__event__participants";
                        let eventTitleParticipants = document.createElement('span');
                        eventTitleParticipants.className = "datepicker__event__participants__title";
                        eventSection.appendChild(eventTitleParticipants);
                        eventSection.appendChild(eventTextParticipants);
                        eventTitleParticipants.innerHTML = "Участники:";
                        eventTextParticipants.innerHTML = document.querySelector('.datepicker__event__input-participants').value;

                        let eventTextDecription = document.createElement('span');
                        eventTextDecription.className = "datepicker__event__description";
                        eventSection.appendChild(eventTextDecription);
                        eventTextDecription.innerHTML = document.querySelector('.datepicker__event__area').value;

                        for(i=0;i<elText.length;i++) {
                            elText[i].remove();
                        }
                        eventArea.remove();
                    }
                }, false);

                // выводим введеный в форму текст
                document.querySelector('.datepicker__event__delete').addEventListener('click', function () {
                    document.querySelector('.datepicker__event__delete').parentElement.parentNode.parentNode.firstElementChild.childNodes[1].remove();
                }, false);
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
createDatepicker();
// переключатели месяца
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
}, false);

// добавить новое событие
let addEvent = document.querySelector('.add-event');
let closeEvent = document.querySelector('.calendar__add-event__close');
function showForm() {
    let addEventForm = document.querySelector('.calendar__add-event');
    if(addEventForm.style.display == 'block') {
        addEventForm.style.display = 'none';
    }
    else {
        addEventForm.style.display = 'block';
    }
}
addEvent.addEventListener('click', showForm, false);
closeEvent.addEventListener('click', showForm, false);

// Показать сегодняшнюю дату
let todayBtn = document.querySelector('.datepicker__btn-today');
function showToday() {
    let dateCol = document.querySelectorAll('.datepicker-col');
    for(let i=0;i<daysValue;i++){
        if(i+1 == currentDate && month == currentMonth && !dateCol[i].classList.contains('today')  ) {
            dateCol[i].classList += " today";
        }
    }
}
todayBtn.addEventListener('click', showToday, false);

let refrestBtn = document.querySelector('.refresh');
function refreshFunc() {
    let datesColMain = document.querySelectorAll('.datepicker-col');
    for(i=0;i<datesColMain;i++) {
        datesColMain[i].classList.remove('filled');
    }
}
refrestBtn.addEventListener('click', refreshFunc, false);