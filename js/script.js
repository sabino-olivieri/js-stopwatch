const centSecondElem = document.querySelector(".cent-seconds");

const secondsElem = document.querySelector(".seconds");

const minutesElem = document.querySelector(".minutes");

const hoursElem = document.querySelector(".hours");

const divLapElem = document.querySelector(".div-lap");

const stopElem = document.querySelector(".stop");

const playElem = document.querySelector(".play");

const pauseElem = document.querySelector(".pause");

const lapElem = document.querySelector(".lap");

let centSeconds = -1, seconds = -1, minutes = -1, hours = -1;

let time;

let strToPrint = "";

let lapCount = 0;

playElem.addEventListener("click", function() {

    pauseElem.classList.remove("ms_hidden");
    stopElem.classList.remove("ms_hidden");
    lapElem.classList.remove("ms_hidden");
    playElem.classList.add("ms_hidden");

    time = setInterval(function() {
        centSeconds = (centSeconds === -1) ? (centSeconds = 0) : (centSeconds = centSeconds + 1);

        if (centSeconds < 100) {

            strToPrint = editStr(centSeconds, seconds);

            printElem(strToPrint, centSecondElem);
        } else {
            console.log("entrato");
                centSeconds = 0;
                seconds = (seconds === -1) ? (seconds = 1) : (seconds = seconds + 1);
        } 

        if( seconds < 60 && seconds > 0){

            strToPrint = editStr(seconds, minutes);
            printElem(strToPrint, secondsElem);

        } 
        if (seconds === 60) {
                
            seconds = 0;
            minutes = (minutes === -1) ? (minutes = 1) : (minutes = minutes + 1);
        }
        
        if( minutes < 60 && minutes > 0){

            strToPrint = editStr(minutes, hours);
            printElem(strToPrint, minutesElem);
    
        } 
        if (minutes === 60) {

            minutes = 0;
            hours = (hours === -1) ? (hours = 1) : (hours = hours + 1);

            strToPrint = editStr(hours);
            printElem(strToPrint, hoursElem);

        }


    }, 10);
});

pauseElem.addEventListener("click", function(){
    playElem.classList.remove("ms_hidden");
    pauseElem.classList.add("ms_hidden");
    clearInterval(time);
});

stopElem.addEventListener("click", function () {
    clearInterval(time);
    centSeconds = -1, seconds = -1, minutes = -1, hours = -1, lapCount = 0;

    stopElem.classList.add("ms_hidden");
    lapElem.classList.add("ms_hidden");
    pauseElem.classList.add("ms_hidden");
    divLapElem.classList.add("ms_hidden");
    playElem.classList.remove("ms_hidden");
    printElem("", centSecondElem);
    printElem("", secondsElem);
    printElem("", minutesElem);
    printElem("", hoursElem);
    printElem("", divLapElem);
});

lapElem.addEventListener("click", function (){
    lapCount++;
    divLapElem.classList.remove("ms_hidden");
    let sHours = hours === -1 ? 0 : hours;
    let sMinutes = minutes === -1 ? 0 : minutes;
    let sSeconds = seconds === -1 ? 0 : seconds;
    divLapElem.innerHTML += `<li>Giro ${lapCount}: ${sHours}h :${sMinutes}m :${sSeconds}s :${centSeconds}cs</li>`
})


