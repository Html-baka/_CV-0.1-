let divLength = document.querySelector('.level').offsetWidth - 2;
const svgPath = document.querySelector('.meter');
const svgPathAll = document.querySelectorAll('.meter');
dataAttr = document.querySelectorAll('.level-svg');

document.body.onload=function(){
   for (i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset 0ms ease-in-out';
      svgPathAll[i].style.strokeDashoffset = divLength;
      svgPathAll[i].setAttribute("d", "M0 10, " + divLength +" 10");
      svgPathAll[i].setAttribute("stroke-dasharray", divLength); //make 1 line with length = divLength
   }   
};

window.onresize=function(){
   for (i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset 0ms ease-in-out';
      divLength = document.querySelector('.level').offsetWidth - 2;
      svgPathAll[i].style.strokeDashoffset = divLength;
      svgPathAll[i].setAttribute("d", "M0 10, " + divLength +" 10");
      svgPathAll[i].setAttribute("stroke-dasharray", divLength); //make 1 line with length = divLength
   }
   for (i = 0; i < svgPathAll.length; i++){
      let totalProgress = parseInt(divLength - ((divLength * dataAttr[i].getAttribute(['data-value'])) / 100));
      svgPathAll[i].style.strokeDashoffset = totalProgress;
   }
};

function loadProgress() {
   for (i = 0; i < svgPathAll.length; i++){
      svgPathAll[i].style.transition = 'stroke-dashoffset ' + (1450 + i * 290) + 'ms ease-in-out 200ms';
      let totalProgress = parseInt(divLength - ((divLength * dataAttr[i].getAttribute(['data-value'])) / 100));
      svgPathAll[i].style.strokeDashoffset = totalProgress;
   }
}

let progressBar = document.querySelector('.level');

let lockedSkill = false;
function checkSkill(){
   if (lockedSkill == false){
      let distanceFromTop = progressBar.getBoundingClientRect().top;
      let userDeviceHeight = window.innerHeight;
         if (distanceFromTop - userDeviceHeight <= 0 && distanceFromTop >= 0) { //-96 because the height of the element is +-96px
            setTimeout( () => {
               loadProgress();
            }, 300);
            lockedSkill = true;
         }
   }  
}

