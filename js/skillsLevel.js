const divLength = document.querySelector('.level').offsetWidth - 2;
const svgPathAll = document.querySelectorAll('.meter');
const progressBar = document.querySelector('.level');
let dataAttr = document.querySelectorAll('.level-svg');
let lockedSkill = false;

document.body.onload = function() {
   for (let i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset 0ms ease-in-out';
      svgPathAll[i].style.strokeDashoffset = divLength;
      setAttributes(i, divLength); // take out similar logic in 1 function
   }   
};

window.onresize = function() {
   for (let i = 0; i < svgPathAll.length; i++){
      let divLength = document.querySelector('.level').offsetWidth - 2;
      svgPathAll[i].style='';
      setAttributes(i, divLength); // take out similar logic in 1 function
      svgPathAll[i].setAttribute("stroke-dashoffset", parseInt(divLength - ((divLength * (dataAttr[i].getAttribute(['data-value'])) / 100)))); 
   }
};

function setAttributes(i, divLength) {
   svgPathAll[i].setAttribute("d", "M0 10, " + divLength +" 10");
   svgPathAll[i].setAttribute("stroke-dasharray", divLength);   
}

function loadProgress() {
   for (let i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset ' + (900 + i * 400) + 'ms ease-in-out';
      let totalProgress = parseInt(divLength - ((divLength * dataAttr[i].getAttribute(['data-value'])) / 100));
      svgPathAll[i].style.strokeDashoffset = totalProgress;
   }
}


export default function checkSkill() {
   if (lockedSkill == false) {
      let distanceFromTop = progressBar.getBoundingClientRect().top;
      let userDeviceHeight = window.innerHeight;
         if (distanceFromTop - userDeviceHeight <= 0) { 
            setTimeout( () => {
               loadProgress();
            }, 200);
            lockedSkill = true;
         }
   }  
}


