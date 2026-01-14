
//DATE
const day=document.querySelector(".day");
const day2=document.querySelector(".day2");
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
function updateTime(){
const d = new Date();
let month = months[d.getMonth()];
day.textContent=d.getHours()+":"+d.getUTCMinutes();
day2.textContent=month+" "+d.getDate();

}
setInterval(updateTime,100);

//CONSOLE
document.querySelector('.fa-gears').onclick=()=>{
    document.querySelector('.longbox').classList.toggle('active');
}
document.querySelector('.fa-calendar-days').onclick=()=>{
    document.querySelector('.calender').classList.toggle('active');
}
document.querySelector('.fa-star').onclick=()=>{
    document.querySelector('.box-container').classList.toggle('active');
    document.querySelector('.watch').classList.toggle('active');
}