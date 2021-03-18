const divLength = document.querySelector('.level').offsetWidth - 2;
const svgPath = document.querySelector('.meter');
const svgPathAll = document.querySelectorAll('.meter');
let dataAttr = document.querySelectorAll('.level-svg');
document.body.onload=function(){
   for (let i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset 0ms ease-in-out';
      svgPathAll[i].style.strokeDashoffset = divLength;
      svgPathAll[i].setAttribute("d", "M0 10, " + divLength +" 10");
      svgPathAll[i].setAttribute("stroke-dasharray", divLength); //make 1 line with length = divLength
   }   
};

window.onresize=function(){
   for (let i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style='';
      let divLength = document.querySelector('.level').offsetWidth - 2;
      svgPathAll[i].setAttribute("d", "M0 10, " + divLength +" 10");
      svgPathAll[i].setAttribute("stroke-dasharray", divLength); 
      svgPathAll[i].setAttribute("stroke-dashoffset", parseInt(divLength - ((divLength * (dataAttr[i].getAttribute(['data-value'])) / 100)))); 
   }
};

function loadProgress() {
   for (let i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset ' + (900 + i * 400) + 'ms ease-in-out';
      let totalProgress = parseInt(divLength - ((divLength * dataAttr[i].getAttribute(['data-value'])) / 100));
      svgPathAll[i].style.strokeDashoffset = totalProgress;
   }
}

const progressBar = document.querySelector('.level');
let lockedSkill = false;
export default function checkSkill(){
   if (lockedSkill == false){
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


