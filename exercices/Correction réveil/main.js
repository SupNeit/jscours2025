const message = document.getElementById("message")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const star = document.getElementById("star")
const hourAlarm = document.getElementById("hour-alarm")
const minuteAlarm = document.getElementById("minute-alarm")
const btnAlarm = document.getElementById("btn-alarm")

let h = 0;
let m = 0;

let hAlarm = 0;
let mAlarm = 0;

let alarmTrigger = false;
let dring = false;

hourAlarm.addEventListener("click", function () {
    hAlarm++
    hAlarm = hAlarm >= 24 ? 0 : hAlarm;
    this.innerText = hAlarm < 10 ? hAlarm.toString().padStart(2,"0") : hAlarm ;
})

minuteAlarm.addEventListener("click", function () {
    mAlarm++
    mAlarm = mAlarm >= 60 ? 0 : mAlarm;
    this.innerText = mAlarm < 10 ? mAlarm.toString().padStart(2,"0") : mAlarm ;
})

btnAlarm.addEventListener("click", function (){
    alarmTrigger = !alarmTrigger
    if (alarmTrigger) {
        star.classList.remove("hide")
    }else{
        star.classList.add("hide")
        message.classList.remove("dring")
        dring = false
        mAlarm = 0;
        hAlarm = 0;
        minuteAlarm.innerText = "00";
        hourAlarm.innerText = "00";
    }
})

setInterval(function () {
    m++
    if ( m >= 60){
        m = 0
        h++
    }

    h = h >= 24 ? 0 : h;

    minute.innerText = m < 10 ? m.toString().padStart(2, "0") : m;
    hour.innerText = h < 10 ? h.toString().padStart(2, "0") : h;

    if(alarmTrigger) {
        if ( h === hAlarm && m === mAlarm){
            dring = true
            if(dring){
                message.classList.add('dring')
            }
        }
    }

}, 1000)