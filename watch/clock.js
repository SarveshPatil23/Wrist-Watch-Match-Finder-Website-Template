let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let date1 = document.getElementById('date1');
let day2 = document.getElementById('day');

setInterval(() => {
    let a = new Date()
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mon = a.getUTCMonth() + 1;
    let yr = a.getFullYear();
    let day = a.getDay();
    let day1
    switch(day){
        case 0: day1 = "Sunday";
        break; 
        case 1: day1 = "Monday";
        break; 
        case 2: day1 = "Tuesday";
        break; 
        case 3: day1 = "Wednesday";
        break; 
        case 4: day1 = "Thurday";
        break; 
        case 5: day1 = "Friday";
        break; 
        case 6: day1 = "Saturday";
        break; 
    }
    hrs.innerHTML =  `${h}`;
    min.innerHTML =  `${m}`;
    sec.innerHTML =  `${s}`;
    date1.innerHTML =`${d} ` + `/ ${mon} ` +`/ ${yr}`;
    day2.innerHTML =  `${day1}`;
}, 1000);

