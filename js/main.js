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