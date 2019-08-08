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
function resizeSlider() {
    let slide = document.getElementsByClassName('main-slide'); // Массив слайдов
    let slidersCount = slide.length; // число слайдов
    let slideWidth = window.innerWidth; // Ширина слайда
    let sliderWidth = slidersCount * slideWidth; // Считаем ширину слайдера суммируя все слайды
    let sliderTrack = document.getElementsByClassName('slide-track')[0];
    sliderTrack.style.width = sliderWidth + "px"; // Задаём новую ширину слайдеру
    for(let i=0; i<slidersCount; i++) {
        slide[i].style.width =  slideWidth + "px"; // Задаём ширину слайдам
    }

    let buttonPrev = document.querySelector(".slide-prev");
    let buttonNext = document.querySelector(".slide-next");

    // Следующий слайд
    let slidePosition = 0;
    sliderTrack.style.transform = `translate3d(-${slidePosition}px, 0, 0)`;
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
}
window.addEventListener("resize", resizeSlider);



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
        // let currM = today.getUTCMonth() + 1;
        // let currDay = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
        // let currMonth = today.getUTCMonth() + 1 < 10 ? "0" + currM : currM;
        // datepicker.value = currDay + "/" + currMonth + "/" + year;
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
        if(i+1 === currentDate && month === currentMonth && year === today.getFullYear() ) {
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
            let currDay = this.getAttribute("date") < 10 ? "0" + this.getAttribute("date") : this.getAttribute("date");
            let currMonth = this.getAttribute("month") < 10 ? "0" + this.getAttribute("month") : this.getAttribute("month");
            datepicker.value = currDay + "/" + currMonth + "/" + year;
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
        document.querySelector('.datepicker').remove();
        // daysValue = new Date(today.getFullYear(), month, 0).getDate();
        if(month > 11) {
            year += 1;
            month = 1;
            day = 1;
        }
        else {
            month += 1;
        }
        createDatepicker();
    }
    if (event.target.matches('.date-prev')) {
        document.querySelector('.datepicker').remove();
        // daysValue = new Date(today.getFullYear(), month, 0).getDate();
        if(month === 1) {
            year -= 1;
            month = 12;
            day = 1;
        }
        else {
            month -= 1;
        }
        createDatepicker();
    }
    if (!event.target.matches('.datepicker *') && !event.target.matches('#datepicker') && document.getElementsByClassName('datepicker').length > 0 ) {
        document.querySelector('.datepicker').remove();
    }
}, false);

// game
let imgArr = ["111", "1", "1_4", "1152", "1213", "12xB1r86Mg4", "141", "1456", "151", "2gkoiDVle6s", "415", "622", "8", "af3pYRwKK8s", "gto-logo", "html-css", "images", "index"];
let gameContainer = document.querySelector('.game-table');
let gameCount = 9;
function createCard() {
    // создем блок с картинкой
    let card = document.createElement("div");
    card.className = "game-card"
    gameContainer.appendChild(card);
    card.setAttribute("onClick", "myFunc(this)");
    // запихиваем картинки
    let crImg = document.createElement("img");
    crImg.setAttribute("src", "images/game/" + imgArr[i] + ".jpg");
    crImg.setAttribute("data-id", imgArr[i]);
    card.appendChild(crImg);
}

for (j=0;j<2;j++) {
    for(i=0;i<gameCount;i++) {
        createCard();
    }
}
let myCard = document.querySelectorAll('.game-card');
let counter = 0;
function myFunc(obj) {
    if(!obj.classList.contains("default")) {
        let flipped = document.querySelectorAll('.flipped');
        if(flipped.length === 0) {
            obj.childNodes[0].classList.add("flipped");
        }
        else if (flipped.length === 1) {
            obj.childNodes[0].classList.add("flipped");
            setTimeout(function (e) {
                let flipped = document.querySelectorAll('.flipped');
                if(flipped.length > 1) {
                    if(flipped[0].getAttribute("data-id") === flipped[1].getAttribute("data-id")) {
                        counter += 2;
                        for(i=0;i<flipped.length;i++) {
                            flipped[i].style.left = "-1000px";
                            flipped[i].parentElement.style.background = "#000";
                            flipped[i].parentElement.classList.add('default');
                            flipped[i].classList.remove('flipped');
                        }
                    }
                    else {
                        flipped[0].classList.remove("flipped");
                        flipped[1].classList.remove("flipped");
                    }
                }
            },500);
            if(counter === 16) {
                setTimeout(function () {
                    let win = document.createElement("div");
                    win.className = "game-win"
                    gameContainer.appendChild(win);
                    win.innerHTML = "Победа!";
                    let restart = document.createElement("button");
                    restart.className = "game-restart"
                    win.appendChild(restart);
                    restart.innerHTML = "Начать заново";
                    restart.setAttribute("onClick", "restart(this)");
                }, 500);
            }
        }
        else {
            return false;
        }
    }
}

function restart(elem) {
    let myCard = document.querySelectorAll('.game-card');
    for(i=0;i<myCard.length;i++){
        myCard[i].classList.remove('default');
        myCard[i].style.background = "#fff";
        myCard[i].childNodes[0].style.zIndex = "1";
        myCard[i].childNodes[0].style.left = "0";
    }
    document.querySelector('.game-win').remove();
}





//form yeti
// var emailLabel = document.querySelector('#loginEmailLabel'), email = document.querySelector('#loginEmail'), passwordLabel = document.querySelector('#loginPasswordLabel'), password = document.querySelector('#loginPassword'), showPasswordCheck = document.querySelector('#showPasswordCheck'), showPasswordToggle = document.querySelector('#showPasswordToggle'), mySVG = document.querySelector('.svgContainer'), twoFingers = document.querySelector('.twoFingers'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair'), bodyBG = document.querySelector('.bodyBGnormal'), bodyBGchanged = document.querySelector('.bodyBGchanged');
// var activeElement, curEmailIndex, screenCenter, svgCoords, emailCoords, emailScrollMax, chinMin = .5, dFromC, mouthStatus = "small", blinking, eyeScale = 1, eyesCovered = false, showPasswordClicked = false;
// var eyeLCoords, eyeRCoords, noseCoords, mouthCoords, eyeLAngle, eyeLX, eyeLY, eyeRAngle, eyeRX, eyeRY, noseAngle, noseX, noseY, mouthAngle, mouthX, mouthY, mouthR, chinX, chinY, chinS, faceX, faceY, faceSkew, eyebrowSkew, outerEarX, outerEarY, hairX, hairS;
//
// function calculateFaceMove(e) {
//     var
//         carPos = email.selectionEnd,
//         div = document.createElement('div'),
//         span = document.createElement('span'),
//         copyStyle = getComputedStyle(email),
//         caretCoords = {}
//     ;
//     if(carPos == null || carPos == 0) {
//         // if browser doesn't support 'selectionEnd' property on input[type="email"], use 'value.length' property instead
//         carPos = email.value.length;
//     }
//     [].forEach.call(copyStyle, function(prop){
//         div.style[prop] = copyStyle[prop];
//     });
//     div.style.position = 'absolute';
//     document.body.appendChild(div);
//     div.textContent = email.value.substr(0, carPos);
//     span.textContent = email.value.substr(carPos) || '.';
//     div.appendChild(span);
//
//     if(email.scrollWidth <= emailScrollMax) {
//         caretCoords = getPosition(span);
//         dFromC = screenCenter - (caretCoords.x + emailCoords.x);
//         eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
//         eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
//         noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
//         mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
//     } else {
//         eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
//         eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
//         noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
//         mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + emailScrollMax, emailCoords.y + 25);
//     }
//
//     eyeLX = Math.cos(eyeLAngle) * 20;
//     eyeLY = Math.sin(eyeLAngle) * 10;
//     eyeRX = Math.cos(eyeRAngle) * 20;
//     eyeRY = Math.sin(eyeRAngle) * 10;
//     noseX = Math.cos(noseAngle) * 23;
//     noseY = Math.sin(noseAngle) * 10;
//     mouthX = Math.cos(mouthAngle) * 23;
//     mouthY = Math.sin(mouthAngle) * 10;
//     mouthR = Math.cos(mouthAngle) * 6;
//     chinX = mouthX * .8;
//     chinY = mouthY * .5;
//     chinS = 1 - ((dFromC * .15) / 100);
//     if(chinS > 1) {
//         chinS = 1 - (chinS - 1);
//         if(chinS < chinMin) {
//             chinS = chinMin;
//         }
//     }
//     faceX = mouthX * .3;
//     faceY = mouthY * .4;
//     faceSkew = Math.cos(mouthAngle) * 5;
//     eyebrowSkew = Math.cos(mouthAngle) * 25;
//     outerEarX = Math.cos(mouthAngle) * 4;
//     outerEarY = Math.cos(mouthAngle) * 5;
//     hairX = Math.cos(mouthAngle) * 6;
//     hairS = 1.2;
//
//     TweenMax.to(eyeL, 1, {x: -eyeLX , y: -eyeLY, ease: Expo.easeOut});
//     TweenMax.to(eyeR, 1, {x: -eyeRX , y: -eyeRY, ease: Expo.easeOut});
//     TweenMax.to(nose, 1, {x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut});
//     TweenMax.to(mouth, 1, {x: -mouthX , y: -mouthY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut});
//     TweenMax.to(chin, 1, {x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut});
//     TweenMax.to(face, 1, {x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: "center top", ease: Expo.easeOut});
//     TweenMax.to(eyebrow, 1, {x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut});
//     TweenMax.to(outerEarL, 1, {x: outerEarX, y: -outerEarY, ease: Expo.easeOut});
//     TweenMax.to(outerEarR, 1, {x: outerEarX, y: outerEarY, ease: Expo.easeOut});
//     TweenMax.to(earHairL, 1, {x: -outerEarX, y: -outerEarY, ease: Expo.easeOut});
//     TweenMax.to(earHairR, 1, {x: -outerEarX, y: outerEarY, ease: Expo.easeOut});
//     TweenMax.to(hair, 1, {x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut});
//
//     document.body.removeChild(div);
// };
//
// function onEmailInput(e) {
//     calculateFaceMove(e);
//     var value = email.value;
//     curEmailIndex = value.length;
//
//     // very crude email validation to trigger effects
//     if(curEmailIndex > 0) {
//         if(mouthStatus == "small") {
//             mouthStatus = "medium";
//             TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut});
//             TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
//             TweenMax.to(tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
//             TweenMax.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
//             eyeScale = .85;
//         }
//         if(value.includes("@")) {
//             mouthStatus = "large";
//             TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthLargeBG, ease: Expo.easeOut});
//             TweenMax.to(tooth, 1, {x: 3, y: -2, ease: Expo.easeOut});
//             TweenMax.to(tongue, 1, {y: 2, ease: Expo.easeOut});
//             TweenMax.to([eyeL, eyeR], 1, {scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center"});
//             eyeScale = .65;
//         } else {
//             mouthStatus = "medium";
//             TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthMediumBG, ease: Expo.easeOut});
//             TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
//             TweenMax.to(tongue, 1, {x: 0, y: 1, ease: Expo.easeOut});
//             TweenMax.to([eyeL, eyeR], 1, {scaleX: .85, scaleY: .85, ease: Expo.easeOut});
//             eyeScale = .85;
//         }
//     } else {
//         mouthStatus = "small";
//         TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, {morphSVG: mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut});
//         TweenMax.to(tooth, 1, {x: 0, y: 0, ease: Expo.easeOut});
//         TweenMax.to(tongue, 1, {y: 0, ease: Expo.easeOut});
//         TweenMax.to([eyeL, eyeR], 1, {scaleX: 1, scaleY: 1, ease: Expo.easeOut});
//         eyeScale = 1;
//     }
// }
//
// function onEmailFocus(e) {
//     activeElement = "email";
//     e.target.parentElement.classList.add("focusWithText");
//     //stopBlinking();
//     //calculateFaceMove();
//     onEmailInput();
// }
//
// function onEmailBlur(e) {
//     activeElement = null;
//     setTimeout(function() {
//         if(activeElement == "email") {
//         } else {
//             if(e.target.value == "") {
//                 e.target.parentElement.classList.remove("focusWithText");
//             }
//             //startBlinking();
//             resetFace();
//         }
//     }, 100);
// }
//
// function onEmailLabelClick(e) {
//     activeElement = "email";
// }
//
// function onPasswordFocus(e) {
//     activeElement = "password";
//     if(!eyesCovered) {
//         coverEyes();
//     }
// }
//
// function onPasswordBlur(e) {
//     activeElement = null;
//     setTimeout(function() {
//         if(activeElement == "toggle" || activeElement == "password") {
//         } else {
//             uncoverEyes();
//         }
//     }, 100);
// }
//
// function onPasswordToggleFocus(e) {
//     activeElement = "toggle";
//     if(!eyesCovered) {
//         coverEyes();
//     }
// }
//
// function onPasswordToggleBlur(e) {
//     activeElement = null;
//     if(!showPasswordClicked) {
//         setTimeout(function() {
//             if(activeElement == "password" || activeElement == "toggle") {
//             } else {
//                 uncoverEyes();
//             }
//         }, 100);
//     }
// }
//
// function onPasswordToggleMouseDown(e) {
//     showPasswordClicked = true;
// }
//
// function onPasswordToggleMouseUp(e) {
//     showPasswordClicked = false;
// }
//
// function onPasswordToggleChange(e) {
//     setTimeout(function() {
//         // if checkbox is checked, show password
//         if(e.target.checked) {
//             password.type = "text";
//             spreadFingers();
//
//             // if checkbox is off, hide password
//         } else {
//             password.type = "password";
//             closeFingers();
//         }
//     }, 100);
// }
//
// function onPasswordToggleClick(e) {
//     //console.log("click: " + e.target.id);
//     e.target.focus();
// }
//
// function spreadFingers() {
//     TweenMax.to(twoFingers, .35, {transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut});
// }
//
// function closeFingers() {
//     TweenMax.to(twoFingers, .35, {transformOrigin: "bottom left", rotation: 0, x: 0, y: 0, ease: Power2.easeInOut});
// }
//
// function coverEyes() {
//     TweenMax.killTweensOf([armL, armR]);
//     TweenMax.set([armL, armR], {visibility: "visible"});
//     TweenMax.to(armL, .45, {x: -93, y: 10, rotation: 0, ease: Quad.easeOut});
//     TweenMax.to(armR, .45, {x: -93, y: 10, rotation: 0, ease: Quad.easeOut, delay: .1});
//     TweenMax.to(bodyBG, .45, {morphSVG: bodyBGchanged, ease: Quad.easeOut});
//     eyesCovered = true;
// }
//
// function uncoverEyes() {
//     TweenMax.killTweensOf([armL, armR]);
//     TweenMax.to(armL, 1.35, {y: 220, ease: Quad.easeOut});
//     TweenMax.to(armL, 1.35, {rotation: 105, ease: Quad.easeOut, delay: .1});
//     TweenMax.to(armR, 1.35, {y: 220, ease: Quad.easeOut});
//     TweenMax.to(armR, 1.35, {rotation: -105, ease: Quad.easeOut, delay: .1, onComplete: function() {
//             TweenMax.set([armL, armR], {visibility: "hidden"});
//         }});
//     TweenMax.to(bodyBG, .45, {morphSVG: bodyBG, ease: Quad.easeOut});
//     eyesCovered = false;
// }
//
// function resetFace() {
//     TweenMax.to([eyeL, eyeR], 1, {x: 0, y: 0, ease: Expo.easeOut});
//     TweenMax.to(nose, 1, {x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut});
//     TweenMax.to(mouth, 1, {x: 0, y: 0, rotation: 0, ease: Expo.easeOut});
//     TweenMax.to(chin, 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
//     TweenMax.to([face, eyebrow], 1, {x: 0, y: 0, skewX: 0, ease: Expo.easeOut});
//     TweenMax.to([outerEarL, outerEarR, earHairL, earHairR, hair], 1, {x: 0, y: 0, scaleY: 1, ease: Expo.easeOut});
// }
//
// function startBlinking(delay) {
//     if(delay) {
//         delay = getRandomInt(delay);
//     } else {
//         delay = 1;
//     }
//     blinking = TweenMax.to([eyeL, eyeR], .1, {delay: delay, scaleY: 0, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function() {
//             startBlinking(12);
//         }});
// }
//
// function stopBlinking() {
//     blinking.kill();
//     blinking = null;
//     TweenMax.set([eyeL, eyeR], {scaleY: eyeScale});
// }
//
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
//
// function getAngle(x1, y1, x2, y2) {
//     var angle = Math.atan2(y1 - y2, x1 - x2);
//     return angle;
// }
//
// function getPosition(el) {
//     var xPos = 0;
//     var yPos = 0;
//
//     while (el) {
//         if (el.tagName == "BODY") {
//             // deal with browser quirks with body/window/document and page scroll
//             var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//             var yScroll = el.scrollTop || document.documentElement.scrollTop;
//
//             xPos += (el.offsetLeft - xScroll + el.clientLeft);
//             yPos += (el.offsetTop - yScroll + el.clientTop);
//         } else {
//             // for all other non-BODY elements
//             xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//             yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//         }
//
//         el = el.offsetParent;
//     }
//     //console.log("xPos: " + xPos + ", yPos: " + yPos);
//     return {
//         x: xPos,
//         y: yPos
//     };
// }
//
// function isMobileDevice() {
//     var check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };
//
// function initLoginForm() {
//     // some measurements for the svg's elements
//     svgCoords = getPosition(mySVG);
//     emailCoords = getPosition(email);
//     screenCenter = svgCoords.x + (mySVG.offsetWidth / 2);
//     eyeLCoords = {x: svgCoords.x + 84, y: svgCoords.y + 76};
//     eyeRCoords = {x: svgCoords.x + 113, y: svgCoords.y + 76};
//     noseCoords = {x: svgCoords.x + 97, y: svgCoords.y + 81};
//     mouthCoords = {x: svgCoords.x + 100, y: svgCoords.y + 100};
//
//     // handle events for email input
//     email.addEventListener('focus', onEmailFocus);
//     email.addEventListener('blur', onEmailBlur);
//     email.addEventListener('input', onEmailInput);
//     emailLabel.addEventListener('click', onEmailLabelClick);
//
//     // handle events for password input
//     password.addEventListener('focus', onPasswordFocus);
//     password.addEventListener('blur', onPasswordBlur);
//     //passwordLabel.addEventListener('click', onPasswordLabelClick);
//
//     // handle events for password checkbox
//     showPasswordCheck.addEventListener('change', onPasswordToggleChange);
//     showPasswordCheck.addEventListener('focus', onPasswordToggleFocus);
//     showPasswordCheck.addEventListener('blur', onPasswordToggleBlur);
//     showPasswordCheck.addEventListener('click', onPasswordToggleClick);
//     showPasswordToggle.addEventListener('mouseup', onPasswordToggleMouseUp);
//     showPasswordToggle.addEventListener('mousedown', onPasswordToggleMouseDown);
//
//     // move arms to initial positions
//     TweenMax.set(armL, {x: -93, y: 220, rotation: 105, transformOrigin: "top left"});
//     TweenMax.set(armR, {x: -93, y: 220, rotation: -105, transformOrigin: "top right"});
//
//     // set initial mouth property (fixes positioning bug)
//     TweenMax.set(mouth, {transformOrigin: "center center"});
//
//     // activate blinking
//     startBlinking(5);
//
//     // determine how far email input can go before scrolling occurs
//     // will be used as the furthest point avatar will look to the right
//     emailScrollMax = email.scrollWidth;
//
//     // check if we're on mobile/tablet, if so then show password initially
//     if(isMobileDevice()) {
//         password.type = "text";
//         showPasswordCheck.checked = true;
//         TweenMax.set(twoFingers, {transformOrigin: "bottom left", rotation: 30, x: -9, y: -2, ease: Power2.easeInOut});
//     }
//
//     // clear the console
//     console.clear();
// }
//
// initLoginForm();
