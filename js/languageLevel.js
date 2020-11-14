const elems = document.querySelectorAll('.lang-num')
function clearProgress(percent) {
   for (i = 0; i < 4; i++) {
      let circle = document.querySelectorAll('.progress-ring__circle');
      let radius = circle[i].r.baseVal.value;
      let circumference = 2 * Math.PI * radius;
      circle[i].style.strokeDasharray = `${circumference} ${circumference}`;
      circle[i].style.strokeDashoffset = circumference;
      let offset = circumference - percent / 100 * circumference;
      circle[i].style.strokeDashoffset = offset;
   }
}
clearProgress(0);

function setProgress(percent) {
   document.querySelector('.progress-ring__circle-off').style.transition = 'stroke-dashoffset 3s';
   let circle = document.querySelector('.progress-ring__circle-off');
   let radius = circle.r.baseVal.value;
   let circumference = 2 * Math.PI * radius;

   circle.style.strokeDasharray = `${circumference} ${circumference}`;
   circle.style.strokeDashoffset = circumference;
   
   let offset = circumference - percent / 100 * circumference;
   circle.style.strokeDashoffset = offset;

   circle.classList.remove('progress-ring__circle-off');
}


let circle = document.querySelector('.progress-ring__circle-off');
// console.log(circle.getBoundingClientRect().top);
// console.log(window.innerHeight);

let locked = false;
function checkScroll(){
   if (locked == false){
      // console.log(locked);
      // console.log(circle.getBoundingClientRect().top);
      // console.log(window.innerHeight);
      let distanceFromTop = circle.getBoundingClientRect().top;
      let userDeviceHeight = window.innerHeight;
         if (distanceFromTop - userDeviceHeight <= -66 && distanceFromTop >= 0 ) { //-96 because the height of the element is +-96px
            // console.log('yatta');// run setProgress function
            setTimeout(() => {
               setProgress(elems[0].innerText);
            }, 1000);
            setTimeout(() => {
               setProgress(elems[1].innerText);
            }, 1300);
            setTimeout(() => {
               setProgress(elems[2].innerText);
            }, 1500);
            setTimeout(() => {
               setProgress(elems[3].innerText);
            }, 1700);
            locked = true;
            // console.log(locked);
         }
   }  
}

window.onscroll = function () {
   checkScroll();
   checkSkill()
}

// document.addEventListener('onscroll', checkScroll())
// setInterval(() => {
   
// }, 2000);