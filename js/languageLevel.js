import checkSkill from "./skillsLevel.js";

const elems = document.querySelectorAll('.lang-num') 
const circle = document.querySelector('.progress-ring__circle-off');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

function clearProgress(percent) {
   for (let i = 0; i < elems.length; i++) {
      const circle = document.querySelectorAll('.progress-ring__circle');
      circle[i].style.strokeDasharray = `${circumference} ${circumference}`;

      let offset = circumference - percent / 100 * circumference;
      circle[i].style.strokeDashoffset = offset;
   }
}
clearProgress(0);

function setProgress(percent) {
   const circle = document.querySelector('.progress-ring__circle-off');
   circle.style.transition = 'stroke-dashoffset 3s';
   
   circle.style.strokeDasharray = `${circumference} ${circumference}`;
   
   let offset = circumference - percent / 100 * circumference;
   circle.style.strokeDashoffset = offset;

   circle.classList.remove('progress-ring__circle-off');
}

let locked = false;
function checkScroll(){
   if (locked == false){
      let distanceFromTop = circle.getBoundingClientRect().top; //counts distance from the top of the viewport to the first circle
      let userDeviceHeight = window.innerHeight;
         if (distanceFromTop - userDeviceHeight <= 0 ) { //&& distanceFromTop >= 0 
            setTimeout(() => {
               setProgress(elems[0].innerText);
            }, 1000);
            setTimeout(() => {
               setProgress(elems[1].innerText);
            }, 1200);
            setTimeout(() => {
               setProgress(elems[2].innerText);
            }, 1400);
            setTimeout(() => {
               setProgress(elems[3].innerText);
            }, 1400);
            locked = true;
         }
   }  
}

window.onscroll = function () {
   checkScroll();
   checkSkill();
}
checkScroll();
checkSkill();
