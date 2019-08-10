$( document ).ready(function() {

var yourDateToGo = new Date("Aug 15, 2019 15:37:25");


var timing = setInterval(
    function () {

        var currentDate = new Date().getTime();
        var timeLeft = yourDateToGo - currentDate;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        if (days < 10) days="0"+days;
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) hours="0"+hours;
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) minutes="0"+minutes;
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        if (seconds < 10) seconds="0"+seconds;

        document.getElementById("countdown").innerHTML = '<div class="countdown-col">' + days + '<span class="countdown-box">days</span>' + "</div>" + " : " +'<div class="countdown-col">' + hours + '<span class="countdown-box">hours</span>' + "</div>" + " : " +'<div class="countdown-col">' + minutes + '<span class="countdown-box">minutes</span>' + "</div>" + " : " +'<div class="countdown-col">' + seconds + '<span class="countdown-box">seconds</span>' + "</div>";

        if (timeLeft <= 0) {
            clearInterval(timing);
            document.getElementById("countdown").innerHTML = "It's over";
        }
    }, 1000);
    new WOW().init();
});