// let main1 = document.querySelector(".main1");
// //////////////////////////////////////////////////////////////////////
// /*Работа кнопки темной темы*/
// let dinamicButton = document.querySelector(".dinamicButton");
// let dinamicMarker = document.querySelector(".dinamicMarker");
// let bool = false;
//
// dinamicMarker.onclick = function () {
//   if(bool == false){
//     let b = 1;
//     let timerId = setInterval(() =>{dinamicMarker.style.left = b + 'px';b+=1;}, 10);
//     setTimeout(() => {clearInterval(timerId);}, 300);
//     dinamicButton.style.background = '#00e673';
//     main1.style.background = 'aqua';
//     bool = true;
//   }
//   else{
//     let b = 29;
//     let timerId = setInterval(() =>{dinamicMarker.style.left = b + 'px';b-=1;}, 10);
//     setTimeout(() => {clearInterval(timerId);}, 300);
//     dinamicButton.style.background = '#a3a3c2';
//     main1.style.background = 'white';
//     bool = false;
//   }
//
// }

document.querySelector(".c-buter").addEventListener('click', function(e){
  e.preventDefault();
  if(this.classList.contains('is-active')){
      this.classList.remove('is-active');
      document.querySelector('#menu').classList.remove('nav-active');
      document.body.classList.remove('body-active');
  }
  else{
    this.classList.add('is-active');
    document.querySelector('#menu').classList.add('nav-active');
    document.body.classList.add('body-active');
  }
})
